import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

import type { PortfolioItem } from './types';

type Props = {
    items: PortfolioItem[];
    openLightbox: (item: PortfolioItem) => void;
};

export function GallerySection({ items, openLightbox }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="mx-auto max-w-[1400px] px-6 pt-14 pb-28 lg:px-10 lg:pb-32">
            <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
                {items.map((item, idx) => (
                    <motion.div
                        key={item.src + item.title}
                        className="mb-6 break-inside-avoid"
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 48 }}
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          delay: (idx % 6) * 0.06,
                                          duration: 0.68,
                                          ease: [0.42, 0, 0.58, 1],
                                      },
                                  }
                        }
                        viewport={{ once: true, margin: '-8%', amount: 0.2 }}
                    >
                        <button
                            type="button"
                            onClick={() => openLightbox(item)}
                            className="group relative block w-full overflow-hidden rounded-2xl border border-white/[0.06] text-left"
                        >
                            <motion.img
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full brightness-[0.72]"
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              scale: 1.045,
                                              filter: 'brightness(0.92)',
                                              transition: {
                                                  duration: 0.72,
                                                  ease: [0.42, 0, 0.58, 1],
                                              },
                                          }
                                }
                                transition={{
                                    duration: 0.72,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0a0a]/88 via-transparent to-transparent opacity-80" />
                            <div className="absolute inset-x-0 bottom-0 p-6">
                                <p className="text-[10px] uppercase tracking-[0.26em] text-[#d4af37]/90">
                                    {item.category}
                                </p>
                                <p className="mt-2 font-display text-lg text-stone-100">
                                    {item.title}
                                </p>
                            </div>
                        </button>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
