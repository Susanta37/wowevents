import { motion, useReducedMotion } from 'framer-motion';
import { Clock, Layers, Shield, Users, Zap } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const reasons = [
    {
        icon: Layers,
        title: 'End-to-end in-house team',
        body: 'Conceptualizers, designers, visualizers, and execution specialists—all under one roof. No fragmented vendors, no lost vision.',
    },
    {
        icon: Shield,
        title: 'White-glove stewardship',
        body: 'We anticipate contingencies before they surface. Your evening stays calm while we manage a hundred silent pivots backstage.',
    },
    {
        icon: Zap,
        title: 'Innovation at every turn',
        body: 'Cutting-edge creative concepts, workflow automation, and rapid strategic thinking woven into every production timeline.',
    },
    {
        icon: Users,
        title: '200+ brand relationships',
        body: 'Trusted by leading names across West Bengal and India—from heritage hotels to Fortune 500 boardrooms.',
    },
    {
        icon: Clock,
        title: 'Precision timing',
        body: 'Service choreography, plating windows, and lighting cues plotted to the second—because luxury lives in the details nobody sees.',
    },
];

export function WhyChooseUsSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.12)_0%,transparent_60%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1200px]">
                <div className="mx-auto max-w-2xl text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Why WOW Events
                    </span>
                    <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl lg:text-5xl">
                        The difference is in the orchestration
                    </h2>
                    <p className="mt-6 text-base leading-relaxed text-stone-500">
                        We don't just deliver events—we architect atmospheres where every guest feels
                        the intention behind every candle, every bloom, every beam of light.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {reasons.map((reason, idx) => {
                        const Icon = reason.icon;

                        return (
                            <motion.div
                                key={reason.title}
                                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                                whileInView={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              opacity: 1,
                                              y: 0,
                                              transition: {
                                                  duration: 0.7,
                                                  delay: idx * 0.08,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true, margin: '-8%' }}
                                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#d4af37]/20 hover:bg-[#d4af37]/[0.03] lg:p-8"
                            >
                                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 transition-all duration-500 group-hover:border-[#d4af37]/35 group-hover:bg-[#d4af37]/10">
                                    <Icon className="h-5 w-5 text-[#d4af37]" />
                                </div>
                                <h3 className="font-display text-lg text-stone-100">{reason.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-stone-500">
                                    {reason.body}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </SectionWrapper>
    );
}
