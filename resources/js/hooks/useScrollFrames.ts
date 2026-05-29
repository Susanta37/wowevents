import { useEffect, useRef, useState } from 'react';
import { usePreloadFrames } from './usePreloadFrames';

function lerp(start: number, end: number, factor: number) {
    return start + (end - start) * factor;
}

type ScrollFramesOptions = {
    /** When false (e.g. mobile), no frame download and no RAF canvas loop */
    enabled?: boolean;
};

export function useScrollFrames(
    totalFrames: number,
    framePath: (index: number) => string,
    options?: ScrollFramesOptions,
) {
    const enabled = options?.enabled ?? true;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [progress, setProgress] = useState(0);

    const scrollTarget = useRef(0);
    const scrollCurrent = useRef(0);
    const lastDrawnFrame = useRef(-1);

    const { isLoaded, progress: loadProgress, images } = usePreloadFrames(
        totalFrames,
        framePath,
        enabled,
    );

    // Update images ref when loaded
    useEffect(() => {
        imagesRef.current = images;
    }, [images]);

    // Render loop and scroll tracking (desktop / md+ only)
    useEffect(() => {
        if (!enabled) {
            return;
        }

        let animationFrameId: number;

        const onScroll = () => {
            if (!containerRef.current) {
                return;
            }

            const rect = containerRef.current.getBoundingClientRect();
            // rect.top is 0 when container is at the top of the viewport
            const maxScroll = rect.height - window.innerHeight;
            let currentScroll = -rect.top;

            if (currentScroll < 0) {
                currentScroll = 0;
            }

            if (currentScroll > maxScroll) {
                currentScroll = maxScroll;
            }

            scrollTarget.current = maxScroll > 0 ? currentScroll / maxScroll : 0;
        };

        const renderFrame = () => {
            animationFrameId = requestAnimationFrame(renderFrame);

            const prev = scrollCurrent.current;
            const target = scrollTarget.current;

            if (Math.abs(target - prev) < 0.0001) {
                scrollCurrent.current = target;
            } else {
                scrollCurrent.current = lerp(prev, target, 0.08);
            }

            const currentProgress = scrollCurrent.current;

            // Throttle state updates to reduce React re-renders, but allow enough precision for Framer Motion phases
            setProgress((prevProg) => {
                const rounded = Math.round(currentProgress * 100) / 100;

                return Math.abs(prevProg - rounded) >= 0.01 ? rounded : prevProg;
            });

            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(currentProgress * totalFrames)
            );

            // Only redraw if the frame has actually changed
            if (frameIndex === lastDrawnFrame.current) {
                return;
            }

            lastDrawnFrame.current = frameIndex;

            const canvas = canvasRef.current;

            if (!canvas) {
                return;
            }

            const ctx = canvas.getContext('2d');
            const images = imagesRef.current;

            if (!images || images.length === 0) {
                return;
            }

            const img = images[frameIndex];

            if (ctx && img && img.complete) {
                // Device Pixel Ratio scaling (capped to 1.5 for performance)
                const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
                const rect = canvas.getBoundingClientRect();

                const displayWidth = rect.width;
                const displayHeight = rect.height;

                const targetWidth = Math.floor(displayWidth * dpr);
                const targetHeight = Math.floor(displayHeight * dpr);

                if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
                    canvas.width = targetWidth;
                    canvas.height = targetHeight;
                }

                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

                const canvasRatio = displayWidth / displayHeight;
                const imgRatio = img.width / img.height;

                let drawWidth = displayWidth;
                let drawHeight = displayHeight;
                let offsetX = 0;
                let offsetY = 0;

                if (imgRatio > canvasRatio) {
                    drawWidth = displayHeight * imgRatio;
                    offsetX = (displayWidth - drawWidth) / 2;
                } else {
                    drawHeight = displayWidth / imgRatio;
                    offsetY = (displayHeight - drawHeight) / 2;
                }

                // Add slight canvas scale (1 -> 1.05) across scroll
                const zoom = 1 + currentProgress * 0.05;
                const zoomedWidth = drawWidth * zoom;
                const zoomedHeight = drawHeight * zoom;
                const zoomedOffsetX = offsetX - (zoomedWidth - drawWidth) / 2;
                const zoomedOffsetY = offsetY - (zoomedHeight - drawHeight) / 2;

                ctx.clearRect(0, 0, displayWidth, displayHeight);
                ctx.drawImage(img, zoomedOffsetX, zoomedOffsetY, zoomedWidth, zoomedHeight);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        onScroll();
        animationFrameId = requestAnimationFrame(renderFrame);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [totalFrames, enabled]);

    return { containerRef, canvasRef, progress, isLoaded, loadProgress };
}
