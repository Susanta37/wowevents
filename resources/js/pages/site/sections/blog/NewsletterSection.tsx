import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SITE_CONTACT } from '@/constants/site-contact';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

export function NewsletterSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)]"
            />

            <motion.div
                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                whileInView={
                    prefersReducedMotion
                        ? undefined
                        : { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } }
                }
                viewport={{ once: true }}
                className="relative mx-auto max-w-[720px] text-center"
            >
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                    <Mail className="h-5 w-5 text-[#d4af37]" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                    Stay inspired
                </span>
                <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl">
                    Journal dispatches, delivered quietly
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-stone-500 md:text-base">
                    Occasional notes on design, production, and the celebrations shaping our
                    craft—no clutter, only curated insight.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                        href={`mailto:${SITE_CONTACT.email}?subject=Subscribe%20to%20WOW%20Events%20Journal`}
                        className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-[#d4af37] transition-all duration-500 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/10"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        Request journal updates
                    </a>
                    <Link
                        href="/contact"
                        prefetch
                        className="inline-flex items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] text-stone-400 transition-all duration-500 hover:border-[#d4af37]/20 hover:text-stone-200"
                    >
                        Contact editorial
                    </Link>
                </div>

                <p className="mt-6 text-xs text-stone-600">
                    We respect your inbox—only meaningful stories, never spam.
                </p>
            </motion.div>
        </SectionWrapper>
    );
}
