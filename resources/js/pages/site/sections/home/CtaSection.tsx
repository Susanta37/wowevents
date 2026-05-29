import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowUpRight,
    Calendar,
    MessageCircle,
    Phone,
    Sparkles,
    ChevronRight,
} from 'lucide-react';
import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';

const floatingElements = [
    { icon: Sparkles, delay: 0, duration: 6, x: '15%', y: '20%', size: 'sm' },
    { icon: Calendar, delay: 1.5, duration: 7, x: '82%', y: '25%', size: 'xs' },
    { icon: MessageCircle, delay: 3, duration: 5.5, x: '75%', y: '65%', size: 'sm' },
    { icon: Sparkles, delay: 4.5, duration: 8, x: '22%', y: '70%', size: 'xs' },
];

const ctaOptions = [
    {
        icon: Calendar,
        title: 'Schedule a call',
        description: '30-minute curator consultation',
        href: '/book-now',
        isPrimary: true,
    },
    {
        icon: MessageCircle,
        title: 'Quick enquiry',
        description: 'Response within 4 hours',
        href: '/contact',
        isPrimary: false,
    },
    {
        icon: Phone,
        title: 'Direct line',
        description: '+91 92396 05654',
        href: 'tel:+919239605654',
        isPrimary: false,
    },
];

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;
const easePremium = [0.42, 0, 0.58, 1] as const;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(6px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: easeLuxury,
        },
    },
};

export function CtaSection() {
    const prefersReducedMotion = useReducedMotion();
    const [hoveredOption, setHoveredOption] = useState<string | null>(null);

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-36">
            {/* Outer ambient glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.2)_0%,transparent_60%)] blur-3xl"
            />

            {/* Main Card */}
            <motion.div
                initial={
                    prefersReducedMotion
                        ? undefined
                        : { opacity: 0, y: 60, scale: 0.97 }
                }
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                              opacity: 1,
                              y: 0,
                              scale: 1,
                              transition: {
                                  duration: 1,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true, margin: '-10%' }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-[#d4af37]/20 bg-gradient-to-br from-[#120f0f] via-[#0a0a0a] to-[#15110d] px-8 py-20 shadow-[0_0_140px_-45px_rgb(212_175_55_/_0.5),0_0_60px_-20px_rgb(0_0_0_/_0.5)] transition-all duration-1000 hover:border-[#d4af37]/30 hover:shadow-[0_0_180px_-45px_rgb(212_175_55_/_0.6),0_0_80px_-20px_rgb(0_0_0_/_0.4)] md:px-16 lg:px-20"
            >
                {/* Animated background layers */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.1)_0%,transparent_50%)] transition-opacity duration-1000 group-hover:opacity-80"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,47,47,0.3)_0%,transparent_50%)] opacity-50 transition-opacity duration-1000 group-hover:opacity-70"
                />

                {/* Gold shimmer line */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 top-0 h-[1px] w-full"
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{
                        opacity: [0, 0.6, 0],
                        scaleX: [0, 1, 1],
                    }}
                    transition={{
                        duration: 3,
                        delay: 1.5,
                        ease: easePremium,
                        times: [0, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    style={{
                        background:
                            'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.5) 50%, transparent 100%)',
                    }}
                />

                {/* Floating decorative icons */}
                {!prefersReducedMotion &&
                    floatingElements.map((el, idx) => {
                        const IconComponent = el.icon;
                        const sizeClass =
                            el.size === 'sm'
                                ? 'h-5 w-5'
                                : 'h-3.5 w-3.5';

                        return (
                            <motion.div
                                key={idx}
                                aria-hidden="true"
                                className="pointer-events-none absolute text-[#d4af37]/10"
                                style={{ left: el.x, top: el.y }}
                                animate={{
                                    y: [0, -12, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                    rotate: [0, 15, 0],
                                }}
                                transition={{
                                    duration: el.duration,
                                    delay: el.delay,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <IconComponent className={sizeClass} />
                            </motion.div>
                        );
                    })}

                {/* Corner accents */}
                <div
                    aria-hidden="true"
                    className="absolute left-6 top-6 h-10 w-10 border-l border-t border-[#d4af37]/15 transition-colors duration-700 group-hover:border-[#d4af37]/25 lg:left-8 lg:top-8"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#d4af37]/15 transition-colors duration-700 group-hover:border-[#d4af37]/25 lg:bottom-8 lg:right-8"
                />

                {/* Content */}
                <div className="relative z-10">
                    {/* Eyebrow */}
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
                                          duration: 0.6,
                                          delay: 0.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mx-auto flex items-center justify-center gap-3"
                    >
                        <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#d4af37]/40" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.45em] text-[#d4af37]/70">
                            Begin your journey
                        </span>
                        <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#d4af37]/40" />
                    </motion.div>

                    {/* Main heading */}
                    <motion.h2
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 30 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.7,
                                          delay: 0.5,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="relative mx-auto mt-6 text-center font-display text-3xl tracking-tight text-stone-100 md:text-4xl lg:text-5xl"
                    >
                        Let's design
                        <br />
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                            your event
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
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
                                          delay: 0.7,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-stone-400 md:text-lg"
                    >
                        Share the brief in confidence. We respond with a tailored
                        concept outline and a curator call—never a generic deck.
                    </motion.p>

                    {/* CTA Options */}
                    <motion.div
                        variants={containerVariants}
                        initial={
                            prefersReducedMotion ? undefined : 'hidden'
                        }
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-5"
                    >
                        {ctaOptions.map((option) => {
                            const IconComponent = option.icon;
                            const isHovered = hoveredOption === option.title;

                            return (
                                <motion.div
                                    key={option.title}
                                    variants={itemVariants}
                                    onMouseEnter={() =>
                                        setHoveredOption(option.title)
                                    }
                                    onMouseLeave={() =>
                                        setHoveredOption(null)
                                    }
                                >
                                    {option.isPrimary ? (
                                        // Primary CTA - Gold button
                                        <Link
                                            href={option.href}
                                            prefetch
                                            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-[#d4af37]/60 bg-gradient-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] shadow-[0_0_80px_-8px_rgb(212_175_55_/_0.6)] transition-all duration-500 hover:brightness-110 hover:shadow-[0_0_100px_-4px_rgb(212_175_55_/_0.7)]"
                                        >
                                            {/* Button shimmer */}
                                            <motion.div
                                                aria-hidden="true"
                                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                                animate={{
                                                    translateX: [
                                                        '100%',
                                                        '-200%',
                                                    ],
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    delay: 1,
                                                    repeat: Infinity,
                                                    ease: 'easeInOut',
                                                }}
                                            />

                                            <span className="relative z-10">
                                                {option.title}
                                            </span>
                                            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    ) : (
                                        // Secondary CTAs - Outlined
                                        <Link
                                            href={option.href}
                                            className={`group flex items-center gap-3 rounded-2xl border px-8 py-3.5 text-sm font-medium transition-all duration-500 ${
                                                isHovered
                                                    ? 'border-[#d4af37]/40 bg-[#d4af37]/5 shadow-[0_0_30px_-10px_rgb(212_175_55_/_0.2)]'
                                                    : 'border-white/[0.08] bg-white/[0.02]'
                                            }`}
                                        >
                                            <IconComponent
                                                className={`h-4 w-4 transition-colors duration-500 ${
                                                    isHovered
                                                        ? 'text-[#d4af37]'
                                                        : 'text-stone-500'
                                                }`}
                                            />
                                            <div className="text-left">
                                                <span
                                                    className={`block text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${
                                                        isHovered
                                                            ? 'text-[#d4af37]'
                                                            : 'text-stone-400'
                                                    }`}
                                                >
                                                    {option.title}
                                                </span>
                                                <span className="block text-[10px] text-stone-600">
                                                    {option.description}
                                                </span>
                                            </div>
                                            <ChevronRight
                                                className={`h-3.5 w-3.5 transition-all duration-500 ${
                                                    isHovered
                                                        ? 'translate-x-1 text-[#d4af37]'
                                                        : 'text-stone-600'
                                                }`}
                                            />
                                        </Link>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Trust indicators */}
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
                                          delay: 1.2,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-[0.25em] text-stone-600"
                    >
                        <span>Confidential consultation</span>
                        <span className="text-stone-800">·</span>
                        <span>Tailored proposal within 48h</span>
                        <span className="text-stone-800">·</span>
                        <span>No commitment required</span>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
                aria-hidden="true"
                initial={
                    prefersReducedMotion
                        ? { scaleX: 1 }
                        : { scaleX: 0 }
                }
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                              scaleX: 1,
                              transition: {
                                  duration: 1.2,
                                  delay: 1,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                style={{ originX: 0.5 }}
                className="mx-auto mt-16 h-px w-full max-w-sm bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
            />
        </SectionWrapper>
    );
}