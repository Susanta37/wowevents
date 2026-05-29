import { useForm, usePage } from '@inertiajs/react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Sparkles, Clock, ArrowUpRight } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SITE_CONTACT } from '@/constants/site-contact';
import { siteFocusInputClass } from '@/pages/site/sections/shared/site-focus-input';

const cards = [
    {
        icon: MapPin,
        label: 'Studio',
        lines: ['3/19, Vidyasagar Colony', 'Kolkata, West Bengal 700047'],
        accent: 'Visit our atelier',
        gradient: 'from-[#d4af37]/20 to-[#d4af37]/5',
    },
    {
        icon: Mail,
        label: 'Correspondence',
        lines: [SITE_CONTACT.email],
        accent: 'Response within 4 hours',
        gradient: 'from-[#c9a830]/20 to-[#c9a830]/5',
    },
    {
        icon: Phone,
        label: 'Direct Signal',
        lines: [SITE_CONTACT.phoneDisplay],
        accent: 'Mon–Sat, 10:00–19:00 IST',
        gradient: 'from-[#b8942e]/20 to-[#b8942e]/5',
    },
];

const easeLuxury = [0.25, 0.46, 0.45, 0.94];

export function CardsAndFormSection() {
    const { flash } = usePage<{ flash?: { success?: string | null } }>().props;
    const prefersReducedMotion = useReducedMotion();

    const form = useForm({
        name: '',
        email: '',
        message: '',
    });

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-36">
            {/* Ambient glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.12)_0%,transparent_60%)] blur-3xl"
            />

            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
                {/* Left Column - Contact Cards & Map */}
                <div className="space-y-8">
                    {/* Section label */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, x: -20 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                          duration: 0.7,
                                          delay: 0.1,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-2"
                    >
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                            Get in touch
                        </span>
                    </motion.div>

                    {/* Contact Cards */}
                    {cards.map((card, idx) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={card.label}
                                initial={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 0, y: 30 }
                                }
                                whileInView={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              opacity: 1,
                                              y: 0,
                                              transition: {
                                                  duration: 0.7,
                                                  delay: idx * 0.1 + 0.3,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                              y: -4,
                                              transition: {
                                                  duration: 0.5,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                className="group relative"
                            >
                                {/* Card hover glow */}
                                <div
                                    aria-hidden="true"
                                    className={`pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br ${card.gradient} blur-xl opacity-0 transition-all duration-700 group-hover:opacity-100`}
                                />

                                <div className="relative flex gap-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-7 backdrop-blur-sm transition-all duration-700 group-hover:border-[#d4af37]/20 group-hover:bg-white/[0.03] group-hover:shadow-[0_20px_60px_-30px_rgb(0_0_0_/_0.4)] lg:p-8">
                                    {/* Icon */}
                                    <motion.div
                                        animate={
                                            idx === 0
                                                ? { rotate: [0, -5, 5, 0] }
                                                : {}
                                        }
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.2 + 0.5,
                                            ease: 'easeInOut',
                                        }}
                                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/8 text-[#d4af37] transition-all duration-500 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/12 group-hover:shadow-[0_0_25px_-8px_rgb(212_175_55_/_0.2)]"
                                    >
                                        <Icon className="h-5 w-5" aria-hidden="true" />
                                    </motion.div>

                                    <div className="flex-1">
                                        <p className="text-[10px] uppercase tracking-[0.32em] text-stone-500 transition-colors duration-500 group-hover:text-stone-400">
                                            {card.label}
                                        </p>
                                        {card.lines.map((line) => (
                                            <p
                                                key={line}
                                                className="mt-2 font-display text-lg leading-snug text-stone-100 transition-colors duration-500 group-hover:text-white"
                                            >
                                                {line}
                                            </p>
                                        ))}
                                        {/* Accent text */}
                                        <div className="mt-3 flex items-center gap-1.5">
                                            <Clock className="h-3 w-3 text-[#d4af37]/30" />
                                            <p className="text-[10px] tracking-[0.2em] text-stone-600 transition-colors duration-500 group-hover:text-stone-500">
                                                {card.accent}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Corner accent */}
                                    <div
                                        aria-hidden="true"
                                        className="absolute right-3 top-3 h-5 w-5 border-r border-t border-transparent transition-all duration-700 group-hover:border-[#d4af37]/20"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}

                 
                </div>

                {/* Right Column - Form */}
                <div>
                    {/* Form section label */}
                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, x: 20 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      x: 0,
                                      transition: {
                                          duration: 0.7,
                                          delay: 0.2,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mb-8 flex items-center gap-3 lg:mb-10"
                    >
                        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                            Send a message
                        </span>
                        <span className="h-px w-8 bg-gradient-to-l from-[#d4af37]/50 to-transparent" />
                    </motion.div>

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
                                          delay: 0.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="group relative rounded-[2rem] border border-[#d4af37]/15 bg-gradient-to-br from-[#16110d]/30 via-[#0a0a0a] to-[#0f0d0d] p-8 shadow-[0_0_120px_-55px_rgb(212_175_55_/_0.45)] backdrop-blur-sm transition-all duration-700 hover:border-[#d4af37]/25 hover:shadow-[0_0_150px_-55px_rgb(212_175_55_/_0.55)] lg:p-10"
                    >
                        {/* Form ambient glow */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-1 rounded-[2rem] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_60%)] opacity-0 blur-xl transition-opacity duration-1000 group-hover:opacity-100"
                        />

                        {/* Corner accents */}
                        <div
                            aria-hidden="true"
                            className="absolute right-4 top-4 h-8 w-8 border-r border-t border-[#d4af37]/15 transition-colors duration-700 group-hover:border-[#d4af37]/25"
                        />
                        <div
                            aria-hidden="true"
                            className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-[#d4af37]/15 transition-colors duration-700 group-hover:border-[#d4af37]/25"
                        />

                        {/* Success Message */}
                        <AnimatePresence>
                            {flash?.success && (
                                <motion.div
                                    initial={
                                        prefersReducedMotion
                                            ? undefined
                                            : { opacity: 0, y: -15, height: 0 }
                                    }
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        height: 'auto',
                                        transition: {
                                            duration: 0.6,
                                            ease: easeLuxury,
                                        },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        y: -10,
                                        height: 0,
                                        transition: {
                                            duration: 0.4,
                                        },
                                    }}
                                    className="mb-8 flex items-start gap-3 rounded-xl border border-[#d4af37]/35 bg-[#d4af37]/10 px-5 py-4 text-sm text-[#efe6d8]"
                                    role="status"
                                >
                                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                    <div>
                                        <p className="font-medium">
                                            Message received
                                        </p>
                                        <p className="mt-1 text-xs text-stone-400">
                                            {flash.success}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                form.post('/contact', {
                                    preserveScroll: true,
                                    onSuccess: () => form.reset(),
                                });
                            }}
                            className="relative space-y-8 lg:space-y-10"
                            noValidate
                        >
                            {/* Name Field */}
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
                                                  duration: 0.6,
                                                  delay: 0.45,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                            >
                                <label
                                    htmlFor="contact-name"
                                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-stone-500"
                                >
                                    <span className="h-1 w-1 rounded-full bg-[#d4af37]/30" />
                                    Full Name
                                </label>
                                <motion.input
                                    id="contact-name"
                                    autoComplete="name"
                                    required
                                    className={`mt-3 w-full ${siteFocusInputClass}`}
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData('name', e.target.value)
                                    }
                                    placeholder="Your name"
                                    aria-invalid={!!form.errors.name}
                                    whileFocus={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  scale: 1.005,
                                                  transition: {
                                                      duration: 0.4,
                                                  },
                                              }
                                    }
                                />
                                {form.errors.name && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-[12px] text-red-400/80"
                                    >
                                        {form.errors.name}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Email Field */}
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
                                                  duration: 0.6,
                                                  delay: 0.55,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                            >
                                <label
                                    htmlFor="contact-email"
                                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-stone-500"
                                >
                                    <span className="h-1 w-1 rounded-full bg-[#d4af37]/30" />
                                    Email Address
                                </label>
                                <motion.input
                                    id="contact-email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`mt-3 w-full ${siteFocusInputClass}`}
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData('email', e.target.value)
                                    }
                                    placeholder="you@example.com"
                                    aria-invalid={!!form.errors.email}
                                    whileFocus={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  scale: 1.005,
                                                  transition: {
                                                      duration: 0.4,
                                                  },
                                              }
                                    }
                                />
                                {form.errors.email && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-[12px] text-red-400/80"
                                    >
                                        {form.errors.email}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Message Field */}
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
                                                  duration: 0.6,
                                                  delay: 0.65,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                            >
                                <label
                                    htmlFor="contact-message"
                                    className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-stone-500"
                                >
                                    <span className="h-1 w-1 rounded-full bg-[#d4af37]/30" />
                                    Your Message
                                </label>
                                <motion.textarea
                                    id="contact-message"
                                    rows={5}
                                    required
                                    className={`mt-3 w-full resize-y ${siteFocusInputClass}`}
                                    value={form.data.message}
                                    onChange={(e) =>
                                        form.setData(
                                            'message',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Tell us about your vision..."
                                    aria-invalid={!!form.errors.message}
                                    whileFocus={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  scale: 1.005,
                                                  transition: {
                                                      duration: 0.4,
                                                  },
                                              }
                                    }
                                />
                                {form.errors.message && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="mt-2 text-[12px] text-red-400/80"
                                    >
                                        {form.errors.message}
                                    </motion.p>
                                )}
                            </motion.div>

                            {/* Submit Button */}
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
                                                  duration: 0.6,
                                                  delay: 0.75,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                            >
                                <motion.button
                                    type="submit"
                                    disabled={form.processing}
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  scale: form.processing
                                                      ? 1
                                                      : 1.02,
                                                  transition: {
                                                      duration: 0.5,
                                                  },
                                              }
                                    }
                                    whileTap={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  scale: form.processing
                                                      ? 1
                                                      : 0.98,
                                              }
                                    }
                                    className="group relative w-full overflow-hidden rounded-2xl border border-[#d4af37]/55 bg-gradient-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] py-5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] shadow-[0_0_60px_-8px_rgb(212_175_55_/_0.5)] transition-all duration-500 hover:brightness-110 hover:shadow-[0_0_80px_-4px_rgb(212_175_55_/_0.6)] disabled:pointer-events-none disabled:opacity-50"
                                >
                                    {/* Button shimmer */}
                                    <motion.div
                                        aria-hidden="true"
                                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
                                        animate={{
                                            translateX: ['100%', '-200%'],
                                        }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                            delay: 1,
                                        }}
                                    />

                                    <span className="relative flex items-center justify-center gap-3">
                                        {form.processing ? (
                                            <>
                                                <motion.span
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        ease: 'linear',
                                                    }}
                                                    className="h-4 w-4 rounded-full border-2 border-[#0a0a0a]/30 border-t-[#0a0a0a]"
                                                />
                                                Sending…
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-4 w-4" />
                                                Submit Inquiry
                                                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </>
                                        )}
                                    </span>
                                </motion.button>
                            </motion.div>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Bottom decorative element */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: {
                        duration: 1.2,
                        delay: 0.9,
                        ease: easeLuxury,
                    },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-20 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
            />
        </SectionWrapper>
    );
}