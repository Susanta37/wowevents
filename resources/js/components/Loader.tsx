import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface LoaderProps {
    isLoaded: boolean;
    progress: number;
}

export function Loader({ isLoaded, progress }: LoaderProps) {
    useEffect(() => {
        // Prevent scrolling while loader is active
        if (!isLoaded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isLoaded]);

    return (
        <AnimatePresence>
            {!isLoaded && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A0A0A]"
                >
                    {/* Ambient Gold Glow */}
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12)_0%,transparent_60%)] blur-3xl" />
                    
                    {/* Rotating light sweep simulation */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(212,175,55,0.05)_90deg,transparent_180deg,rgba(212,175,55,0.05)_270deg,transparent_360deg)] opacity-50 blur-xl"
                    />

                    {/* Subtle particle effect */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-30" />

                    {/* Center content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="relative z-10 flex flex-col items-center gap-12"
                    >
                        <motion.img 
                            src="/logo/logo.png" 
                            alt="WOW Events" 
                            className="h-24 w-auto object-contain md:h-32"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <div className="flex flex-col items-center gap-6">
                            <motion.span 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="font-serif text-[10px] uppercase tracking-[0.4em] text-[#D4AF37]/70 md:text-xs"
                            >
                                Preparing Experience
                            </motion.span>
                            
                            {/* Thin gold progress bar */}
                            <div className="h-[2px] w-48 overflow-hidden rounded-full bg-white/5 md:w-64">
                                <motion.div 
                                    className="h-full bg-[#D4AF37]"
                                    initial={{ width: '0%' }}
                                    animate={{ width: `${Math.max(5, Math.round(progress * 100))}%` }}
                                    transition={{ duration: 0.2, ease: 'linear' }}
                                />
                            </div>

                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                                className="mt-4 font-serif text-[9px] uppercase tracking-[0.2em] text-white/40"
                            >
                                Crafting Unforgettable Experiences
                            </motion.span>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
