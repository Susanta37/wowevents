import { useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { useScrollFrames } from '@/hooks/useScrollFrames';
import { ArrowDown, Sparkles, Crown } from 'lucide-react';

export function HeroSection() {
    const totalFrames = 240;
    const heroRef = useRef<HTMLDivElement>(null);

    const framePath = useCallback((index: number) => {
        const paddedIndex = String(index).padStart(3, '0');
        return `/Event/ezgif-frame-${paddedIndex}.png`;
    }, []);

    const { containerRef, canvasRef, progress } = useScrollFrames(
        totalFrames,
        framePath,
    );

    // Parallax scroll values for overlay elements
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end end'],
    });

    const textOpacity = useTransform(scrollYProgress, [0, 0.02, 0.95, 1], [1, 1, 1, 0.3]);
    const scrollIndicatorOpacity = useTransform(
        scrollYProgress,
        [0, 0.05, 0.15],
        [1, 0.5, 0],
    );

    // Easing for premium feel
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-[#0A0A0A]"
            style={{ height: '400vh' }}
        >
            <div
                ref={heroRef}
                className="sticky top-0 flex h-[100svh] w-full flex-col overflow-hidden bg-[#0A0A0A]"
            >
                {/* Loading State */}
                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#0A0A0A]">
                    <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
                        <span className="font-serif text-sm tracking-[0.3em] text-[#D4AF37]/40">
                            Loading Cinematic Experience
                        </span>
                    </motion.div>
                </div>

                {/* Canvas Layer */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-10 h-full w-full object-cover"
                />

                {/* Cinematic Overlay - Multi-layered for depth */}
                <div className="pointer-events-none absolute inset-0 z-20">
                    {/* Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,10,10,0.8)_100%)]" />
                    {/* Top gradient for text */}
                    <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent" />
                    {/* Bottom gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/60 to-transparent" />
                    {/* Side gradients */}
                    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0A0A0A]/40 to-transparent" />
                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0A0A0A]/40 to-transparent" />
                </div>

                {/* Gold ambient glow behind text */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-20"
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.3, 0.6, 0.85, 1], [0, 0.4, 0.6, 0.4, 0]) }}
                >
                    <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_60%)] blur-3xl" />
                </motion.div>

                {/* Main Content Layer */}
                <motion.div
                    className="absolute inset-0 z-30 flex flex-col items-center justify-center"
                    style={{ opacity: textOpacity }}
                >
                    {/* Subtle corner frame */}
                    <div
                        aria-hidden="true"
                        className="absolute left-8 top-8 h-12 w-12 border-l border-t border-[#D4AF37]/20 md:left-12 md:top-12 lg:left-16 lg:top-16"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute bottom-8 right-8 h-12 w-12 border-b border-r border-[#D4AF37]/20 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16"
                    />

                    <div className="relative flex flex-col items-center px-6 text-center">
                        <AnimatePresence mode="wait">
                            {/* PHASE 1: 0% - 28% - Opening Statement */}
                            {progress >= 0 && progress < 0.28 && (
                                <motion.div
                                    key="phase1"
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                                    transition={{ duration: 1, ease: easeLuxury }}
                                    className="flex flex-col items-center gap-8"
                                >
                                    {/* Gold accent */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 80 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.3,
                                            ease: easeLuxury,
                                        }}
                                        className="h-px bg-gradient-to-r from-[#D4AF37]/40 to-[#D4AF37]/10"
                                    />

                                    <h2 className="font-serif text-xl font-light tracking-[0.35em] text-white/90 md:text-3xl lg:text-4xl">
                                        Welcome to{' '}
                                        <span className="bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                                            WOW Events
                                        </span>
                                    </h2>

                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 80 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.5,
                                            ease: easeLuxury,
                                        }}
                                        className="h-px bg-gradient-to-l from-[#D4AF37]/40 to-[#D4AF37]/10"
                                    />
                                </motion.div>
                            )}

                            {/* PHASE 2: 28% - 55% - Hero Statement */}
                            {progress >= 0.28 && progress < 0.55 && (
                                <motion.div
                                    key="phase2"
                                    initial={{
                                        opacity: 0,
                                        filter: 'blur(16px)',
                                        scale: 0.96,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        filter: 'blur(0px)',
                                        scale: 1,
                                        y: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        filter: 'blur(8px)',
                                        scale: 1.03,
                                        y: -20,
                                    }}
                                    transition={{ duration: 1.2, ease: easeLuxury }}
                                    className="flex w-full max-w-6xl flex-col items-center px-4"
                                >
                                    {/* Decorative icon */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2,
                                            ease: 'easeOut',
                                        }}
                                        className="mb-8 text-[#D4AF37]/30"
                                    >
                                        <Crown className="h-8 w-8 md:h-10 md:w-10" />
                                    </motion.div>

                                    <h1
                                        className="font-serif text-4xl font-bold leading-tight md:text-6xl lg:text-8xl"
                                        style={{
                                            background:
                                                'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            textShadow:
                                                '0px 4px 80px rgba(212, 175, 55, 0.3)',
                                            filter: 'drop-shadow(0px 4px 30px rgba(212, 175, 55, 0.15))',
                                        }}
                                    >
                                        Crafting Unforgettable
                                        <br className="hidden md:block" />
                                        Experiences
                                    </h1>

                                    {/* Decorative line under heading */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 200 }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.5,
                                            ease: easeLuxury,
                                        }}
                                        className="mt-10 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent md:w-80"
                                    />
                                </motion.div>
                            )}

                            {/* PHASE 3: 55% - 82% - Services Overview */}
                            {progress >= 0.55 && progress < 0.82 && (
                                <motion.div
                                    key="phase3"
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                        filter: 'blur(8px)',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -50,
                                        filter: 'blur(8px)',
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: easeLuxury,
                                        staggerChildren: 0.15,
                                    }}
                                    className="flex flex-col items-center gap-8"
                                >
                                    {/* Gold line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 60 }}
                                        transition={{
                                            duration: 0.7,
                                            ease: easeLuxury,
                                        }}
                                        className="h-px bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37]/20"
                                    />

                                    <p className="font-serif text-2xl tracking-[0.08em] text-stone-100 md:text-4xl lg:text-5xl">
                                        Luxury Event{' '}
                                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
                                            Design
                                        </span>
                                    </p>

                                    {/* Service categories */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            delay: 0.4,
                                            ease: easeLuxury,
                                        }}
                                        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-white/70 md:text-sm"
                                    >
                                        <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                            Weddings
                                        </span>
                                        <span className="text-[#D4AF37]/40">·</span>
                                        <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                            Corporate
                                        </span>
                                        <span className="text-[#D4AF37]/40">·</span>
                                        <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                            Private Celebrations
                                        </span>
                                        <span className="text-[#D4AF37]/40">·</span>
                                        <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                            Destination Events
                                        </span>
                                    </motion.div>

                                    {/* Gold line */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 60 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.6,
                                            ease: easeLuxury,
                                        }}
                                        className="h-px bg-gradient-to-l from-[#D4AF37]/60 to-[#D4AF37]/20"
                                    />
                                </motion.div>
                            )}

                            {/* PHASE 4: 82% - 100% - CTA */}
                            {progress >= 0.82 && (
                                <motion.div
                                    key="phase4"
                                    initial={{
                                        opacity: 0,
                                        y: 60,
                                        filter: 'blur(8px)',
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)',
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: easeLuxury,
                                        staggerChildren: 0.2,
                                    }}
                                    className="flex flex-col items-center gap-10"
                                >
                                    {/* Final statement */}
                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: easeLuxury,
                                        }}
                                        className="max-w-lg text-sm leading-relaxed text-stone-400 md:text-base"
                                    >
                                        Where vision meets execution.
                                        <br />
                                        Every detail, orchestrated to perfection.
                                    </motion.p>

                                    {/* Primary CTA Button */}
                                    <Link href="/book-now" prefetch>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="group relative"
                                        >
                                            {/* Button glow */}
                                            <div
                                                aria-hidden="true"
                                                className="pointer-events-none absolute -inset-2 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.4)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                                            />

                                            <button className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[#D4AF37]/60 bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] px-10 py-5 backdrop-blur-md transition-all duration-500 group-hover:border-[#D4AF37]">
                                                {/* Button shimmer */}
                                                <motion.div
                                                    aria-hidden="true"
                                                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
                                                    animate={{
                                                        translateX: [
                                                            '100%',
                                                            '-200%',
                                                        ],
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                        delay: 0.5,
                                                    }}
                                                />

                                                <Sparkles className="relative h-4 w-4 text-[#D4AF37]/70 transition-colors duration-500 group-hover:text-[#D4AF37]" />
                                                <span className="relative font-serif text-sm uppercase tracking-[0.3em] text-[#D4AF37] transition-colors duration-500 group-hover:text-[#FCF6BA] md:text-base">
                                                    Begin Your Journey
                                                </span>
                                                <Sparkles className="relative h-4 w-4 text-[#D4AF37]/70 transition-colors duration-500 group-hover:text-[#D4AF37]" />
                                            </button>
                                        </motion.div>
                                    </Link>

                                    {/* Secondary link */}
                                    <Link
                                        href="/our-work"
                                        prefetch
                                        className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-stone-500 transition-colors duration-500 hover:text-[#D4AF37]/80"
                                    >
                                        <span>View Portfolio</span>
                                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
                    style={{ opacity: scrollIndicatorOpacity }}
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-[#D4AF37]/50">
                            Scroll
                        </span>
                        <div className="h-8 w-[1px] bg-gradient-to-b from-[#D4AF37]/40 to-transparent" />
                        <ArrowDown className="h-4 w-4 text-[#D4AF37]/30" />
                    </motion.div>
                </motion.div>

                {/* Progress bar at bottom */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 z-30 h-[1px] bg-white/[0.03]"
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/60 to-[#D4AF37]/40"
                        style={{
                            width: useTransform(
                                scrollYProgress,
                                [0, 1],
                                ['0%', '100%'],
                            ),
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}