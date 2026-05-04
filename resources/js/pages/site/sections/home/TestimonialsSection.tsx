import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Pause, Play } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

import type { Testimonial } from './types';

type Props = {
    testimonials: Testimonial[];
};

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;
const easeSmooth = [0.42, 0, 0.58, 1] as const;

const quoteVariants = {
    enter: (direction: number) => ({
        opacity: 0,
        y: direction > 0 ? 60 : -60,
        filter: 'blur(6px)',
        scale: 0.97,
    }),
    center: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        transition: {
            duration: 0.8,
            ease: easeLuxury,
        },
    },
    exit: (direction: number) => ({
        opacity: 0,
        y: direction > 0 ? -60 : 60,
        filter: 'blur(6px)',
        scale: 0.97,
        transition: {
            duration: 0.5,
            ease: easeSmooth,
        },
    }),
};

const avatarVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: easeLuxury },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3 },
    },
};

export function TestimonialsSection({ testimonials }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);

    const totalTestimonials = testimonials.length;
    const autoplayInterval = 6400;

    // Autoplay logic
    useEffect(() => {
        if (prefersReducedMotion || totalTestimonials === 0 || isPaused) {
            return;
        }

        const id = window.setInterval(() => {
            setProgress(0);
            setDirection(1);
            setTestimonialIndex((i) => (i + 1) % totalTestimonials);
        }, autoplayInterval);

        return () => window.clearInterval(id);
    }, [prefersReducedMotion, totalTestimonials, isPaused]);

    // Progress bar animation
    useEffect(() => {
        if (prefersReducedMotion || isPaused) {
            return;
        }

        const intervalTime = 50; // Update every 50ms for smooth animation
        const step = (intervalTime / autoplayInterval) * 100;

        const id = window.setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }

                return prev + step;
            });
        }, intervalTime);

        return () => window.clearInterval(id);
    }, [prefersReducedMotion, isPaused, testimonialIndex]);

    const handleNext = useCallback(() => {
        setDirection(1);
        setProgress(0);
        setTestimonialIndex((i) => (i + 1) % totalTestimonials);
    }, [totalTestimonials]);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setProgress(0);
        setTestimonialIndex((i) => (i - 1 + totalTestimonials) % totalTestimonials);
    }, [totalTestimonials]);

    const handleDotClick = (index: number) => {
        setDirection(index > testimonialIndex ? 1 : -1);
        setProgress(0);
        setTestimonialIndex(index);
    };

    const currentTestimonial = testimonials[testimonialIndex];

    if (totalTestimonials === 0) {
        return null;
    }

    return (
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-[#080808]">
            {/* Ambient lighting */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,47,47,0.2)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />

            {/* Subtle grid */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.012]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
                {/* Section label */}
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                      duration: 0.7,
                                      ease: easeLuxury,
                                  },
                              }
                    }
                    viewport={{ once: true }}
                    className="mb-16 flex items-center justify-center gap-3"
                >
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]/40" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.45em] text-[#d4af37]/70">
                        Testimonials
                    </span>
                    <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]/40" />
                </motion.div>

                {/* Main Quote Area */}
                <div className="relative">
                    {/* Large decorative quote mark */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -left-4 -top-8 select-none lg:-left-12 lg:-top-12"
                    >
                        <Quote className="h-20 w-20 rotate-180 text-[#d4af37]/5 lg:h-28 lg:w-28" />
                    </div>

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={currentTestimonial?.id}
                            custom={direction}
                            variants={quoteVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="relative"
                        >
                            {/* Quote text */}
                            <blockquote className="text-center font-display text-2xl leading-relaxed text-stone-200 md:text-3xl lg:text-4xl">
                                <span className="text-[#d4af37]/60">"</span>
                                {currentTestimonial?.quote}
                                <span className="text-[#d4af37]/60">"</span>
                            </blockquote>

                            {/* Optional event/location context */}
                            {currentTestimonial?.event && (
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3,
                                    }}
                                    className="mt-6 text-center text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/50"
                                >
                                    {currentTestimonial.event}
                                </motion.p>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {/* Author Info */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`author-${currentTestimonial?.id}`}
                            variants={avatarVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mt-14 flex flex-col items-center gap-4"
                        >
                            {/* Avatar with gold ring */}
                            {currentTestimonial?.avatar ? (
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#d4af37]/40 to-[#d4af37]/10 blur-sm" />
                                    <img
                                        src={currentTestimonial.avatar}
                                        alt={currentTestimonial.name}
                                        className="relative h-16 w-16 rounded-full border-2 border-[#d4af37]/30 object-cover ring-1 ring-[#d4af37]/10"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                    <span className="font-display text-xl text-[#d4af37]/60">
                                        {currentTestimonial?.name?.charAt(0)}
                                    </span>
                                </div>
                            )}

                            <div className="text-center">
                                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#d4af37]/90">
                                    {currentTestimonial?.name}
                                </p>
                                <p className="mt-1 text-xs text-stone-500">
                                    {currentTestimonial?.role}
                                </p>
                                {currentTestimonial?.company && (
                                    <p className="mt-0.5 text-[11px] text-stone-600">
                                        {currentTestimonial.company}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls Section */}
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 0, y: 20 }
                    }
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                      duration: 0.7,
                                      delay: 0.4,
                                      ease: easeLuxury,
                                  },
                              }
                    }
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    {/* Progress Bar */}
                    <div className="mx-auto mb-8 h-[1px] w-full max-w-xs overflow-hidden rounded-full bg-white/[0.04]">
                        <motion.div
                            className="h-full bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37]/60 to-[#d4af37]/40"
                            animate={{
                                width: `${progress}%`,
                            }}
                            transition={{
                                duration: 0.05,
                                ease: 'linear',
                            }}
                        />
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-stone-500 transition-all duration-500 hover:border-[#d4af37]/30 hover:text-[#d4af37] hover:shadow-[0_0_20px_-5px_rgb(212_175_55_/_0.2)]"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleDotClick(idx)}
                                    className={`relative h-2 rounded-full transition-all duration-500 ${
                                        idx === testimonialIndex
                                            ? 'w-8 bg-[#d4af37]/60 shadow-[0_0_12px_-3px_rgb(212_175_55_/_0.4)]'
                                            : 'w-2 bg-white/[0.08] hover:bg-white/[0.15]'
                                    }`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.06] text-stone-500 transition-all duration-500 hover:border-[#d4af37]/30 hover:text-[#d4af37] hover:shadow-[0_0_20px_-5px_rgb(212_175_55_/_0.2)]"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* Pause/Play Button */}
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.04] text-stone-600 transition-all duration-500 hover:border-[#d4af37]/20 hover:text-[#d4af37]/70"
                            aria-label={
                                isPaused
                                    ? 'Resume autoplay'
                                    : 'Pause autoplay'
                            }
                        >
                            {isPaused ? (
                                <Play className="h-3 w-3" />
                            ) : (
                                <Pause className="h-3 w-3" />
                            )}
                        </button>
                    </div>

                    {/* Counter */}
                    <p className="mt-6 text-center font-sans text-[10px] tracking-[0.3em] text-stone-700">
                        <span className="text-[#d4af37]/60">
                            {String(testimonialIndex + 1).padStart(2, '0')}
                        </span>
                        <span className="mx-2 text-stone-800">/</span>
                        <span>{String(totalTestimonials).padStart(2, '0')}</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}