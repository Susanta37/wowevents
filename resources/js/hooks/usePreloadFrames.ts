import { useEffect, useState } from 'react';

/** Frames to load before unlocking the hero (hides the loader). */
const PRIORITY_COUNT = 30;

/** Parallel requests per background batch (keeps network from being flooded). */
const BATCH_SIZE = 8;

export function usePreloadFrames(
    totalFrames: number,
    framePath: (index: number) => string,
    enabled = true,
) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [images, setImages] = useState<(HTMLImageElement | null)[]>([]);
    const [isWindowLoaded, setIsWindowLoaded] = useState(
        typeof window !== 'undefined' ? document.readyState === 'complete' : false,
    );

    useEffect(() => {
        if (typeof document === 'undefined') {
            return;
        }

        if (document.readyState === 'complete') {
            return;
        }

        const handleWindowLoad = () => setIsWindowLoaded(true);
        window.addEventListener('load', handleWindowLoad);

        return () => window.removeEventListener('load', handleWindowLoad);
    }, []);

    useEffect(() => {
        let cancelled = false;

        if (!enabled) {
            queueMicrotask(() => {
                if (cancelled) {
                    return;
                }

                setIsLoaded(true);
                setProgress(1);
                setImages([]);
            });

            return () => {
                cancelled = true;
            };
        }

        // Pre-allocate full array so index-based access is always valid.
        const loadedImages: (HTMLImageElement | null)[] = new Array(totalFrames).fill(null);
        let loaded = 0;

        setIsLoaded(false);
        setProgress(0);
        setImages(loadedImages);

        /**
         * Load a single frame by 1-based index.
         * Mutates loadedImages in-place so other batches see it immediately.
         */
        const loadImage = (frameIndex: number): Promise<void> =>
            new Promise((resolve) => {
                const img = new Image();

                img.onload = img.onerror = () => {
                    if (cancelled) {
                        resolve();
                        return;
                    }

                    loadedImages[frameIndex - 1] = img;
                    loaded++;
                    setProgress(loaded / totalFrames);
                    resolve();
                };

                img.src = framePath(frameIndex);
            });

        const run = async () => {
            // ── Phase 1: priority frames ────────────────────────────────────
            // Load the first PRIORITY_COUNT frames in parallel so the hero
            // unlocks quickly. These cover the initial scroll window.
            const priorityEnd = Math.min(PRIORITY_COUNT, totalFrames);

            await Promise.all(
                Array.from({ length: priorityEnd }, (_, i) => loadImage(i + 1)),
            );

            if (cancelled) {
                return;
            }

            // Unlock the hero — enough frames are ready to start scrolling.
            setIsLoaded(true);
            setImages([...loadedImages]);

            // ── Phase 2: background batches ─────────────────────────────────
            // Load the remaining frames in small parallel batches so the
            // network stays efficient and React re-renders stay infrequent.
            for (let i = priorityEnd + 1; i <= totalFrames && !cancelled; i += BATCH_SIZE) {
                const end = Math.min(i + BATCH_SIZE - 1, totalFrames);

                await Promise.all(
                    Array.from({ length: end - i + 1 }, (_, j) => loadImage(i + j)),
                );

                if (!cancelled) {
                    // Spread to create a new reference so React detects the change.
                    setImages([...loadedImages]);
                }
            }
        };

        run();

        return () => {
            cancelled = true;
        };
    }, [enabled, totalFrames, framePath]);

    const isFullyLoaded = enabled ? isLoaded && isWindowLoaded : true;

    return { isLoaded: isFullyLoaded, progress, images };
}
