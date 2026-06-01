import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { ClipboardList, PenLine, Orbit, Sparkles } from 'lucide-react';
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
        label: 'Step 01',
        title: 'Discovery brief',
        detail: 'We capture your vision, guest profile, sensitivities, and investment guardrails—the blueprint for every creative decision.',
    },
    {
        icon: PenLine,
        label: 'Step 02',
        title: 'Concept & design',
        detail: 'Bespoke mood boards, 3D visualizations, and run-of-show drafts—refined until the narrative feels inevitable.',
    },
    {
        icon: Orbit,
        label: 'Step 03',
        title: 'Production build',
        detail: 'Vendors, florals, lighting, and culinary aligned to one scorecard with rehearsal windows locked well ahead of doors.',
    },
    {
        icon: Sparkles,
        label: 'Step 04',
        title: 'Flawless execution',
        detail: 'Day-of stewardship with invisible teams—you remain present with guests while we orchestrate every pivot backstage.',
    },
];

export function ProcessSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_65%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1200px]">
                <div className="mb-14 text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Our process
                    </span>
                    <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl lg:text-5xl">
                        From brief to{' '}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                            final toast
                        </span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-stone-500 md:text-base">
                        A structured yet flexible framework—enough rigour to protect your investment,
                        enough artistry to keep the experience unmistakably yours.
                    </p>
                </div>

                <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 right-4 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent lg:block"
                    />
                    {phases.map((phase, idx) => {
                        const Icon = phase.icon;

                        return (
                            <motion.article
                                key={phase.title}
                                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                                whileInView={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              opacity: 1,
                                              y: 0,
                                              transition: {
                                                  duration: 0.75,
                                                  delay: idx * 0.08,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true, margin: '-8%' }}
                                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#d4af37]/20 lg:p-7"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/5">
                                    <Icon className="h-5 w-5 text-[#d4af37]" />
                                </div>
                                <p className="text-[10px] uppercase tracking-[0.32em] text-[#d4af37]/65">
                                    {phase.label}
                                </p>
                                <h3 className="mt-2 font-display text-lg text-stone-100">{phase.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-stone-500">{phase.detail}</p>
                            </motion.article>
                        );
                    })}
                </div>

                <div className="mt-12 flex justify-center">
                    <Link
                        href="/book-now"
                        prefetch
                        className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-[#d4af37] transition-all duration-500 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10"
                    >
                        Start your brief
                    </Link>
                </div>
            </div>
        </SectionWrapper>
    );
}
