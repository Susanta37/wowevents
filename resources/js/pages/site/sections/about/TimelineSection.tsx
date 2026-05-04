import { motion, useReducedMotion } from 'framer-motion';

import type { TimelineItem } from './types';

type Props = {
    timeline: TimelineItem[];
};

export function TimelineSection({ timeline }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="border-y border-white/[0.05] bg-[#070707] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-28">
            <div className="mx-auto max-w-[900px]">
                <h2 className="text-center font-display text-3xl text-stone-100 md:text-4xl">
                    Our journey
                </h2>
                <div className="relative mt-20">
                    <div
                        aria-hidden
                        className="absolute start-[11px] top-2 bottom-2 w-px bg-linear-to-b from-[#d4af37]/55 via-[#d4af37]/18 to-transparent md:start-1/2 md:-translate-x-1/2"
                    />
                    <ul className="space-y-20">
                        {timeline.map((item, idx) => (
                            <motion.li
                                key={item.year}
                                className={`relative flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-16 ${idx % 2 === 0 ? '' : 'md:text-end'}`}
                                initial={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 0, y: 36 }
                                }
                                whileInView={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              opacity: 1,
                                              y: 0,
                                              transition: {
                                                  duration: 0.75,
                                                  ease: [0.42, 0, 0.58, 1],
                                                  delay: idx * 0.08,
                                              },
                                          }
                                }
                                viewport={{ once: true, margin: '-10%' }}
                            >
                                <div
                                    className={`md:pe-12 ${idx % 2 === 0 ? 'md:col-start-1 md:text-end' : 'md:col-start-2 md:text-start'}`}
                                >
                                    <span className="inline-flex items-center gap-4">
                                        <span className="hidden size-2 rounded-full bg-[#d4af37] shadow-[0_0_18px_2px_rgb(212_175_55_/_0.45)] md:inline md:absolute md:start-1/2 md:-translate-x-1/2" />
                                        <span className="font-display text-2xl text-[#d4af37]">
                                            {item.year}
                                        </span>
                                    </span>
                                </div>
                                <div
                                    className={`md:ps-12 ${idx % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:row-start-1'}`}
                                >
                                    <h3 className="font-display text-xl text-stone-100">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 leading-relaxed text-stone-500">
                                        {item.body}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
