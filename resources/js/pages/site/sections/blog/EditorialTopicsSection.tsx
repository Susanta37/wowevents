import { motion, useReducedMotion } from 'framer-motion';
import { Building2, Crown, Lamp, UtensilsCrossed } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const topics = [
    {
        icon: Lamp,
        title: 'Atmosphere & Lighting',
        body: 'How layered light, shadow, and luminous architecture transform a room before the first guest arrives.',
    },
    {
        icon: Crown,
        title: 'Wedding Craft',
        body: 'Mandap design, reception flow, and the quiet choreography behind multi-day celebrations.',
    },
    {
        icon: Building2,
        title: 'Corporate Narrative',
        body: 'Brand storytelling, executive summits, and gatherings that feel human—not sterile.',
    },
    {
        icon: UtensilsCrossed,
        title: 'Service & Dining',
        body: 'Plating windows, champagne cues, and the art of timing that guests feel but never see.',
    },
];

export function EditorialTopicsSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-20 lg:px-10 lg:pt-16 lg:pb-28">
            <div className="mb-12 text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                    What we explore
                </span>
                <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl">
                    Editorial pillars
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-stone-500 md:text-base">
                    Field notes from our curators, designers, and production leads—written for
                    clients who care about the craft behind exceptional gatherings.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {topics.map((topic, idx) => {
                    const Icon = topic.icon;

                    return (
                        <motion.div
                            key={topic.title}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 24 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: { duration: 0.7, delay: idx * 0.08, ease: easeLuxury },
                                      }
                            }
                            viewport={{ once: true, margin: '-8%' }}
                            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#d4af37]/20 hover:bg-[#d4af37]/[0.03] lg:p-8"
                        >
                            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                <Icon className="h-4 w-4 text-[#d4af37]" />
                            </div>
                            <h3 className="font-display text-lg text-stone-100">{topic.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-stone-500">{topic.body}</p>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
