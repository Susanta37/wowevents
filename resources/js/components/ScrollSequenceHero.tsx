import { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollFrames } from '@/hooks/useScrollFrames';

export default function ScrollSequenceHero() {
    const totalFrames = 240;
    
    // Generate the path to the current frame image
    const framePath = useCallback((index: number) => {
        const paddedIndex = String(index).padStart(3, '0');
        return `/Event/ezgif-frame-${paddedIndex}.png`;
    }, []);

    const { containerRef, canvasRef, progress } = useScrollFrames(totalFrames, framePath);

    return (
        <div ref={containerRef} className="relative w-full bg-[#0A0A0A]" style={{ height: '400vh' }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0A0A0A]">
                {/* Fallback for very small devices or loading state */}
                <div className="absolute inset-0 flex items-center justify-center bg-[#0A0A0A] text-[#BF953F]">
                    <span className="font-serif tracking-widest opacity-50">Loading Experience...</span>
                </div>

                <canvas 
                    ref={canvasRef} 
                    className="absolute inset-0 h-full w-full object-cover z-0"
                />
                
                {/* Cinematic Overlay - Gradient for better text readability */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-black/90 pointer-events-none" />

                {/* Text Layers */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center">
                    <AnimatePresence>
                        {/* PHASE 1: 0% - 30% */}
                        {progress >= 0 && progress < 0.3 && (
                            <motion.div
                                key="phase1"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="absolute flex flex-col items-center"
                            >
                                <h2 className="text-xl font-light tracking-[0.3em] text-white/90 md:text-3xl uppercase">
                                    Welcome to Wow Events
                                </h2>
                            </motion.div>
                        )}

                        {/* PHASE 2: 30% - 60% */}
                        {progress >= 0.3 && progress < 0.6 && (
                            <motion.div
                                key="phase2"
                                initial={{ opacity: 0, filter: 'blur(12px)', scale: 0.95 }}
                                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                                exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.05 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute flex flex-col items-center w-full max-w-5xl px-4"
                            >
                                <h1 
                                    className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-8xl drop-shadow-2xl"
                                    style={{
                                        background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        textShadow: '0px 4px 20px rgba(191, 149, 63, 0.2)'
                                    }}
                                >
                                    Crafting Unforgettable <br className="hidden md:block" /> Experiences
                                </h1>
                            </motion.div>
                        )}

                        {/* PHASE 3: 60% - 85% */}
                        {progress >= 0.6 && progress < 0.85 && (
                            <motion.div
                                key="phase3"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute flex flex-col items-center gap-6"
                            >
                                <p className="text-2xl font-serif tracking-[0.15em] text-[#D4AF37] md:text-4xl shadow-black drop-shadow-lg">
                                    Luxury Event Design
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-3 text-xs tracking-[0.25em] text-white/80 md:text-sm">
                                    <span>WEDDINGS</span>
                                    <span className="text-[#D4AF37] opacity-70">|</span> 
                                    <span>CORPORATE</span>
                                    <span className="text-[#D4AF37] opacity-70">|</span> 
                                    <span>PRIVATE CELEBRATIONS</span>
                                </div>
                            </motion.div>
                        )}

                        {/* PHASE 4: 85% - 100% */}
                        {progress >= 0.85 && (
                            <motion.div
                                key="phase4"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="absolute flex flex-col items-center"
                            >
                                <motion.button
                                    whileHover={{ 
                                        scale: 1.05, 
                                        boxShadow: "0px 0px 30px rgba(212, 175, 55, 0.6), inset 0px 0px 10px rgba(212, 175, 55, 0.4)" 
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded border border-[#D4AF37] bg-black/60 px-10 py-5 font-serif text-lg uppercase tracking-[0.2em] text-[#D4AF37] backdrop-blur-md transition-all duration-300 hover:bg-[#D4AF37] hover:text-black shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                                >
                                    Book Your Event
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
