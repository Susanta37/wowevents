import { useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { useScrollFrames } from '@/hooks/useScrollFrames';
import { Loader } from '@/components/Loader';
import { ArrowDown, Sparkles, Crown, Star } from 'lucide-react';

export function HeroSection() {
    const totalFrames = 240;
    const heroRef = useRef<HTMLDivElement>(null);

    const framePath = useCallback((index: number) => {
        const paddedIndex = String(index).padStart(3, '0');
        return `/Event/ezgif-frame-${paddedIndex}.png`;
    }, []);

    const { containerRef, canvasRef, progress, isLoaded, loadProgress } = useScrollFrames(
        totalFrames,
        framePath,
    );

    // Parallax scroll values for overlay elements
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end end'],
    });

    const textOpacity = useTransform(
        scrollYProgress,
        [0, 0.02, 0.95, 1],
        [1, 1, 1, 0.25],
    );
    const scrollIndicatorOpacity = useTransform(
        scrollYProgress,
        [0, 0.04, 0.12],
        [1, 0.6, 0],
    );

    // Professional easing curve
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    return (
        <>
            <Loader isLoaded={isLoaded} progress={loadProgress} />

            {/* Desktop: Cinematic Scroll Sequence */}
            <section
                id="cinematic-hero-section"
                ref={containerRef}
                className="relative hidden w-full bg-[#0A0A0A] md:block"
                style={{ height: '400vh' }}
            >
                <div
                    ref={heroRef}
                    className="sticky top-0 flex h-[100svh] w-full flex-col overflow-hidden bg-[#0A0A0A]"
                >
                    {/* Canvas Layer */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 z-10 h-full w-full object-cover"
                    />

                    {/* Cinematic Overlay - Refined depth layers */}
                    <div className="pointer-events-none absolute inset-0 z-20">
                        {/* Vignette */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(10,10,10,0.85)_100%)]" />
                        {/* Top gradient */}
                        <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#0A0A0A]/95 via-[#0A0A0A]/50 to-transparent" />
                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/50 to-transparent" />
                        {/* Side gradients */}
                        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#0A0A0A]/50 to-transparent" />
                        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#0A0A0A]/50 to-transparent" />
                    </div>

                    {/* Dynamic gold ambient glow */}
                    <motion.div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 z-20"
                        style={{
                            opacity: useTransform(
                                scrollYProgress,
                                [0, 0.25, 0.55, 0.82, 1],
                                [0, 0.35, 0.55, 0.35, 0],
                            ),
                        }}
                    >
                        <div className="absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_55%)] blur-3xl" />
                    </motion.div>

                    {/* Main Content Layer */}
                    <motion.div
                        className="absolute inset-0 z-30 flex flex-col items-center justify-center"
                        style={{ opacity: textOpacity }}
                    >
                        {/* Corner frame accents */}
                        <div
                            aria-hidden="true"
                            className="absolute left-8 top-8 h-14 w-14 border-l border-t border-[#D4AF37]/15 md:left-14 md:top-14 lg:left-20 lg:top-20"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute bottom-8 right-8 h-14 w-14 border-b border-r border-[#D4AF37]/15 md:bottom-14 md:right-14 lg:bottom-20 lg:right-20"
                        />

                        <div className="relative flex flex-col items-center px-6 text-center">
                            <AnimatePresence mode="wait">
                                {/* PHASE 1: 0% - 25% - Opening Statement */}
                                {progress >= 0 && progress < 0.25 && (
                                    <motion.div
                                        key="phase1"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            y: -25,
                                            filter: 'blur(6px)',
                                        }}
                                        transition={{ duration: 0.9, ease: easeLuxury }}
                                        className="flex flex-col items-center gap-6"
                                    >
                                        {/* Logo */}
                                        <motion.img
                                            src="/logo/logo.png"
                                            alt="WOW Events"
                                            initial={{
                                                opacity: 0,
                                                scale: 0.92,
                                                y: 15,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.15,
                                                ease: easeLuxury,
                                            }}
                                            className="mb-2 h-14 w-auto object-contain md:h-20 lg:h-24"
                                        />

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 64 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.3,
                                                ease: easeLuxury,
                                            }}
                                            className="h-px bg-gradient-to-r from-[#D4AF37]/35 to-[#D4AF37]/08"
                                        />

                                        <h2 className="font-serif text-xl font-light tracking-[0.3em] text-white/85 md:text-3xl lg:text-4xl">
                                            Welcome to{' '}
                                            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FCF6BA] to-[#B38728] bg-clip-text text-transparent">
                                                WOW Events
                                            </span>
                                        </h2>

                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.7,
                                            }}
                                            className="text-[10px] uppercase tracking-[0.35em] text-stone-500 md:text-[11px]"
                                        >
                                            Bespoke Event Architecture
                                        </motion.p>

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 64 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.5,
                                                ease: easeLuxury,
                                            }}
                                            className="h-px bg-gradient-to-l from-[#D4AF37]/35 to-[#D4AF37]/08"
                                        />
                                    </motion.div>
                                )}

                                {/* PHASE 2: 25% - 52% - Hero Statement */}
                                {progress >= 0.25 && progress < 0.52 && (
                                    <motion.div
                                        key="phase2"
                                        initial={{
                                            opacity: 0,
                                            filter: 'blur(20px)',
                                            scale: 0.95,
                                            y: 25,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            filter: 'blur(0px)',
                                            scale: 1,
                                            y: 0,
                                        }}
                                        exit={{
                                            opacity: 0,
                                            filter: 'blur(10px)',
                                            scale: 1.04,
                                            y: -20,
                                        }}
                                        transition={{
                                            duration: 1.3,
                                            ease: easeLuxury,
                                        }}
                                        className="flex w-full max-w-6xl flex-col items-center px-4"
                                    >
                                        {/* Decorative crown */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.25,
                                                ease: 'easeOut',
                                            }}
                                            className="mb-10 text-[#D4AF37]/25"
                                        >
                                            <Crown className="h-9 w-9 md:h-12 md:w-12 lg:h-14 lg:w-14" />
                                        </motion.div>

                                        <h1
                                            className="font-serif text-[2.75rem] font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-[5.5rem]"
                                            style={{
                                                background:
                                                    'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor:
                                                    'transparent',
                                                filter: 'drop-shadow(0px 4px 40px rgba(212,175,55,0.2))',
                                            }}
                                        >
                                            Crafting Unforgettable
                                            <br className="hidden md:block" />
                                            Experiences
                                        </h1>

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 180 }}
                                            transition={{
                                                duration: 0.9,
                                                delay: 0.55,
                                                ease: easeLuxury,
                                            }}
                                            className="mt-12 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/45 to-transparent md:w-72 lg:w-80"
                                        />
                                    </motion.div>
                                )}

                                {/* PHASE 3: 52% - 80% - Services Overview */}
                                {progress >= 0.52 && progress < 0.8 && (
                                    <motion.div
                                        key="phase3"
                                        initial={{
                                            opacity: 0,
                                            y: 40,
                                            filter: 'blur(10px)',
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: 'blur(0px)',
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -40,
                                            filter: 'blur(10px)',
                                        }}
                                        transition={{
                                            duration: 1,
                                            ease: easeLuxury,
                                        }}
                                        className="flex flex-col items-center gap-9"
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 56 }}
                                            transition={{
                                                duration: 0.6,
                                                ease: easeLuxury,
                                            }}
                                            className="h-px bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37]/15"
                                        />

                                        <p className="font-serif text-2xl tracking-[0.06em] text-stone-100 md:text-3xl lg:text-4xl">
                                            Luxury Event{' '}
                                            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B38728] bg-clip-text text-transparent">
                                                Design
                                            </span>
                                        </p>

                                        <motion.div
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.35,
                                                ease: easeLuxury,
                                            }}
                                            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] font-light uppercase tracking-[0.28em] text-white/65 md:text-xs"
                                        >
                                            <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                                Weddings
                                            </span>
                                            <span className="text-[#D4AF37]/30">
                                                ·
                                            </span>
                                            <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                                Corporate Galas
                                            </span>
                                            <span className="text-[#D4AF37]/30">
                                                ·
                                            </span>
                                            <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                                Private Celebrations
                                            </span>
                                            <span className="text-[#D4AF37]/30">
                                                ·
                                            </span>
                                            <span className="transition-colors duration-500 hover:text-[#D4AF37]">
                                                Destination Events
                                            </span>
                                        </motion.div>

                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: 56 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.5,
                                                ease: easeLuxury,
                                            }}
                                            className="h-px bg-gradient-to-l from-[#D4AF37]/50 to-[#D4AF37]/15"
                                        />
                                    </motion.div>
                                )}

                                {/* PHASE 4: 80% - 100% - CTA */}
                                {progress >= 0.8 && (
                                    <motion.div
                                        key="phase4"
                                        initial={{
                                            opacity: 0,
                                            y: 50,
                                            filter: 'blur(12px)',
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: 'blur(0px)',
                                        }}
                                        transition={{
                                            duration: 1.1,
                                            ease: easeLuxury,
                                        }}
                                        className="flex flex-col items-center gap-12"
                                    >
                                        {/* Promise statement */}
                                        <motion.p
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.2,
                                                ease: easeLuxury,
                                            }}
                                            className="max-w-md text-sm leading-relaxed text-stone-400 md:text-[15px]"
                                        >
                                            Where vision meets execution.
                                            <br />
                                            Every detail, orchestrated to
                                            perfection.
                                        </motion.p>

                                        {/* Logo above CTA */}
                                        <motion.img
                                            src="/logo/logo.png"
                                            alt="WOW Events"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.35,
                                                ease: easeLuxury,
                                            }}
                                            className="h-10 w-auto object-contain md:h-12"
                                        />

                                        {/* Primary CTA Button */}
                                        <Link href="/book-now" prefetch>
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="group relative"
                                            >
                                                {/* Button ambient glow */}
                                                <div
                                                    aria-hidden="true"
                                                    className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.35)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                                                />

                                                <button className="relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[#D4AF37]/55 bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] px-12 py-5 backdrop-blur-md transition-all duration-500 group-hover:border-[#D4AF37] md:px-14 md:py-6">
                                                    {/* Shimmer effect */}
                                                    <motion.div
                                                        aria-hidden="true"
                                                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                                                        animate={{
                                                            translateX: [
                                                                '100%',
                                                                '-200%',
                                                            ],
                                                        }}
                                                        transition={{
                                                            duration: 3.5,
                                                            repeat: Infinity,
                                                            ease: 'easeInOut',
                                                            delay: 0.8,
                                                        }}
                                                    />

                                                    <Sparkles className="relative h-4 w-4 text-[#D4AF37]/60 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:scale-110" />
                                                    <span className="relative font-serif text-sm tracking-[0.25em] text-[#D4AF37] transition-colors duration-500 group-hover:text-[#FCF6BA] md:text-base">
                                                        Begin Your Journey
                                                    </span>
                                                    <Sparkles className="relative h-4 w-4 text-[#D4AF37]/60 transition-all duration-500 group-hover:text-[#D4AF37] group-hover:scale-110" />
                                                </button>
                                            </motion.div>
                                        </Link>

                                        {/* Secondary link */}
                                        <Link
                                            href="/our-work"
                                            prefetch
                                            className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-stone-500 transition-colors duration-500 hover:text-[#D4AF37]/75 md:text-[11px]"
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
                        className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2"
                        style={{ opacity: scrollIndicatorOpacity }}
                    >
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="flex flex-col items-center gap-2.5"
                        >
                            <span className="font-sans text-[8px] uppercase tracking-[0.4em] text-[#D4AF37]/45 md:text-[9px]">
                                Scroll to explore
                            </span>
                            <div className="h-7 w-px bg-gradient-to-b from-[#D4AF37]/35 to-transparent" />
                            <ArrowDown className="h-3.5 w-3.5 text-[#D4AF37]/25" />
                        </motion.div>
                    </motion.div>

                    {/* Progress bar */}
                    <motion.div className="absolute bottom-0 left-0 right-0 z-30 h-px bg-white/[0.02]">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#D4AF37]/35 via-[#D4AF37]/55 to-[#D4AF37]/35"
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

            {/* Mobile Fallback */}
            <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0A0A0A] md:hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2880&auto=format&fit=crop"
                        alt="WOW Events Luxury Design"
                        className="h-full w-full object-cover brightness-[0.25]"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-[#0A0A0A]/80" />
                </div>

                {/* Mobile ambient glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-10"
                >
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-2xl" />
                </div>

                <div className="relative z-20 flex w-full max-w-sm flex-col items-center px-6 pt-16 text-center">
                    {/* Logo */}
                    <motion.img
                        src="/logo/logo.png"
                        alt="WOW Events"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: easeLuxury }}
                        className="mb-8 h-14 w-auto object-contain"
                    />

                    {/* Crown */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-6"
                    >
                        <Crown className="h-7 w-7 text-[#D4AF37]/45" />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="font-serif text-3xl font-bold leading-[1.15] tracking-tight"
                        style={{
                            background:
                                'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0px 2px 20px rgba(212,175,55,0.2))',
                        }}
                    >
                        Crafting Unforgettable
                        <br />
                        Experiences
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="mt-5 text-[11px] uppercase tracking-[0.25em] text-white/55"
                    >
                        Luxury Event Design
                    </motion.p>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[9px] uppercase tracking-[0.2em] text-white/45"
                    >
                        <span>Weddings</span>
                        <span className="text-[#D4AF37]/25">·</span>
                        <span>Corporate</span>
                        <span className="text-[#D4AF37]/25">·</span>
                        <span>Private</span>
                        <span className="text-[#D4AF37]/25">·</span>
                        <span>Destination</span>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 120 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                        className="mt-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"
                    />

                    {/* Logo above CTA */}
                    <motion.img
                        src="/logo/logo.png"
                        alt="WOW Events"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.75 }}
                        className="mt-8 h-8 w-auto object-contain opacity-80"
                    />

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.85 }}
                        className="mt-6 w-full"
                    >
                        <Link
                            href="/book-now"
                            className="block w-full rounded-xl border border-[#D4AF37]/55 bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] px-8 py-4 font-serif text-sm uppercase tracking-[0.22em] text-[#D4AF37] shadow-[0_0_30px_-10px_rgba(212,175,55,0.2)] transition-all duration-300 active:scale-[0.97]"
                        >
                            Begin Your Journey
                        </Link>
                    </motion.div>

                    {/* Portfolio link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.95 }}
                    >
                        <Link
                            href="/our-work"
                            className="mt-5 inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-stone-500 transition-colors active:text-[#D4AF37]/70"
                        >
                            View Portfolio <span>→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}