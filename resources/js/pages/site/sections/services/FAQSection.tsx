import { Link } from '@inertiajs/react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useId, useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const faqs = [
    {
        id: 'scope',
        q: 'What services does WOW Events provide end-to-end?',
        a: 'We cover the full event lifecycle—concept and narrative, venue choreography, floral couture, lighting and scenic design, gastronomy coordination, and day-of stewardship. Every discipline is handled by our in-house team in Kolkata.',
    },
    {
        id: 'custom',
        q: 'Can services be tailored to our specific event type?',
        a: 'Absolutely. Whether you need a full wedding residency, a corporate gala, or a focused brand activation, we scope only the disciplines your brief requires—never a one-size-fits-all package.',
    },
    {
        id: 'timeline',
        q: 'How far in advance should we book your services?',
        a: 'For large-scale weddings and corporate events we recommend twelve to eighteen months. Intimate celebrations and focused productions often begin four to nine months ahead. We advise honestly once we understand your scale and season.',
    },
    {
        id: 'budget',
        q: 'How is pricing structured across services?',
        a: 'Every mandate begins with a confidential brief and tailored concept outline. Investment reflects guest scale, creative depth, and production load—presented as clear milestones before procurement begins.',
    },
    {
        id: 'vendors',
        q: 'Do you work with our existing vendors?',
        a: 'Yes. We integrate your preferred partners where they strengthen the brief, and introduce vetted specialists only when a gap would compromise the experience.',
    },
    {
        id: 'destination',
        q: 'Do you provide services outside Kolkata?',
        a: 'We produce events across West Bengal, pan-India, and selected international destinations—with the same command centre and quality standards throughout.',
    },
];

export function FAQSection() {
    const prefersReducedMotion = useReducedMotion();
    const baseId = useId();
    const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)]"
            />

            <div className="relative mx-auto max-w-[800px]">
                <div className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <Sparkles className="h-4 w-4 text-[#d4af37]/40" />
                        <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                            Services FAQ
                        </span>
                        <Sparkles className="h-4 w-4 text-[#d4af37]/40" />
                    </div>
                    <h2 className="font-display text-3xl text-stone-100 md:text-4xl">
                        Common questions
                    </h2>
                    <p className="mt-4 text-sm text-stone-500">
                        Everything you need to know before commissioning your event.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, idx) => {
                        const isOpen = openId === faq.id;
                        const triggerId = `${baseId}-${faq.id}-trigger`;
                        const panelId = `${baseId}-${faq.id}-panel`;

                        return (
                            <motion.div
                                key={faq.id}
                                initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
                                whileInView={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              opacity: 1,
                                              y: 0,
                                              transition: { duration: 0.6, delay: idx * 0.05, ease: easeLuxury },
                                          }
                                }
                                viewport={{ once: true }}
                            >
                                <Collapsible
                                    open={isOpen}
                                    onOpenChange={(open) => setOpenId(open ? faq.id : null)}
                                >
                                    <CollapsibleTrigger
                                        id={triggerId}
                                        aria-controls={panelId}
                                        className={`group flex w-full items-center justify-between gap-4 rounded-2xl border px-6 py-5 text-left transition-all duration-500 ${
                                            isOpen
                                                ? 'border-[#d4af37]/25 bg-[#d4af37]/5'
                                                : 'border-white/[0.06] bg-white/[0.02] hover:border-[#d4af37]/15'
                                        }`}
                                    >
                                        <span className="font-display text-base text-stone-200 md:text-lg">
                                            {faq.q}
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 shrink-0 text-[#d4af37]/60 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent id={panelId} aria-labelledby={triggerId}>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -8 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -8 }}
                                                    transition={{ duration: 0.35, ease: easeLuxury }}
                                                    className="px-6 pb-5 pt-2 text-sm leading-relaxed text-stone-500"
                                                >
                                                    {faq.a}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </CollapsibleContent>
                                </Collapsible>
                            </motion.div>
                        );
                    })}
                </div>

                <p className="mt-10 text-center text-sm text-stone-600">
                    Still have questions?{' '}
                    <Link href="/contact" prefetch className="text-[#d4af37]/80 transition-colors hover:text-[#d4af37]">
                        Speak with our team
                    </Link>
                </p>
            </div>
        </SectionWrapper>
    );
}
