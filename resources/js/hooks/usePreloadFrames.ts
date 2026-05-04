import { useState, useEffect } from 'react';

export function usePreloadFrames(totalFrames: number, framePath: (index: number) => string) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isWindowLoaded, setIsWindowLoaded] = useState(
        typeof window !== 'undefined' ? document.readyState === 'complete' : false
    );

    // Track global window load event for all page assets
    useEffect(() => {
        if (document.readyState === 'complete') {
            setIsWindowLoaded(true);
        } else {
            const handleWindowLoad = () => setIsWindowLoaded(true);
            window.addEventListener('load', handleWindowLoad);
            return () => window.removeEventListener('load', handleWindowLoad);
        }
    }, []);

    useEffect(() => {
        let loaded = 0;
        let isCancelled = false;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 1; i <= totalFrames; i++) {
            const img = new Image();
            
            const handleLoad = () => {
                if (isCancelled) return;
                loaded++;
                setProgress(loaded / totalFrames);
                if (loaded === totalFrames) {
                    setIsLoaded(true);
                }
            };

            img.onload = handleLoad;
            img.onerror = handleLoad; // Continue even on error to prevent hanging

            img.src = framePath(i);
            loadedImages.push(img);
        }
        
        setImages(loadedImages);

        return () => {
            isCancelled = true;
        };
    }, [totalFrames, framePath]);

    // Only consider fully loaded when both frames and window assets are ready
    const isFullyLoaded = isLoaded && isWindowLoaded;

    return { isLoaded: isFullyLoaded, progress, images };
}
