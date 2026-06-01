import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const gallery = [
    { src: '/assets/6.jpeg', title: 'Auberge Celebration', category: 'Luxury Events' },
    { src: '/assets/7.jpeg', title: 'Pearl Reception', category: 'Wedding' },
    { src: '/assets/8.jpeg', title: 'Gilded Hour', category: 'Corporate' },
    { src: '/assets/10.jpeg', title: 'Meridian Night', category: 'Luxury Events' },
    { src: '/assets/12.jpeg', title: 'Solstice Soirée', category: 'Wedding' },
    { src: '/assets/15.jpeg', title: 'Silk Canopy', category: 'Wedding' },
];

export function EventGallerySection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Recent productions
                    </span>
                    <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl">
                        Events brought to life
                    </h2>
                </div>
                <Link
                    href="/our-work"
                    prefetch
                    className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 transition-all hover:gap-3 hover:text-[#d4af37]"
                >
                    Full portfolio
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
            </div>

            <div className="columns-1 gap-4 sm:columns-2 sm:gap-5 lg:columns-3">
                {gallery.map((item, idx) => (
                    <motion.div
                        key={item.title}
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: { duration: 0.7, delay: (idx % 3) * 0.08, ease: easeLuxury },
                                  }
                        }
                        viewport={{ once: true, margin: '-8%' }}
                        className="mb-4 break-inside-avoid sm:mb-5"
                    >
                        <Link
                            href="/our-work"
                            prefetch
                            className="group relative block overflow-hidden rounded-2xl border border-white/[0.05]"
                        >
                            <img
                                src={item.src}
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full object-cover brightness-[0.6] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.75]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent" />
                            <div className="absolute inset-x-0 bottom-0 p-5">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-[#d4af37]/70">
                                    {item.category}
                                </span>
                                <p className="mt-1 font-display text-lg text-stone-100">{item.title}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
