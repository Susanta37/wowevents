import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

export function EditorialQuoteSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
            <motion.blockquote
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } }
                }
                viewport={{ once: true }}
                className="relative mx-auto max-w-3xl rounded-3xl border border-white/[0.06] bg-white/[0.02] px-8 py-12 text-center lg:px-14 lg:py-16"
            >
                <Quote className="mx-auto mb-6 h-8 w-8 rotate-180 text-[#d4af37]/20" />
                <p className="font-display text-xl leading-relaxed text-stone-200 md:text-2xl lg:text-3xl">
                    Great events are remembered not for what was seen, but for how they made
                    everyone feel.
                </p>
                <footer className="mt-8 text-[10px] uppercase tracking-[0.35em] text-stone-600">
                    — WOW Events editorial philosophy
                </footer>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"
                />
            </motion.blockquote>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {['Design Notes', 'Production Diary', 'Client Stories', 'Industry Insight'].map(
                    (tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-stone-500"
                        >
                            {tag}
                        </span>
                    ),
                )}
            </div>
        </SectionWrapper>
    );
}
