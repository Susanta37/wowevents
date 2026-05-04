import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import {
    ClipboardList,
    PenLine,
    Orbit,
    Sparkles,
} from 'lucide-react';

import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const phases: {
    icon: LucideIcon;
    label: string;
    title: string;
    detail: string;
}[] = [
    {
        icon: ClipboardList,
        label: 'Phase I',
        title: 'Confidential brief',
        detail: 'We capture intent, sensitivities, and guardrails—the foundation for every subsequent decision.',
    },
    {
        icon: PenLine,
        label: 'Phase II',
        title: 'Concept & covenant',
        detail: 'Bespoke palettes, choreography, and investment clarity—approved before procurement begins.',
    },
    {
        icon: Orbit,
        label: 'Phase III',
        title: 'Production orbit',
        detail: 'Vendors aligned to one restrained scorecard: rehearsal windows, tabletop, luminous architecture.',
    },
    {
        icon: Sparkles,
        label: 'Phase IV',
        title: 'Presence',
        detail: 'Day-of choreography with invisible stewardship—your focus stays on guests, not logistics.',
    },
];

export function EngagementProcessSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 py-16 lg:px-10 lg:py-24 lg:pb-28">
            <div
                aria-hidden
                className="pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_65%)] blur-3xl"
            />

            <motion.div
                initial={
                    prefersReducedMotion ? undefined : { opacity: 0, y: 32 }
                }
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.85, ease: easeLuxury },
                          }
                }
                viewport={{ once: true, margin: '-12%' }}
                className="relative mb-14 text-center md:mb-16"
            >
                <div className="mb-6 flex justify-center gap-3">
                    <span className="h-px w-6 shrink-0 bg-linear-to-r from-transparent to-[#d4af37]/45" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.36em] text-[#d4af37]/75">
                        How we partner
                    </span>
                    <span className="h-px w-6 shrink-0 bg-linear-to-l from-transparent to-[#d4af37]/45" />
                </div>
                <h2 className="mx-auto max-w-3xl font-display text-3xl tracking-tight text-stone-100 md:text-4xl lg:text-5xl">
                    A calibrated path from{' '}
                    <span className="bg-linear-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                        first conversation
                    </span>{' '}
                    to the final toast
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone-500 md:text-base">
                    Enough structure to safeguard investment; enough flexibility so the narrative still feels uniquely
                    yours.
                </p>
            </motion.div>

            <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-4 right-4 top-[3.25rem] hidden h-px bg-linear-to-r from-transparent via-[#d4af37]/15 to-transparent lg:block"
                />

                {phases.map((phase, idx) => {
                    const Icon = phase.icon;

                    return (
                        <motion.article
                            key={phase.title}
                            initial={
                                prefersReducedMotion
                                    ? undefined
                                    : { opacity: 0, y: 24 }
                            }
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                              duration: 0.75,
                                              delay: idx * 0.07,
                                              ease: easeLuxury,
                                          },
                                      }
                            }
                            viewport={{ once: true, margin: '-8%' }}
                            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/20 lg:px-5 lg:text-left"
                        >
                            <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37] transition-colors duration-500 group-hover:border-[#d4af37]/35 group-hover:bg-[#d4af37]/18 lg:mx-0">
                                <Icon className="size-6" aria-hidden />
                            </div>
                            <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-[#d4af37]/65">
                                {phase.label}
                            </p>
                            <h3 className="mt-2 font-display text-xl text-stone-100">{phase.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-stone-500">{phase.detail}</p>
                            <span
                                aria-hidden
                                className="mt-8 block font-display text-5xl leading-none text-[#d4af37]/07 transition-colors duration-500 group-hover:text-[#d4af37]/12 lg:absolute lg:right-6 lg:top-6 lg:mt-0 lg:block"
                            >
                                {String(idx + 1).padStart(2, '0')}
                            </span>
                        </motion.article>
                    );
                })}
            </div>

            <motion.div
                initial={
                    prefersReducedMotion ? undefined : { opacity: 0, y: 16 }
                }
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                              opacity: 1,
                              y: 0,
                              transition: {
                                  duration: 0.7,
                                  delay: 0.2,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                className="relative mt-14 flex justify-center lg:mt-16"
            >
                <Link
                    href="/book-now"
                    prefetch
                    className="rounded-2xl border border-[#d4af37]/45 bg-linear-to-br from-[#d4af37]/12 to-transparent px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#efe6d0] shadow-[0_0_40px_-16px_rgb(212_175_55_/_0.35)] transition-all duration-500 hover:border-[#d4af37]/65 hover:from-[#d4af37]/22"
                >
                    Begin your brief
                </Link>
            </motion.div>
        </SectionWrapper>
    );
}
