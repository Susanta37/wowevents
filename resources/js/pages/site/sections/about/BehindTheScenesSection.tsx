import { motion, useReducedMotion } from 'framer-motion';
import { Camera, Clapperboard, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const moments = [
    {
        src: '/assets/6.jpeg',
        alt: 'Floral installation being refined before doors open',
        caption: 'Floral couture — final adjustments',
        size: 'large', // featured image
    },
    {
        src: '/assets/10.jpeg',
        alt: 'Lighting rehearsal in a heritage ballroom',
        caption: 'Lighting rehearsal — sculpting mood',
        size: 'small',
    },
    {
        src: '/assets/14.jpeg',
        alt: 'Tablescape styling in progress',
        caption: 'Tablescape architecture',
        size: 'small',
    },
    {
        src: '/assets/16.jpeg',
        alt: 'Production team coordinating backstage',
        caption: 'Run-of-show coordination',
        size: 'wide',
    },
];

export function BehindTheScenesSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative overflow-hidden bg-gradient-to-b from-[#050505] to-[#0a0a0a] px-6 py-20 lg:px-10 lg:py-28">
            {/* Ambient gold glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(212,175,55,0.06)_0%,transparent_60%)]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1400px]">
                {/* Section header with refined gold accents */}
                <div className="mb-16 text-center lg:mb-24">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <Clapperboard className="h-4 w-4 text-[#d4af37]/60" />
                        <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#d4af37]/80">
                            Behind the scenes
                        </span>
                    </div>
                    <h2 className="font-display text-3xl font-light tracking-tight text-stone-100 md:text-4xl lg:text-5xl">
                        Where magic is quietly assembled
                    </h2>
                    <div className="mx-auto mt-4 h-px w-12 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />
                </div>

                {/* Asymmetric editorial grid */}
                <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
                    {/* Left column: large hero image + text */}
                    <div className="space-y-6 md:space-y-8">
                        <motion.figure
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeLuxury } }
                            }
                            viewport={{ once: true, margin: '-10%' }}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40 backdrop-blur-sm"
                        >
                            <div className="aspect-[4/5] overflow-hidden md:aspect-[3/4]">
                                <img
                                    src={moments[0].src}
                                    alt={moments[0].alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover brightness-[0.65] transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-xs uppercase tracking-[0.25em] text-stone-300 md:p-6">
                                {moments[0].caption}
                            </figcaption>
                        </motion.figure>

                        {/* Supporting text block - more prominent */}
                        <motion.div
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
                            }
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/[0.04] bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
                        >
                            <p className="text-base leading-relaxed text-stone-300 md:text-lg">
                                Long before the first guest arrives, our teams are on‑site — testing light angles, rehearsing service tracks, and refining every surface until the room feels inevitable, not decorated.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                                <Camera className="h-3.5 w-3.5 text-[#d4af37]/50" />
                                <span>Production diary — Kolkata & beyond</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right column: two small images + one wide image */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Two small squares */}
                        <div className="grid grid-cols-2 gap-6 md:gap-8">
                            {moments.slice(1, 3).map((moment, idx) => (
                                <motion.figure
                                    key={moment.caption}
                                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                                    whileInView={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  opacity: 1,
                                                  y: 0,
                                                  transition: { delay: idx * 0.1 + 0.1, duration: 0.6, ease: easeLuxury },
                                              }
                                    }
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40"
                                >
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={moment.src}
                                            alt={moment.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover brightness-[0.65] transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                    <figcaption className="absolute bottom-0 left-0 right-0 p-3 text-[10px] uppercase tracking-[0.25em] text-stone-300 md:p-4">
                                        {moment.caption}
                                    </figcaption>
                                </motion.figure>
                            ))}
                        </div>

                        {/* Wide image (run-of-show) */}
                        <motion.figure
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6, ease: easeLuxury } }
                            }
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-black/40"
                        >
                            <div className="aspect-[16/9] overflow-hidden md:aspect-[21/9]">
                                <img
                                    src={moments[3].src}
                                    alt={moments[3].alt}
                                    loading="lazy"
                                    className="h-full w-full object-cover brightness-[0.65] transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-xs uppercase tracking-[0.25em] text-stone-300 md:p-5">
                                {moments[3].caption}
                            </figcaption>
                        </motion.figure>
                    </div>
                </div>

                {/* Elegant closing quote / link */}
                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center text-center md:mt-20"
                >
                    <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 backdrop-blur-sm transition-all hover:border-[#d4af37]/30">
                        <span className="text-xs uppercase tracking-[0.2em] text-stone-400">
                            This is the work nobody applauds, yet everyone feels
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-[#d4af37]/60" />
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}