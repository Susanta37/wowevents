import { useEffect, useState } from 'react';

export function usePreloadFrames(
    totalFrames: number,
    framePath: (index: number) => string,
    enabled = true,
) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
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

        queueMicrotask(() => {
            if (cancelled) {
                return;
            }

            setIsLoaded(false);
            setProgress(0);

            let loaded = 0;
            const loadedImages: HTMLImageElement[] = [];

            for (let i = 1; i <= totalFrames; i++) {
                const img = new Image();

                const handleLoad = () => {
                    if (cancelled) {
                        return;
                    }

                    loaded++;
                    setProgress(loaded / totalFrames);

                    if (loaded === totalFrames) {
                        setIsLoaded(true);
                    }
                };

                img.onload = handleLoad;
                img.onerror = handleLoad;
                img.src = framePath(i);
                loadedImages.push(img);
            }

            if (!cancelled) {
                setImages(loadedImages);
            }
        });

        return () => {
            cancelled = true;
        };
    }, [enabled, totalFrames, framePath]);

    const isFullyLoaded = enabled ? isLoaded && isWindowLoaded : true;

    return { isLoaded: isFullyLoaded, progress, images };
}
