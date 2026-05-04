import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';

export function CompanyStorySection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="mx-auto grid max-w-[1400px] items-center gap-20 px-6 pt-14 pb-20 lg:grid-cols-2 lg:gap-28 lg:px-10 lg:pt-16 lg:pb-28">
            <motion.div
                initial={
                    prefersReducedMotion
                        ? undefined
                        : {
                              clipPath: 'inset(10% 12% 18% 12% round 1.5rem)',
                              opacity: 0.6,
                          }
                }
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : {
                              clipPath: 'inset(0% 0% 0% 0% round 1.75rem)',
                              opacity: 1,
                              transition: {
                                  duration: 1.05,
                                  ease: [0.42, 0, 0.58, 1],
                              },
                          }
                }
                viewport={{ once: true, margin: '-12%' }}
                className="overflow-hidden rounded-3xl border border-white/[0.07] shadow-[0_60px_120px_-72px_rgb(212_175_55_/_0.45)]"
            >
                <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b621b47?q=80&w=1800&auto=format&fit=crop"
                    alt="Refined seaside ceremony"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[5/6] w-full object-cover brightness-90"
                />
            </motion.div>
            <div>
                <h2 className="font-display text-3xl text-stone-100 md:text-4xl">
                    Company story
                </h2>
                <p className="mt-10 leading-relaxed text-stone-500">
                    WOW Events began as a single promise: that five-star moments need not feel
                    overwrought. We pair couture references with operational rigor—so clients float
                    through their evening while we manage a hundred silent pivots behind the scenes.
                </p>
                <p className="mt-8 leading-relaxed text-stone-500">
                    Today we orchestrate multi-day residencies, couture weddings, and board galas with
                    the same DNA: patience, palette discipline, and lighting that flatters every
                    thread of linen.
                </p>
            </div>
        </SectionWrapper>
    );
}
