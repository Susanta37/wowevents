import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Eye, Maximize2, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

import type { PortfolioFilter, PortfolioItem } from './types';
import { filterHref } from './utils';

type Props = {
    items: PortfolioItem[];
    openLightbox: (item: PortfolioItem) => void;
    filters: PortfolioFilter[];
    active: string;
};

const easeLuxury = [0.25, 0.46, 0.45, 0.94];

const imageVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: 'blur(12px)',
        scale: 0.95,
    },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        transition: {
            delay: (idx % 6) * 0.08,
            duration: 0.8,
            ease: easeLuxury,
        },
    }),
};

export function GallerySection({ items, openLightbox, filters, active }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const galleryItems = items;

    return (
        <SectionWrapper id="gallery-section" className="relative mx-auto max-w-[1400px] overflow-visible px-6 pt-14 pb-28 lg:px-10 lg:pb-40">
            {/* Ambient gold glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.08)_0%,transparent_60%)] blur-3xl"
            />

            {/* Section sub-header */}
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
                className="mb-12 flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
                    <span className="text-[9px] uppercase tracking-[0.4em] text-stone-500">
                        {galleryItems.length} compositions
                    </span>
                </div>
                <span className="hidden text-[9px] uppercase tracking-[0.35em] text-stone-600 sm:block">
                    Click to enlarge
                </span>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: easeLuxury },
                            }
                }
                viewport={{ once: true }}
                className="mb-10 flex flex-wrap gap-2 sm:gap-3"
            >
                {filters.map((filter) => {
                    const isActive = active === filter.label;

                    return (
                        <Link
                            key={filter.label}
                            href={filterHref(filter)}
                            prefetch
                            preserveScroll
                        >
                            <motion.span
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className={`group relative inline-flex overflow-hidden rounded-full border px-5 py-2.5 text-[9px] uppercase tracking-[0.22em] transition-all duration-500 sm:px-6 md:text-[10px] md:tracking-[0.25em] ${
                                    isActive
                                        ? 'border-[#d4af37]/50 bg-[#d4af37]/10 text-[#e8dfc4] shadow-[0_0_40px_-12px_rgb(212_175_55_/_0.5)]'
                                        : 'border-white/[0.06] bg-white/[0.02] text-stone-500 hover:border-[#d4af37]/25 hover:text-stone-200'
                                }`}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="activeFilterDotGallery"
                                        className="absolute left-3 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#d4af37]"
                                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                                    />
                                )}
                                <span
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-[#d4af37]/0 via-[#d4af37]/5 to-[#d4af37]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                                        isActive ? 'opacity-50' : ''
                                    }`}
                                />
                                <span className={`relative transition-all duration-500 ${isActive ? 'pl-3' : ''}`}>
                                    {filter.label}
                                </span>
                            </motion.span>
                        </Link>
                    );
                })}
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 gap-5 sm:columns-2 sm:gap-6 xl:columns-3">
                {galleryItems.map((item, idx) => {
                    const isHovered = hoveredIndex === idx;

                    return (
                        <motion.div
                            key={`${item.categorySlug}-${item.slug}`}
                            className="mb-5 break-inside-avoid sm:mb-6"
                            variants={imageVariants}
                            custom={idx}
                            initial={
                                prefersReducedMotion ? undefined : 'hidden'
                            }
                            whileInView="visible"
                            viewport={{
                                once: true,
                                margin: '-8%',
                                amount: 0.15,
                            }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <button
                                type="button"
                                onClick={() => openLightbox(item)}
                                className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.05] bg-[#0a0a0a] text-left transition-all duration-700 hover:border-[#d4af37]/20"
                            >
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -inset-2 z-0 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12)_0%,transparent_70%)] blur-xl transition-all duration-1000 ${
                                        isHovered
                                            ? 'scale-105 opacity-100'
                                            : 'scale-100 opacity-0'
                                    }`}
                                />

                                <div className="relative flex w-full items-center justify-center bg-[#080808] p-2 sm:p-3">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="relative z-10 h-auto w-full max-w-full object-contain brightness-[0.88] transition-all duration-700 group-hover:brightness-95"
                                    />

                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute right-3 top-3 z-20 sm:right-4 sm:top-4"
                                            >
                                                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a]/70 backdrop-blur-md sm:h-10 sm:w-10">
                                                    <Maximize2 className="h-3.5 w-3.5 text-[#d4af37] sm:h-4 sm:w-4" />
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="absolute left-3 top-3 z-20 sm:left-4 sm:top-4">
                                        <span className="inline-block rounded-full border border-white/[0.08] bg-[#0a0a0a]/75 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#d4af37]/80 backdrop-blur-sm sm:px-3 sm:text-[10px]">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="relative border-t border-white/[0.04] bg-[#0a0a0a]/90 px-4 py-4 sm:px-5 sm:py-5">
                                    <h3 className="font-display text-base text-stone-100 transition-colors duration-500 group-hover:text-white sm:text-lg">
                                        {item.title}
                                    </h3>
                                    {item.subtitle && (
                                        <p className="mt-1.5 text-[13px] leading-relaxed text-stone-500 sm:text-sm">
                                            {item.subtitle}
                                        </p>
                                    )}
                                </div>

                                <div
                                    aria-hidden="true"
                                    className={`absolute bottom-0 left-0 z-10 h-[2px] bg-gradient-to-r from-[#d4af37]/50 to-transparent transition-all duration-700 ${
                                        isHovered ? 'w-full' : 'w-0'
                                    }`}
                                />
                            </button>
                        </motion.div>
                    );
                })}
            </div>

            {/* Empty state */}
            {galleryItems.length === 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-32 text-center"
                >
                    <Eye className="mb-6 h-12 w-12 text-stone-700" />
                    <p className="font-display text-xl text-stone-500">
                        No compositions yet
                    </p>
                    <p className="mt-2 text-sm text-stone-600">
                        Check back soon for curated work.
                    </p>
                </motion.div>
            )}

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
                                  delay: 0.5,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                className="mt-16 flex flex-col items-center gap-6 sm:flex-row sm:justify-center"
            >
                <Link
                    href="/book-now"
                    prefetch
                    className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#d4af37] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/45 hover:bg-[#d4af37]/10 hover:shadow-[0_0_50px_-15px_rgb(212_175_55_/_0.35)]"
                >
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Commission your atmosphere</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: {
                        duration: 1.2,
                        delay: 0.7,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-16 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
            />
        </SectionWrapper>
    );
}