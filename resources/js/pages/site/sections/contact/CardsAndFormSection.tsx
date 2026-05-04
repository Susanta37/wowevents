import { useForm, usePage } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { siteFocusInputClass } from '@/pages/site/sections/shared/site-focus-input';

const cards = [
    {
        icon: MapPin,
        label: 'Studio',
        lines: ['12 Park Street', 'Kolkata 700016'],
    },
    {
        icon: Mail,
        label: 'Post',
        lines: ['hello@wowevents.studio'],
    },
    {
        icon: Phone,
        label: 'Signal',
        lines: ['By appointment'],
    },
];

export function CardsAndFormSection() {
    const { flash } = usePage<{ flash?: { success?: string | null } }>().props;
    const prefersReducedMotion = useReducedMotion();

    const form = useForm({
        name: '',
        email: '',
        message: '',
    });

    return (
        <SectionWrapper className="mx-auto grid max-w-[1400px] gap-16 px-6 pt-14 pb-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-10 lg:pt-16 lg:pb-24">
            <div className="space-y-10">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <motion.div
                            key={card.label}
                            className="flex gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8"
                            whileHover={
                                prefersReducedMotion
                                    ? undefined
                                    : { y: -3, transition: { duration: 0.5 } }
                            }
                        >
                            <div className="rounded-xl border border-[#d4af37]/35 bg-[#d4af37]/10 p-4 text-[#d4af37]">
                                <Icon className="size-6" aria-hidden />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.32em] text-stone-500">
                                    {card.label}
                                </p>
                                {card.lines.map((line) => (
                                    <p
                                        key={line}
                                        className="mt-3 font-display text-lg text-stone-100"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            <div className="rounded-[1.75rem] border border-[#d4af37]/22 bg-linear-to-br from-[#16110d]/40 via-[#0a0a0a] to-[#0f0d0d] p-10 shadow-[0_0_100px_-50px_rgb(212_175_55_/_0.42)] lg:p-12">
                {flash?.success && (
                    <motion.p
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: -8 }}
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.5,
                                          ease: [0.42, 0, 0.58, 1],
                                      },
                                  }
                        }
                        className="mb-8 rounded-xl border border-[#d4af37]/40 bg-[#d4af37]/15 px-4 py-4 text-[14px] text-[#efe6d8]"
                        role="status"
                    >
                        {flash.success}
                    </motion.p>
                )}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.post('/contact', {
                            preserveScroll: true,
                            onSuccess: () => form.reset(),
                        });
                    }}
                    className="space-y-10"
                    noValidate
                >
                    <div>
                        <label
                            htmlFor="contact-name"
                            className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                        >
                            Name
                        </label>
                        <motion.input
                            id="contact-name"
                            autoComplete="name"
                            required
                            className={`mt-3 w-full ${siteFocusInputClass}`}
                            value={form.data.name}
                            onChange={(e) => form.setData('name', e.target.value)}
                            aria-invalid={!!form.errors.name}
                            whileFocus={
                                prefersReducedMotion
                                    ? undefined
                                    : { scale: 1.005, transition: { duration: 0.45 } }
                            }
                        />
                        {form.errors.name && (
                            <p className="mt-3 text-[13px] text-red-400/90">{form.errors.name}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="contact-email"
                            className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                        >
                            Email
                        </label>
                        <motion.input
                            id="contact-email"
                            type="email"
                            autoComplete="email"
                            required
                            className={`mt-3 w-full ${siteFocusInputClass}`}
                            value={form.data.email}
                            onChange={(e) => form.setData('email', e.target.value)}
                            aria-invalid={!!form.errors.email}
                            whileFocus={
                                prefersReducedMotion
                                    ? undefined
                                    : { scale: 1.005, transition: { duration: 0.45 } }
                            }
                        />
                        {form.errors.email && (
                            <p className="mt-3 text-[13px] text-red-400/90">{form.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="contact-message"
                            className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                        >
                            Message
                        </label>
                        <motion.textarea
                            id="contact-message"
                            rows={6}
                            required
                            className={`mt-3 w-full resize-y ${siteFocusInputClass}`}
                            value={form.data.message}
                            onChange={(e) => form.setData('message', e.target.value)}
                            aria-invalid={!!form.errors.message}
                            whileFocus={
                                prefersReducedMotion
                                    ? undefined
                                    : { scale: 1.005, transition: { duration: 0.45 } }
                            }
                        />
                        {form.errors.message && (
                            <p className="mt-3 text-[13px] text-red-400/90">{form.errors.message}</p>
                        )}
                    </div>
                    <motion.button
                        type="submit"
                        disabled={form.processing}
                        whileHover={
                            prefersReducedMotion
                                ? undefined
                                : { scale: form.processing ? 1 : 1.015, transition: { duration: 0.5 } }
                        }
                        whileTap={
                            prefersReducedMotion ? undefined : { scale: form.processing ? 1 : 0.995 }
                        }
                        className="w-full rounded-2xl border border-[#d4af37]/62 bg-linear-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] py-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] shadow-[0_0_48px_-4px_rgb(212_175_55_/_0.62)] transition-shadow duration-[0.55s] hover:brightness-105 disabled:pointer-events-none disabled:opacity-60"
                    >
                        {form.processing ? 'Sending…' : 'Submit inquiry'}
                    </motion.button>
                </form>
            </div>
        </SectionWrapper>
    );
}
