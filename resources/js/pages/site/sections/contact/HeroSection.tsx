import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SITE_CONTACT } from '@/constants/site-contact';

export function HeroSection() {
    const prefersReducedMotion = useReducedMotion();
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    const highlights = [
        { value: '48h', label: 'Proposal turnaround' },
        { value: '1:1', label: 'Dedicated curator' },
        { value: '100%', label: 'Tailored concepts' },
    ];

    return (
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2940&auto=format&fit=crop"
                    alt=""
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/92 via-[#080808]/60 to-[#080808]/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            </div>

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
            >
                <div className="absolute -left-24 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)] blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-20 pt-28 lg:px-10 lg:pb-28 lg:pt-36">
                <div className="max-w-2xl">
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, x: -16 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                          duration: 0.6,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mb-6 flex items-center gap-3"
                    >
                        <span className="h-px w-10 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/80">
                            Contact WOW Events
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 24 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          delay: 0.1,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="font-display text-4xl leading-[1.15] tracking-tight text-stone-100 md:text-5xl lg:text-6xl"
                    >
                        Let&apos;s plan your{' '}
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                            next event
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 16 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.7,
                                          delay: 0.25,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-6 max-w-lg font-sans text-base leading-relaxed text-stone-400 md:text-lg"
                    >
                        Reach our Kolkata studio by phone, WhatsApp, or email.
                        Every inquiry receives a thoughtful, custom response —
                        never a template.
                    </motion.p>

                    {/* Primary contact strip — readable sans-serif */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 16 }
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
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-white/[0.06] bg-[#0a0a0a]/60 px-5 py-4 backdrop-blur-sm sm:gap-x-8 sm:px-6"
                    >
                        <a
                            href={`tel:${SITE_CONTACT.phoneE164}`}
                            className="font-sans text-[15px] tabular-nums text-stone-200 transition-colors hover:text-[#d4af37] sm:text-base"
                        >
                            +91 {SITE_CONTACT.phoneDisplay}
                        </a>
                        <span
                            aria-hidden="true"
                            className="hidden h-4 w-px bg-white/10 sm:block"
                        />
                        <a
                            href={`mailto:${SITE_CONTACT.email}`}
                            className="font-sans text-[15px] text-stone-200 transition-colors hover:text-[#d4af37] sm:text-base"
                        >
                            {SITE_CONTACT.email}
                        </a>
                    </motion.div>

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
                                          duration: 0.7,
                                          delay: 0.45,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-10 flex flex-wrap gap-8 sm:gap-12"
                    >
                        {highlights.map((stat) => (
                            <div key={stat.label}>
                                <span className="block font-display text-2xl text-stone-100 md:text-3xl">
                                    {stat.value}
                                </span>
                                <span className="mt-1 block font-sans text-[12px] text-stone-500">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        aria-hidden="true"
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 1, transition: { delay: 0.6 } }
                        }
                        viewport={{ once: true }}
                        className="mt-12 flex items-center gap-2 text-stone-600"
                    >
                        <span className="font-sans text-[11px] uppercase tracking-[0.25em]">
                            Details & form below
                        </span>
                        <ArrowRight className="h-3 w-3 text-[#d4af37]/30" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
