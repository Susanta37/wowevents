import { motion, useReducedMotion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

export function FounderMessageSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_55%)]"
            />

            <div className="relative mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[280px_1fr] lg:gap-20">
                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, x: -30 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeLuxury } }
                    }
                    viewport={{ once: true }}
                    className="mx-auto lg:mx-0"
                >
                    <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-[#141414] via-[#0a0a0a] to-[#1a1510] shadow-[0_40px_80px_-50px_rgb(212_175_55_/_0.4)]">
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_65%)]"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute inset-6 rounded-2xl border border-[#d4af37]/10"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                <Sparkles className="h-8 w-8 text-[#d4af37]/50" />
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent" />
                    </div>
                </motion.div>

                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, x: 30 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 1, x: 0, transition: { duration: 0.8, ease: easeLuxury } }
                    }
                    viewport={{ once: true }}
                >
                    <div className="mb-6 flex items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/80">
                            A note from our founder
                        </span>
                    </div>

                    <Quote className="mb-6 h-8 w-8 rotate-180 text-[#d4af37]/20" />

                    <blockquote className="font-display text-2xl leading-relaxed text-stone-200 md:text-3xl lg:text-4xl">
                        We started WOW Events with a single conviction—that Indian celebrations
                        deserve the same rigour and restraint as the world's finest five-star
                        gatherings.
                    </blockquote>

                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-500">
                        From a small studio in Kolkata, we have grown into a full-service agency
                        trusted by over two hundred brands. Yet our promise remains unchanged: you
                        should feel present at your own event, while we handle every invisible
                        detail with white-glove care.
                    </p>

                    <div className="mt-10 border-t border-white/[0.06] pt-8">
                        <p className="text-sm text-stone-500">Founder & Creative Director</p>
                        <p className="mt-0.5 text-xs text-stone-600">WOW Events, Kolkata</p>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
