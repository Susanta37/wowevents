import { Link } from '@inertiajs/react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';

import type { WorkPiece } from './types';

type Props = {
    previewWork: WorkPiece[];
};

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;
const easeSmooth = [0.42, 0, 0.58, 1] as const;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: 'blur(8px)',
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
    hover: {
        y: -4,
        transition: {
            duration: 0.5,
            ease: easeLuxury,
        },
    },
};

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: easeSmooth },
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
};

function categoryBadgeColor(category: string): string {
    const map: Record<string, string> = {
        Wedding: 'bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20',
        Corporate: 'bg-stone-800/50 text-stone-300 border-stone-700/30',
        'Luxury Events': 'bg-[#3b2f2f]/50 text-[#d4af37]/80 border-[#3b2f2f]/50',
    };

    return map[category] || map['Luxury Events'];
}

export function WorkPreviewSection({ previewWork }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [selectedWork, setSelectedWork] = useState<WorkPiece | null>(null);

    // Split into featured and grid
    const featured = previewWork[0];
    const grid = previewWork.slice(1, 7);

    return (
        <>
            <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
                {/* Ambient background glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl"
                />

                {/* Header Section */}
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 0, y: 40 }
                    }
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                      duration: 0.8,
                                      ease: easeLuxury,
                                  },
                              }
                    }
                    viewport={{ once: true, margin: '-80px' }}
                    className="relative mb-16 flex flex-col gap-8 lg:mb-20"
                >
                    {/* Section label */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, x: -20 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                          duration: 0.6,
                                          delay: 0.2,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                            Portfolio
                        </span>
                    </motion.div>

                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <h2 className="font-display text-4xl tracking-tight text-stone-100 md:text-5xl lg:text-6xl">
                            Curated
                            <br />
                            <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                                moments
                            </span>
                        </h2>
                        <Link
                            href="/our-work"
                            prefetch
                            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.38em] text-[#d4af37]/80 transition-all duration-500 hover:text-[#e8dfc4]"
                        >
                            <span>Full gallery</span>
                            <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                        </Link>
                    </div>
                </motion.div>

                {/* Featured Large Card */}
                {featured && (
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 60 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.9,
                                          delay: 0.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="group relative mb-8 overflow-hidden rounded-2xl border border-white/[0.06] lg:rounded-3xl"
                        onMouseEnter={() => setHoveredIndex(-1)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onClick={() => setSelectedWork(featured)}
                    >
                        {/* Image Container */}
                        <div className="relative aspect-[16/8] overflow-hidden lg:aspect-[16/7]">
                            <motion.img
                                src={featured.src}
                                alt={featured.alt}
                                loading="lazy"
                                decoding="async"
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.04 }
                                }
                                transition={{
                                    duration: 0.9,
                                    ease: easeSmooth,
                                }}
                                className="h-full w-full object-cover brightness-[0.65] transition-all duration-700 group-hover:brightness-75"
                            />

                            {/* Overlay gradients */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/20 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-80" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/30 to-transparent" />

                            {/* Play button on hover */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:bg-[#d4af37]/10">
                                    <Play className="ml-1 h-6 w-6 text-white/80" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Content Overlay */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-8 lg:p-10">
                            <span
                                className={`inline-block rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] ${categoryBadgeColor(featured.category)}`}
                            >
                                {featured.category}
                            </span>
                            <h3 className="mt-4 font-display text-2xl text-stone-100 transition-colors duration-500 group-hover:text-white lg:text-3xl">
                                {featured.title}
                            </h3>
                            {featured.subtitle && (
                                <p className="mt-2 max-w-lg text-sm text-stone-400 transition-colors duration-500 group-hover:text-stone-300">
                                    {featured.subtitle}
                                </p>
                            )}
                        </div>

                        {/* Gold border glow on hover */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-2xl border border-[#d4af37]/0 transition-all duration-700 group-hover:border-[#d4af37]/20 lg:rounded-3xl"
                        />
                    </motion.div>
                )}

                {/* Grid Cards */}
                <motion.div
                    variants={containerVariants}
                    initial={
                        prefersReducedMotion ? undefined : 'hidden'
                    }
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {grid.map((piece, idx) => (
                        <motion.div
                            key={piece.title}
                            variants={cardVariants}
                            whileHover="hover"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setSelectedWork(piece)}
                            className="group relative cursor-pointer"
                        >
                            {/* Card ambient glow */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-3 rounded-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                            />

                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-700 group-hover:border-[#d4af37]/15 group-hover:shadow-[0_30px_80px_-40px_rgb(212_175_55_/_0.2)]">
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <motion.img
                                        src={piece.src}
                                        alt={piece.alt}
                                        loading="lazy"
                                        decoding="async"
                                        whileHover={
                                            prefersReducedMotion
                                                ? undefined
                                                : { scale: 1.06 }
                                        }
                                        transition={{
                                            duration: 0.7,
                                            ease: easeSmooth,
                                        }}
                                        className="h-full w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:brightness-75"
                                    />

                                    {/* Hover gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />

                                    {/* Quick view icon */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="absolute right-4 top-4 z-10"
                                    >
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0a0a0a]/80 backdrop-blur-sm transition-all duration-500 group-hover:bg-[#d4af37]/20">
                                            <ArrowUpRight className="h-3.5 w-3.5 text-[#d4af37]" />
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4af37]/80 transition-colors duration-500 group-hover:text-[#d4af37]">
                                        {piece.category}
                                    </p>
                                    <h3 className="mt-2 font-display text-lg text-stone-100 transition-colors duration-500 group-hover:text-white lg:text-xl">
                                        {piece.title}
                                    </h3>
                                </div>

                                {/* Bottom gold accent line */}
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#d4af37]/50 to-transparent transition-all duration-700 group-hover:w-full"
                                />
                            </div>

                            {/* Hover indicator - shows which card is active */}
                            {hoveredIndex === idx && (
                                <motion.div
                                    layoutId="activeCard"
                                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#d4af37]/20"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
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
                                      duration: 0.8,
                                      delay: 0.8,
                                      ease: easeLuxury,
                                  },
                              }
                    }
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center lg:mt-20"
                >
                    <Link
                        href="/our-work"
                        prefetch
                        className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-8 py-4 text-sm uppercase tracking-[0.3em] text-[#d4af37] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:shadow-[0_0_40px_-15px_rgb(212_175_55_/_0.3)]"
                    >
                        <span>View full portfolio</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                </motion.div>
            </SectionWrapper>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/95 p-4 backdrop-blur-xl"
                        onClick={() => setSelectedWork(null)}
                    >
                        <button
                            onClick={() => setSelectedWork(null)}
                            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.5, ease: easeSmooth }}
                            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedWork.src}
                                alt={selectedWork.alt}
                                className="max-h-[80vh] w-full object-contain"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0a] to-transparent p-8">
                                <p className="text-xs uppercase tracking-[0.3em] text-[#d4af37]">
                                    {selectedWork.category}
                                </p>
                                <h3 className="mt-2 font-display text-2xl text-white">
                                    {selectedWork.title}
                                </h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}