import { useForm, usePage } from '@inertiajs/react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    Sparkles,
    ArrowUpRight,
} from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SITE_CONTACT, whatsappChatUrl } from '@/constants/site-contact';
import { siteFocusInputClass } from '@/pages/site/sections/shared/site-focus-input';

const easeLuxury = [0.25, 0.46, 0.45, 0.94];

/** Readable body text for addresses, emails, and phone numbers */
const contactValueClass =
    'font-sans text-[15px] leading-relaxed text-stone-200 transition-colors duration-300 hover:text-white sm:text-base';

const contactLinkClass =
    'font-sans text-[15px] leading-relaxed text-stone-200 tabular-nums tracking-normal transition-colors duration-300 hover:text-[#d4af37] sm:text-base';

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
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.12)_0%,transparent_60%)] blur-3xl"
            />

            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.15fr] lg:gap-16 xl:gap-20">
                {/* Left — contact details */}
                <div>
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
                        className="mb-8 flex items-center gap-3"
                    >
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                            Contact details
                        </span>
                    </motion.div>

                    <motion.div
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
                                          delay: 0.2,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c0c]/80 backdrop-blur-sm"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent"
                        />

                        {/* Quick actions */}
                        <div className="grid grid-cols-3 gap-px border-b border-white/[0.06] bg-white/[0.04]">
                            <a
                                href={`tel:${SITE_CONTACT.phoneE164}`}
                                className="group flex flex-col items-center gap-2 bg-[#0c0c0c] px-4 py-5 text-center transition-colors duration-300 hover:bg-[#111111]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/8 text-[#d4af37] transition-colors group-hover:border-[#d4af37]/35 group-hover:bg-[#d4af37]/12">
                                    <Phone className="h-4 w-4" />
                                </span>
                                <span className="font-sans text-[11px] text-stone-400 group-hover:text-stone-300">
                                    Call
                                </span>
                            </a>
                            <a
                                href={whatsappChatUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex flex-col items-center gap-2 bg-[#0c0c0c] px-4 py-5 text-center transition-colors duration-300 hover:bg-[#111111]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/8 text-[#d4af37] transition-colors group-hover:border-[#d4af37]/35 group-hover:bg-[#d4af37]/12">
                                    <MessageCircle className="h-4 w-4" />
                                </span>
                                <span className="font-sans text-[11px] text-stone-400 group-hover:text-stone-300">
                                    WhatsApp
                                </span>
                            </a>
                            <a
                                href={`mailto:${SITE_CONTACT.email}`}
                                className="group flex flex-col items-center gap-2 bg-[#0c0c0c] px-4 py-5 text-center transition-colors duration-300 hover:bg-[#111111]"
                            >
                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/8 text-[#d4af37] transition-colors group-hover:border-[#d4af37]/35 group-hover:bg-[#d4af37]/12">
                                    <Mail className="h-4 w-4" />
                                </span>
                                <span className="font-sans text-[11px] text-stone-400 group-hover:text-stone-300">
                                    Email
                                </span>
                            </a>
                        </div>

                        <div className="divide-y divide-white/[0.05]">
                            {/* Address */}
                            <div className="flex gap-5 px-6 py-6 sm:px-8 sm:py-7">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5 text-[#d4af37]/80">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                                        Studio address
                                    </p>
                                    <p className={`mt-2 ${contactValueClass}`}>
                                        3/19, Vidyasagar Colony
                                    </p>
                                    <p className={contactValueClass}>
                                        Kolkata, West Bengal 700047
                                    </p>
                                    <p className="mt-2 font-sans text-[13px] text-stone-500">
                                        Visits by appointment
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex gap-5 px-6 py-6 sm:px-8 sm:py-7">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5 text-[#d4af37]/80">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${SITE_CONTACT.email}`}
                                        className={`mt-2 inline-block break-all ${contactLinkClass}`}
                                    >
                                        {SITE_CONTACT.email}
                                    </a>
                                    <p className="mt-2 font-sans text-[13px] text-stone-500">
                                        We reply within 4 hours on business days
                                    </p>
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="flex gap-5 px-6 py-6 sm:px-8 sm:py-7">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5 text-[#d4af37]/80">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                                        Mobile & WhatsApp
                                    </p>
                                    <a
                                        href={`tel:${SITE_CONTACT.phoneE164}`}
                                        className={`mt-2 block ${contactLinkClass}`}
                                    >
                                        +91 {SITE_CONTACT.phoneDisplay}
                                    </a>
                                    <p className="mt-2 font-sans text-[13px] text-stone-500">
                                        Mon–Sat, 10:00 AM – 7:00 PM IST
                                    </p>
                                </div>
                            </div>

                            {/* Company lines */}
                            <div className="flex gap-5 px-6 py-6 sm:px-8 sm:py-7">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5 text-[#d4af37]/80">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.28em] text-stone-500">
                                        Office lines
                                    </p>
                                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2.5">
                                        {SITE_CONTACT.companyNumbers.map(
                                            (number) => (
                                                <li key={number.e164}>
                                                    <a
                                                        href={`tel:${number.e164}`}
                                                        className={contactLinkClass}
                                                    >
                                                        {number.display}
                                                    </a>
                                                </li>
                                            ),
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right — form */}
                <div>
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
                        className="mb-6 lg:mb-8"
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                                Send a message
                            </span>
                            <span className="h-px w-8 bg-gradient-to-l from-[#d4af37]/50 to-transparent" />
                        </div>
                        <p className="mt-4 max-w-md font-sans text-[15px] leading-relaxed text-stone-400 sm:text-base">
                            Share your event brief and our team will respond with
                            a tailored proposal within 48 hours.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, y: 32 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.8,
                                          delay: 0.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="relative rounded-2xl border border-white/[0.07] bg-[#0a0a0a] p-7 shadow-[0_24px_80px_-40px_rgb(0_0_0_/_0.8)] sm:p-9"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
                        />

                        <AnimatePresence>
                            {flash?.success && (
                                <motion.div
                                    initial={
                                        prefersReducedMotion
                                            ? undefined
                                            : { opacity: 0, y: -12 }
                                    }
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="mb-7 flex items-start gap-3 rounded-xl border border-[#d4af37]/30 bg-[#d4af37]/8 px-5 py-4"
                                    role="status"
                                >
                                    <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]" />
                                    <div>
                                        <p className="font-sans text-sm font-medium text-stone-100">
                                            Message received
                                        </p>
                                        <p className="mt-1 font-sans text-[13px] text-stone-400">
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
                            className="space-y-7"
                            noValidate
                        >
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="font-sans text-[13px] font-medium text-stone-300"
                                >
                                    Full name
                                </label>
                                <input
                                    id="contact-name"
                                    autoComplete="name"
                                    required
                                    className={`mt-2.5 w-full ${siteFocusInputClass}`}
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData('name', e.target.value)
                                    }
                                    placeholder="Your name"
                                    aria-invalid={!!form.errors.name}
                                />
                                {form.errors.name && (
                                    <p className="mt-2 font-sans text-[13px] text-red-400/90">
                                        {form.errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className="font-sans text-[13px] font-medium text-stone-300"
                                >
                                    Email address
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className={`mt-2.5 w-full ${siteFocusInputClass}`}
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData('email', e.target.value)
                                    }
                                    placeholder="you@example.com"
                                    aria-invalid={!!form.errors.email}
                                />
                                {form.errors.email && (
                                    <p className="mt-2 font-sans text-[13px] text-red-400/90">
                                        {form.errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="font-sans text-[13px] font-medium text-stone-300"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    required
                                    className={`mt-2.5 w-full resize-y ${siteFocusInputClass}`}
                                    value={form.data.message}
                                    onChange={(e) =>
                                        form.setData(
                                            'message',
                                            e.target.value,
                                        )
                                    }
                                    placeholder="Tell us about your event — date, venue, guest count, and vision."
                                    aria-invalid={!!form.errors.message}
                                />
                                {form.errors.message && (
                                    <p className="mt-2 font-sans text-[13px] text-red-400/90">
                                        {form.errors.message}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={form.processing}
                                className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#d4af37]/50 bg-[#d4af37] px-6 py-4 font-sans text-sm font-semibold text-[#0a0a0a] shadow-[0_0_40px_-12px_rgb(212_175_55_/_0.45)] transition-all duration-300 hover:border-[#d4af37]/70 hover:brightness-105 disabled:pointer-events-none disabled:opacity-50"
                            >
                                {form.processing ? (
                                    <>
                                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a0a]/25 border-t-[#0a0a0a]" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4" />
                                        Submit inquiry
                                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 1.2, delay: 0.6, ease: easeLuxury },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-16 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
            />
        </SectionWrapper>
    );
}
