import { useState, useEffect } from 'react';

export function usePreloadFrames(totalFrames: number, framePath: (index: number) => string) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [progress, setProgress] = useState(0);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

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

    return { isLoaded, progress, images };
}
