import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { Target, Lightbulb, Compass, Star } from 'lucide-react';

const easeLuxury = [0.25, 0.46, 0.45, 0.94];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (idx: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: idx * 0.1,
            duration: 0.8,
            ease: easeLuxury,
        },
    }),
};

export function VisionMissionSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pb-28 lg:px-10 lg:pb-32">
            {/* Ambient glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-1/4 top-2/3 -z-10 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.1)_0%,transparent_60%)] blur-3xl"
            />

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
                {/* Vision Section */}
                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  x: 0,
                                  transition: { duration: 0.8, ease: easeLuxury },
                              }
                    }
                    viewport={{ once: true, margin: '-10%' }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                            The Ultimate Goal
                        </span>
                    </div>
                    <h2 className="font-display text-4xl text-stone-100 md:text-5xl">
                        Our Vision
                    </h2>
                    
                    <div className="mt-12 space-y-10">
                        <motion.div
                            custom={0}
                            variants={cardVariants}
                            initial={prefersReducedMotion ? undefined : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h3 className="flex items-center gap-3 font-display text-xl text-stone-200">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Star className="h-4 w-4 text-[#d4af37]" />
                                </span>
                                Turning Events Into Experiences
                            </h3>
                            <p className="mt-4 pl-11 leading-relaxed text-stone-400">
                                To elevate traditional corporate gatherings and change how brands connect with people by turning events into unforgettable, immersive, and technology-driven experiences.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial={prefersReducedMotion ? undefined : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h3 className="flex items-center gap-3 font-display text-xl text-stone-200">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Compass className="h-4 w-4 text-[#d4af37]" />
                                </span>
                                Setting Global Benchmarks
                            </h3>
                            <p className="mt-4 pl-11 leading-relaxed text-stone-400">
                                To continuously expand our international reach (having already served over 200 brands across West Bengal, India) and be recognized globally as the go-to full-service agency for top-of-the-line benchmark events.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  x: 0,
                                  transition: { duration: 0.8, ease: easeLuxury },
                              }
                    }
                    viewport={{ once: true, margin: '-10%' }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4af37]">
                            The Daily Purpose
                        </span>
                    </div>
                    <h2 className="font-display text-4xl text-stone-100 md:text-5xl">
                        Our Mission
                    </h2>

                    <div className="mt-12 space-y-10">
                        <motion.div
                            custom={0}
                            variants={cardVariants}
                            initial={prefersReducedMotion ? undefined : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h3 className="flex items-center gap-3 font-display text-xl text-stone-200">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Target className="h-4 w-4 text-[#d4af37]" />
                                </span>
                                Seamless, End-to-End Execution
                            </h3>
                            <p className="mt-4 pl-11 leading-relaxed text-stone-400">
                                To provide a comprehensive, stress-free experience for clients through a dedicated in-house team of conceptualizers, designers, visualizers, and execution specialists who tackle every detail from initial concept to final production.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={cardVariants}
                            initial={prefersReducedMotion ? undefined : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h3 className="flex items-center gap-3 font-display text-xl text-stone-200">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <Lightbulb className="h-4 w-4 text-[#d4af37]" />
                                </span>
                                Driven by Innovation and Adaptability
                            </h3>
                            <p className="mt-4 pl-11 leading-relaxed text-stone-400">
                                To aggressively integrate cutting-edge creative concepts, workflow automation, and rapid strategic thinking into event planning, ensuring seamless adaptations to changing demands.
                            </p>
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={cardVariants}
                            initial={prefersReducedMotion ? undefined : 'hidden'}
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <h3 className="flex items-center gap-3 font-display text-xl text-stone-200">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                                    <span className="font-sans text-[10px] font-bold text-[#d4af37]">WOW</span>
                                </span>
                                Delivering the "WOW" Factor
                            </h3>
                            <p className="mt-4 pl-11 leading-relaxed text-stone-400">
                                To work passionately and dynamically to ensure every brand's story is clearly told and every project culminates in a flawless, highly successful outcome that leaves a lasting impression on attendees.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
