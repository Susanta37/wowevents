import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import { SectionWrapper } from '@/components/SectionWrapper';

import type { ServicePreview } from './types';

type Props = {
    previewServices: ServicePreview[];
};

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
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
};

export function ServicesPreviewSection({ previewServices }: Props) {
    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
            {/* Ambient gold glow behind heading */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />

            {/* Heading Block — centered stack */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: easeLuxury }}
                viewport={{ once: true, margin: '-80px' }}
                className="relative mx-auto mb-16 flex max-w-3xl flex-col items-center text-center lg:mb-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="mb-6 flex items-center justify-center gap-3"
                >
                    <span className="h-px w-6 shrink-0 bg-gradient-to-r from-transparent to-[#d4af37]/45" />
                    <span className="font-sans text-xs uppercase tracking-[0.35em] text-[#d4af37]/75">
                        Bespoke Curation
                    </span>
                    <span className="h-px w-6 shrink-0 bg-gradient-to-l from-transparent to-[#d4af37]/45" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.28 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl tracking-tight text-stone-100 md:text-5xl lg:text-6xl"
                >
                    Curated
                    <br />
                    <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                        capacities
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.42 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-stone-400 md:text-lg"
                >
                    Discrete teams for concept, tabletop, luminous architecture,
                    tasting windows, stewarding—woven into one restrained scorecard.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0.6 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.55 }}
                    viewport={{ once: true }}
                    style={{ transformOrigin: 'center' }}
                    className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent md:max-w-sm"
                    aria-hidden
                />
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            >
                {previewServices.slice(0, 4).map((s, index) => (
                    <motion.div
                        key={s.title}
                        variants={itemVariants}
                        className="group relative"
                    >
                        {/* Card glow effect on hover */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.12)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100"
                        />

                        <AnimatedCard className="relative h-full overflow-hidden rounded-2xl border border-white/[0.04] bg-gradient-to-b from-white/[0.04] to-white/[0.01] shadow-[0_20px_60px_-30px_rgb(0_0_0_/_0.5)] backdrop-blur-sm transition-all duration-700 group-hover:-translate-y-1 group-hover:border-[#d4af37]/25 group-hover:shadow-[0_40px_100px_-40px_rgb(212_175_55_/_0.25),0_20px_60px_-30px_rgb(0_0_0_/_0.3)]">
                            <Link
                                href={s.href}
                                prefetch
                                className="flex h-full flex-col justify-between p-8 lg:p-10"
                            >
                                {/* Subtle number indicator */}
                                <span className="mb-6 block font-sans text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/30 transition-colors duration-500 group-hover:text-[#d4af37]/50">
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <div className="space-y-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <h3 className="font-display text-xl leading-snug text-stone-100 transition-colors duration-500 group-hover:text-white lg:text-2xl">
                                            {s.title}
                                        </h3>

                                        {/* Subtle sparkle icon on hover */}
                                        <span className="mt-1 flex-shrink-0 text-[#d4af37]/0 transition-all duration-500 group-hover:text-[#d4af37]/70 group-hover:rotate-12">
                                            <Sparkles className="h-4 w-4" />
                                        </span>
                                    </div>

                                    {/* Decorative line */}
                                    <div className="h-px w-0 bg-gradient-to-r from-[#d4af37]/40 to-transparent transition-all duration-700 group-hover:w-full" />
                                </div>

                                <div className="mt-12 flex items-center justify-between">
                                    <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#d4af37]/60 transition-all duration-500 group-hover:text-[#d4af37]/90 group-hover:tracking-[0.35em]">
                                        Explore service
                                    </span>
                                    <span className="text-[#d4af37]/0 transition-all duration-500 group-hover:text-[#d4af37]/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </span>
                                </div>

                                {/* Bottom accent line */}
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-[#d4af37]/60 to-transparent transition-all duration-700 group-hover:w-full"
                                />
                            </Link>
                        </AnimatedCard>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom decorative element */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                className="mx-auto mt-20 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent lg:mt-28"
            />
        </SectionWrapper>
    );
}