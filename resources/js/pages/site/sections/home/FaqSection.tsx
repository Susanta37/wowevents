import { Link } from '@inertiajs/react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Clock, Phone, Sparkles } from 'lucide-react';
import { useId, useState } from 'react';

import { SectionWrapper } from '@/components/SectionWrapper';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const faqCategories = [
    {
        icon: Clock,
        label: 'Timeline & Process',
        items: [
            {
                id: 'lead-time',
                q: 'How far in advance should we engage WOW Events?',
                a: 'For marquee weddings and large-scale corporates we recommend locking your curator twelve to eighteen months ahead; intimate celebrations often begin four to nine months before the date. We will always advise honestly once we understand scale, season, and venue posture.',
            },
            {
                id: 'geography',
                q: 'Do you produce events outside Kolkata?',
                a: 'Yes. We routinely steward destination programs across India and selected international cities, with the same command centre in Kolkata—travel, freight, and local compliance folded into one scorecard.',
            },
        ],
    },
    {
        icon: Sparkles,
        label: 'Investment & Collaboration',
        items: [
            {
                id: 'investment',
                q: 'How is investment structured?',
                a: 'Every mandate begins with a confidential brief and a tailored concept outline. Fees reflect production depth, guest scale, and creative load—presented as clear milestones so you always know what is included before production accelerates.',
            },
            {
                id: 'deposits',
                q: 'How do deposits and milestones work?',
                a: 'A modest retainer secures your production window; subsequent tranches align with design sign-off, vendor procurement, and final rehearsal—each tied to deliverables you can verify.',
            },
            {
                id: 'vendors',
                q: 'Can you collaborate with our existing vendors?',
                a: 'Absolutely. We integrate preferred partners where they strengthen the brief, and introduce vetted specialists only when a gap would compromise the experience.',
            },
        ],
    },
    {
        icon: MessageCircle,
        label: 'Communication',
        items: [
            {
                id: 'contact',
                q: 'Will we have a single point of contact?',
                a: 'You receive a lead curator who owns the narrative end-to-end, supported by specialist cells for design, culinary, and technical direction—without passing you through silos.',
            },
        ],
    },
];

const contentVariants = {
    hidden: {
        height: 0,
        opacity: 0,
        transition: {
            height: { duration: 0.4, ease: [0.42, 0, 0.58, 1] },
            opacity: { duration: 0.25 },
        },
    },
    visible: {
        height: 'auto',
        opacity: 1,
        transition: {
            height: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
            opacity: { duration: 0.35, delay: 0.1 },
        },
    },
};

export function FaqSection() {
    const prefersReducedMotion = useReducedMotion();
    const headingId = useId();
    const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const toggleFaq = (id: string) => {
        setOpenIds((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const allFaqs = faqCategories.flatMap((cat) => cat.items);

    return (
        <SectionWrapper className="relative overflow-hidden border-y border-white/[0.04] bg-[#080808]">
            {/* Ambient lighting layers */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-64 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_55%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-48 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,47,47,0.1)_0%,transparent_55%)] blur-3xl"
            />

            {/* Top gold line */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent"
            />

            {/* Subtle vertical line accent */}
            <div
                aria-hidden="true"
                className="absolute left-1/2 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent lg:block"
            />

            <div className="relative mx-auto max-w-[1200px] px-6 py-24 lg:px-10 lg:py-36">
                {/* Header Section */}
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 0, y: 40 }
                    }
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : {
                                  opacity: 1,
                                  y: 0,
                                  transition: {
                                      duration: 0.9,
                                      ease: easeLuxury,
                                  },
                              }
                    }
                    viewport={{ once: true, margin: '-12%' }}
                    className="mb-20 text-center"
                >
                    {/* Eyebrow */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 10 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.6,
                                          delay: 0.15,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mb-6 flex items-center justify-center gap-4"
                    >
                        <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#d4af37]/50" />
                        <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/80">
                            <span className="h-1 w-1 rounded-full bg-[#d4af37]/50" />
                            Frequently Asked
                        </span>
                        <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#d4af37]/50" />
                    </motion.div>

                    {/* Main Heading */}
                    <h2
                        id={headingId}
                        className="font-display text-4xl tracking-tight text-stone-100 md:text-5xl lg:text-6xl"
                    >
                        Answers with the same{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                                restraint
                            </span>
                            <motion.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.6,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                                viewport={{ once: true }}
                                style={{ originX: 0 }}
                                className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#d4af37]/50 to-transparent"
                            />
                        </span>
                        <br />
                        you expect from us
                    </h2>

                    {/* Description */}
                    <motion.p
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 12 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.7,
                                          delay: 0.35,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg"
                    >
                        Transparency before commitment. If your brief is nuanced,{' '}
                        <Link
                            href="/contact"
                            prefetch
                            className="text-[#d4af37]/85 underline-offset-4 transition-all duration-500 hover:text-[#d4af37] hover:underline"
                        >
                            write to our desk
                        </Link>{' '}
                        —we reply with context, not templated decks.
                    </motion.p>
                </motion.div>

                {/* Categories + FAQ Layout */}
                <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
                    {/* Category Sidebar */}
                    <motion.aside
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, x: -30 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                          duration: 0.8,
                                          delay: 0.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="hidden lg:block"
                    >
                        <div className="sticky top-32 space-y-2">
                            <p className="mb-4 font-sans text-[9px] uppercase tracking-[0.4em] text-stone-600">
                                Browse by topic
                            </p>
                            {faqCategories.map((category) => {
                                const IconComponent = category.icon;
                                const isActive = activeCategory === category.label;

                                return (
                                    <button
                                        key={category.label}
                                        onClick={() =>
                                            setActiveCategory(
                                                isActive
                                                    ? null
                                                    : category.label,
                                            )
                                        }
                                        className={`group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-500 ${
                                            isActive
                                                ? 'border border-[#d4af37]/20 bg-[#d4af37]/5 shadow-[0_0_30px_-10px_rgb(212_175_55_/_0.1)]'
                                                : 'border border-transparent hover:border-white/[0.04] hover:bg-white/[0.02]'
                                        }`}
                                    >
                                        <IconComponent
                                            className={`h-4 w-4 transition-colors duration-500 ${
                                                isActive
                                                    ? 'text-[#d4af37]'
                                                    : 'text-stone-600 group-hover:text-stone-400'
                                            }`}
                                        />
                                        <span
                                            className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${
                                                isActive
                                                    ? 'text-[#d4af37]/90'
                                                    : 'text-stone-500 group-hover:text-stone-300'
                                            }`}
                                        >
                                            {category.label}
                                        </span>
                                        <span className="ml-auto text-[10px] text-stone-700">
                                            {String(category.items.length).padStart(
                                                2,
                                                '0',
                                            )}
                                        </span>
                                    </button>
                                );
                            })}

                            {/* Divider */}
                            <div className="py-4">
                                <div className="h-px bg-gradient-to-r from-[#d4af37]/15 to-transparent" />
                            </div>

                            {/* Quick contact */}
                            <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-5 backdrop-blur-sm">
                                <Phone className="mb-3 h-4 w-4 text-[#d4af37]/40" />
                                <p className="text-xs leading-relaxed text-stone-500">
                                    Prefer a conversation? Reach our curator desk
                                    directly.
                                </p>
                                <Link
                                    href="/book-now"
                                    prefetch
                                    className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#d4af37]/80 transition-colors hover:text-[#d4af37]"
                                >
                                    Schedule call
                                    <span className="text-[#d4af37]/50">→</span>
                                </Link>
                            </div>
                        </div>
                    </motion.aside>

                    {/* FAQ Accordion */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 20 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          delay: 0.2,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true, margin: '-8%' }}
                        className="space-y-8"
                        role="region"
                        aria-labelledby={headingId}
                    >
                        {faqCategories.map((category, catIdx) => (
                            <div key={category.label} className="space-y-3">
                                {/* Mobile category label */}
                                <div className="flex items-center gap-2 lg:hidden">
                                    <category.icon className="h-3.5 w-3.5 text-[#d4af37]/50" />
                                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/60">
                                        {category.label}
                                    </span>
                                    <div className="h-px flex-1 bg-gradient-to-r from-[#d4af37]/10 to-transparent" />
                                </div>

                                {category.items.map((item, idx) => {
                                    const isOpen = !!openIds[item.id];
                                    const globalIdx =
                                        allFaqs.findIndex(
                                            (f) => f.id === item.id,
                                        ) + 1;

                                    return (
                                        <motion.div
                                            key={item.id}
                                            initial={
                                                prefersReducedMotion
                                                    ? undefined
                                                    : {
                                                          opacity: 0,
                                                          y: 16,
                                                      }
                                            }
                                            whileInView={
                                                prefersReducedMotion
                                                    ? undefined
                                                    : {
                                                          opacity: 1,
                                                          y: 0,
                                                          transition: {
                                                              duration: 0.55,
                                                              delay:
                                                                  (catIdx *
                                                                      0.08 +
                                                                      idx *
                                                                          0.04) *
                                                                  0.5,
                                                              ease: easeLuxury,
                                                          },
                                                      }
                                            }
                                            viewport={{
                                                once: true,
                                                margin: '-15% 0px',
                                            }}
                                        >
                                            <Collapsible
                                                open={isOpen}
                                                onOpenChange={() =>
                                                    toggleFaq(item.id)
                                                }
                                                className={`group rounded-2xl border transition-all duration-700 ${
                                                    isOpen
                                                        ? 'border-[#d4af37]/20 bg-gradient-to-b from-[#d4af37]/5 to-transparent shadow-[0_30px_80px_-40px_rgb(212_175_55_/_0.15)]'
                                                        : 'border-white/[0.05] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.02]'
                                                }`}
                                            >
                                                <CollapsibleTrigger
                                                    className="flex w-full items-start gap-4 px-6 py-5 text-left lg:px-8 lg:py-6"
                                                    aria-expanded={isOpen}
                                                >
                                                    {/* Number indicator */}
                                                    <span
                                                        className={`mt-0.5 hidden font-display text-lg transition-colors duration-500 sm:block ${
                                                            isOpen
                                                                ? 'text-[#d4af37]/70'
                                                                : 'text-white/[0.06] group-hover:text-[#d4af37]/20'
                                                        }`}
                                                    >
                                                        {String(
                                                            globalIdx,
                                                        ).padStart(2, '0')}
                                                    </span>

                                                    <div className="flex-1">
                                                        <span
                                                            className={`font-display text-lg leading-snug transition-colors duration-500 md:text-xl ${
                                                                isOpen
                                                                    ? 'text-white'
                                                                    : 'text-stone-200 group-hover:text-white'
                                                            }`}
                                                        >
                                                            {item.q}
                                                        </span>
                                                    </div>

                                                    {/* Toggle button */}
                                                    <span
                                                        className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                                            isOpen
                                                                ? 'border-[#d4af37]/30 bg-[#d4af37]/10 rotate-180'
                                                                : 'border-white/[0.06] bg-white/[0.02] group-hover:border-[#d4af37]/25 group-hover:bg-[#d4af37]/5'
                                                        }`}
                                                    >
                                                        <ChevronDown
                                                            className={`h-4 w-4 transition-all duration-500 ${
                                                                isOpen
                                                                    ? 'text-[#d4af37]'
                                                                    : 'text-[#d4af37]/50 group-hover:text-[#d4af37]/70'
                                                            }`}
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                </CollapsibleTrigger>

                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <CollapsibleContent
                                                            asChild
                                                            forceMount
                                                        >
                                                            <motion.div
                                                                variants={
                                                                    contentVariants
                                                                }
                                                                initial="hidden"
                                                                animate="visible"
                                                                exit="hidden"
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="px-6 pb-6 lg:px-8 lg:pb-7">
                                                                    {/* Gold accent line */}
                                                                    <div className="mb-5 h-px w-0 bg-gradient-to-r from-[#d4af37]/30 to-transparent transition-all duration-700 group-hover:w-full" />

                                                                    <div className="pl-0 sm:pl-9">
                                                                        <p className="text-[15px] leading-relaxed text-stone-400 md:text-base">
                                                                            {
                                                                                item.a
                                                                            }
                                                                        </p>

                                                                        {/* Optional: Related link */}
                                                                        {item.id ===
                                                                            'lead-time' && (
                                                                            <Link
                                                                                href="/book-now"
                                                                                prefetch
                                                                                className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37]/70 transition-colors hover:text-[#d4af37]"
                                                                            >
                                                                                Check
                                                                                availability
                                                                                <span className="text-[#d4af37]/40">
                                                                                    →
                                                                                </span>
                                                                            </Link>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </CollapsibleContent>
                                                    )}
                                                </AnimatePresence>
                                            </Collapsible>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        ))}
                    </motion.div>
                </div>

              
            </div>
        </SectionWrapper>
    );
}