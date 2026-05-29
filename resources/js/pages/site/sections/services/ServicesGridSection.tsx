import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
    ClipboardList,
    Flower2,
    Lamp,
    Layers,
    Sparkles,
    UtensilsCrossed,
    ArrowUpRight,
    ChevronRight,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { AnimatedCard } from '@/components/AnimatedCard';
import {
    SectionWrapper,
    StaggerContainer,
    StaggerItem,
} from '@/components/SectionWrapper';

import type { ServiceCard } from './types';

const icons = [
    { Icon: Sparkles, gradient: 'from-[#d4af37]/20 to-[#d4af37]/5' },
    { Icon: Layers, gradient: 'from-[#c9a830]/20 to-[#c9a830]/5' },
    { Icon: Flower2, gradient: 'from-[#b8942e]/20 to-[#b8942e]/5' },
    { Icon: Lamp, gradient: 'from-[#d4af37]/20 to-[#d4af37]/5' },
    { Icon: UtensilsCrossed, gradient: 'from-[#c9a830]/20 to-[#c9a830]/5' },
    { Icon: ClipboardList, gradient: 'from-[#b8942e]/20 to-[#b8942e]/5' },
];

type Props = {
    services: ServiceCard[];
};

const easeLuxury = [0.25, 0.46, 0.45, 0.94];

export function ServicesGridSection({ services }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-36">
            {/* Ambient gold glow behind grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 right-0 h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.1)_0%,transparent_60%)] blur-3xl"
            />

            {/* Subtle dot pattern */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.006]"
                style={{
                    backgroundImage:
                        'radial-gradient(rgba(212,175,55,0.8) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {services.map((service, idx) => {
                    const { Icon, gradient } = icons[idx % icons.length];
                    const isHovered = hoveredIndex === idx;

                    return (
                        <StaggerItem key={service.id}>
                            <motion.div
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="group relative h-full"
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              y: -6,
                                              transition: {
                                                  duration: 0.5,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                            >
                                {/* Card ambient glow on hover */}
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -inset-3 rounded-3xl bg-gradient-to-br ${gradient} blur-xl transition-all duration-1000 ${
                                        isHovered
                                            ? 'opacity-100 scale-105'
                                            : 'opacity-0 scale-100'
                                    }`}
                                />

                                <AnimatedCard className="h-full">
                                    <article
                                        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] p-8 transition-all duration-700 lg:p-10 ${
                                            isHovered
                                                ? 'border-[#d4af37]/30 shadow-[0_60px_120px_-60px_rgb(212_175_55_/_0.3),0_0_0_1px_rgb(212_175_55_/_0.08)]'
                                                : 'border-white/[0.05] shadow-[0_20px_60px_-35px_rgb(0_0_0_/_0.5)]'
                                        }`}
                                    >
                                        {/* Card gradient overlay */}
                                        <div
                                            aria-hidden="true"
                                            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                                        />

                                        {/* Top section: Icon + Number */}
                                        <div className="relative flex items-start justify-between">
                                            {/* Icon container */}
                                            <motion.div
                                                animate={
                                                    isHovered
                                                        ? {
                                                              rotate: [0, -5, 5, 0],
                                                              scale: [1, 1.08, 1],
                                                          }
                                                        : {}
                                                }
                                                transition={{
                                                    duration: 0.7,
                                                    ease: 'easeInOut',
                                                }}
                                                className={`inline-flex rounded-2xl border p-4 transition-all duration-700 ${
                                                    isHovered
                                                        ? 'border-[#d4af37]/40 bg-[#d4af37]/15 shadow-[0_0_30px_-10px_rgb(212_175_55_/_0.2)]'
                                                        : 'border-[#d4af37]/15 bg-[#d4af37]/5'
                                                }`}
                                            >
                                                <Icon
                                                    className={`h-7 w-7 transition-colors duration-700 ${
                                                        isHovered
                                                            ? 'text-[#d4af37]'
                                                            : 'text-[#d4af37]/60'
                                                    }`}
                                                    aria-hidden="true"
                                                />
                                            </motion.div>

                                            {/* Number indicator */}
                                            <span
                                                className={`font-display text-3xl transition-colors duration-700 ${
                                                    isHovered
                                                        ? 'text-[#d4af37]/20'
                                                        : 'text-white/[0.03]'
                                                }`}
                                            >
                                                {String(idx + 1).padStart(2, '0')}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div className="relative mt-8 flex flex-1 flex-col">
                                            {/* Title */}
                                            <h2
                                                className={`font-display text-xl leading-snug transition-colors duration-700 lg:text-2xl ${
                                                    isHovered
                                                        ? 'text-white'
                                                        : 'text-stone-100'
                                                }`}
                                            >
                                                {service.title}
                                            </h2>

                                            {/* Description */}
                                            <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-500 transition-colors duration-700 group-hover:text-stone-400 md:text-base">
                                                {service.description}
                                            </p>

                                            {/* Features list on hover */}
                                            <AnimatePresence>
                                                {isHovered && service.features && (
                                                    <motion.ul
                                                        initial={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        animate={{
                                                            opacity: 1,
                                                            height: 'auto',
                                                        }}
                                                        exit={{
                                                            opacity: 0,
                                                            height: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            ease: easeLuxury,
                                                        }}
                                                        className="mt-5 space-y-2 overflow-hidden"
                                                    >
                                                        {service.features.map(
                                                            (feature, fIdx) => (
                                                                <motion.li
                                                                    key={feature}
                                                                    initial={{
                                                                        opacity: 0,
                                                                        x: -10,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        x: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.3,
                                                                        delay:
                                                                            fIdx *
                                                                            0.08,
                                                                    }}
                                                                    className="flex items-center gap-2 text-xs text-stone-400"
                                                                >
                                                                    <span className="h-1 w-1 rounded-full bg-[#d4af37]/50" />
                                                                    {feature}
                                                                </motion.li>
                                                            ),
                                                        )}
                                                    </motion.ul>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Bottom section */}
                                        <div className="relative mt-8">
                                            {/* Decorative line */}
                                            <div
                                                className={`h-px bg-gradient-to-r from-[#d4af37]/40 to-transparent transition-all duration-700 ${
                                                    isHovered
                                                        ? 'w-full'
                                                        : 'w-0'
                                                }`}
                                            />

                                            <div className="mt-5 flex items-center justify-between">
                                                {/* CTA text */}
                                                <span
                                                    className={`font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500 ${
                                                        isHovered
                                                            ? 'text-[#d4af37]/90 tracking-[0.38em]'
                                                            : 'text-[#d4af37]/50'
                                                    }`}
                                                >
                                                    {service.href
                                                        ? 'Explore service'
                                                        : 'Reserved for you'}
                                                </span>

                                                {/* Arrow or link */}
                                                {service.href ? (
                                                    <Link
                                                        href={service.href}
                                                        prefetch
                                                        className={`transition-all duration-500 ${
                                                            isHovered
                                                                ? 'text-[#d4af37] -translate-y-0.5 translate-x-0.5'
                                                                : 'text-[#d4af37]/0'
                                                        } group-hover:text-[#d4af37]/70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`}
                                                    >
                                                        <ArrowUpRight className="h-4 w-4" />
                                                    </Link>
                                                ) : (
                                                    <span
                                                        className={`transition-all duration-500 ${
                                                            isHovered
                                                                ? 'text-[#d4af37]/60'
                                                                : 'text-[#d4af37]/0'
                                                        }`}
                                                    >
                                                        <ChevronRight className="h-4 w-4" />
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Corner accents */}
                                        <div
                                            aria-hidden="true"
                                            className={`absolute right-4 top-4 h-8 w-8 border-r border-t transition-all duration-700 ${
                                                isHovered
                                                    ? 'border-[#d4af37]/25'
                                                    : 'border-transparent'
                                            }`}
                                        />
                                        <div
                                            aria-hidden="true"
                                            className={`absolute bottom-4 left-4 h-8 w-8 border-b border-l transition-all duration-700 ${
                                                isHovered
                                                    ? 'border-[#d4af37]/25'
                                                    : 'border-transparent'
                                            }`}
                                        />
                                    </article>
                                </AnimatedCard>
                            </motion.div>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>

            {/* Bottom decorative element */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: {
                        duration: 1.2,
                        delay: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-20 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent lg:mt-28"
            />

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.7,
                        delay: 0.8,
                        ease: easeLuxury,
                    },
                }}
                viewport={{ once: true }}
                className="mt-12 flex justify-center"
            >
                <Link
                    href="/book-now"
                    prefetch
                    className="group inline-flex items-center gap-3 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 px-8 py-4 text-xs uppercase tracking-[0.3em] text-[#d4af37] backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/40 hover:bg-[#d4af37]/10 hover:shadow-[0_0_50px_-15px_rgb(212_175_55_/_0.3)]"
                >
                    <span>Begin your experience</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </motion.div>
        </SectionWrapper>
    );
}