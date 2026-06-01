import { motion, useReducedMotion } from 'framer-motion';
import { Award, Medal, Star, Trophy } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const awards = [
    {
        icon: Trophy,
        year: '2025',
        title: 'Best Event Management Agency',
        body: 'East India Business Excellence Awards — Kolkata',
    },
    {
        icon: Medal,
        year: '2024',
        title: 'Luxury Wedding Planner of the Year',
        body: 'Indian Wedding Industry Awards — Eastern Region',
    },
    {
        icon: Star,
        year: '2023',
        title: 'Corporate Event Excellence',
        body: 'Bengal Chamber of Commerce — Annual Recognition',
    },
    {
        icon: Award,
        year: '2022',
        title: 'Innovation in Event Design',
        body: 'Event & Experiential Marketing Forum — India',
    },
];

export function AwardsSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-3xl"
            />

            <div className="mx-auto max-w-2xl text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                    Recognition
                </span>
                <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl">
                    Awards & accolades
                </h2>
                <p className="mt-6 text-base leading-relaxed text-stone-500">
                    Industry recognition for the craft, care, and consistency we bring to every
                    celebration—across weddings, corporate milestones, and luxury experiences.
                </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
                {awards.map((award, idx) => {
                    const Icon = award.icon;

                    return (
                        <motion.div
                            key={award.title}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                              duration: 0.7,
                                              delay: idx * 0.1,
                                              ease: easeLuxury,
                                          },
                                      }
                            }
                            viewport={{ once: true, margin: '-8%' }}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#d4af37]/20 lg:p-8"
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#d4af37]/5 blur-2xl transition-all duration-500 group-hover:bg-[#d4af37]/10"
                            />
                            <div className="relative flex items-start gap-5">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                    <Icon className="h-5 w-5 text-[#d4af37]" />
                                </div>
                                <div>
                                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/60">
                                        {award.year}
                                    </span>
                                    <h3 className="mt-2 font-display text-xl text-stone-100">
                                        {award.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-stone-500">{award.body}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
