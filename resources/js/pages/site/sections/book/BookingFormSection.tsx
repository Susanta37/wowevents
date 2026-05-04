import { useForm, usePage } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { siteFocusInputClass } from '@/pages/site/sections/shared/site-focus-input';

const eventTypes = [
    'Wedding weekend',
    'Corporate milestone',
    'Private celebration',
    'Destination residency',
];

export function BookingFormSection() {
    const { flash } = usePage<{ flash?: { success?: string | null } }>().props;
    const prefersReducedMotion = useReducedMotion();

    const form = useForm({
        name: '',
        email: '',
        event_type: '',
        event_date: '',
        location: '',
        budget: '',
        notes: '',
    });

    return (
        <SectionWrapper className="mx-auto max-w-[780px] px-6 pb-36 pt-14 lg:px-10 lg:pb-44">
            <div className="rounded-[2rem] border border-[#d4af37]/26 bg-linear-to-br from-[#17120e]/52 via-[#0a0a0a] to-[#080606] px-10 py-16 shadow-[0_0_120px_-54px_rgb(212_175_55_/_0.52)] lg:px-16 lg:py-20">
                {flash?.success && (
                    <motion.p
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          duration: 0.52,
                                          ease: [0.42, 0, 0.58, 1],
                                      },
                                  }
                        }
                        className="mb-10 rounded-xl border border-[#d4af37]/45 bg-[#d4af37]/13 px-4 py-5 text-center text-[15px] leading-relaxed text-[#f7f2e9]"
                        role="status"
                    >
                        {flash.success}
                    </motion.p>
                )}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        form.post('/book-now', {
                            preserveScroll: true,
                            onSuccess: () => form.reset(),
                        });
                    }}
                    className="space-y-9"
                    noValidate
                >
                    <div className="grid gap-9 md:grid-cols-2">
                        <div className="md:col-span-2">
                            <label
                                htmlFor="bk-name"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Name
                            </label>
                            <motion.input
                                id="bk-name"
                                autoComplete="name"
                                required
                                className={`mt-3 w-full ${siteFocusInputClass}`}
                                value={form.data.name}
                                onChange={(e) => form.setData('name', e.target.value)}
                                aria-invalid={!!form.errors.name}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.name && (
                                <p className="mt-3 text-[13px] text-red-400/90">{form.errors.name}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="bk-email"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Email
                            </label>
                            <motion.input
                                id="bk-email"
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
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.email && (
                                <p className="mt-3 text-[13px] text-red-400/90">{form.errors.email}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="bk-type"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Event type
                            </label>
                            <motion.select
                                id="bk-type"
                                required
                                className={`mt-3 w-full ${siteFocusInputClass}`}
                                value={form.data.event_type}
                                onChange={(e) =>
                                    form.setData('event_type', e.target.value)
                                }
                                aria-invalid={!!form.errors.event_type}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            >
                                <option value="">Select one</option>
                                {eventTypes.map((t) => (
                                    <option key={t} value={t}>
                                        {t}
                                    </option>
                                ))}
                            </motion.select>
                            {form.errors.event_type && (
                                <p className="mt-3 text-[13px] text-red-400/90">
                                    {form.errors.event_type}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="bk-date"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Preferred date
                            </label>
                            <motion.input
                                id="bk-date"
                                type="date"
                                className={`mt-3 w-full ${siteFocusInputClass}`}
                                value={form.data.event_date}
                                onChange={(e) =>
                                    form.setData('event_date', e.target.value)
                                }
                                aria-invalid={!!form.errors.event_date}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.event_date && (
                                <p className="mt-3 text-[13px] text-red-400/90">
                                    {form.errors.event_date}
                                </p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="bk-budget"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Investment range
                            </label>
                            <motion.input
                                id="bk-budget"
                                placeholder="e.g. $75k – $120k"
                                className={`mt-3 w-full ${siteFocusInputClass}`}
                                value={form.data.budget}
                                onChange={(e) => form.setData('budget', e.target.value)}
                                aria-invalid={!!form.errors.budget}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.budget && (
                                <p className="mt-3 text-[13px] text-red-400/90">{form.errors.budget}</p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="bk-loc"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Location or venue
                            </label>
                            <motion.input
                                id="bk-loc"
                                placeholder="City, property, or “to be advised”"
                                className={`mt-3 w-full ${siteFocusInputClass}`}
                                value={form.data.location}
                                onChange={(e) => form.setData('location', e.target.value)}
                                aria-invalid={!!form.errors.location}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.location && (
                                <p className="mt-3 text-[13px] text-red-400/90">
                                    {form.errors.location}
                                </p>
                            )}
                        </div>
                        <div className="md:col-span-2">
                            <label
                                htmlFor="bk-notes"
                                className="text-[11px] uppercase tracking-[0.34em] text-stone-500"
                            >
                                Notes
                            </label>
                            <motion.textarea
                                id="bk-notes"
                                rows={5}
                                placeholder="Whisper the dream in your own words."
                                className={`mt-3 w-full resize-y ${siteFocusInputClass}`}
                                value={form.data.notes}
                                onChange={(e) => form.setData('notes', e.target.value)}
                                aria-invalid={!!form.errors.notes}
                                whileFocus={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.008, transition: { duration: 0.42 } }
                                }
                            />
                            {form.errors.notes && (
                                <p className="mt-3 text-[13px] text-red-400/90">{form.errors.notes}</p>
                            )}
                        </div>
                    </div>
                    <motion.button
                        type="submit"
                        disabled={form.processing}
                        whileHover={
                            prefersReducedMotion
                                ? undefined
                                : { scale: form.processing ? 1 : 1.018, transition: { duration: 0.55 } }
                        }
                        whileTap={
                            prefersReducedMotion ? undefined : { scale: form.processing ? 1 : 0.992 }
                        }
                        className="relative w-full overflow-hidden rounded-2xl border border-[#d4af37]/62 bg-linear-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] py-5 text-[12px] font-semibold uppercase tracking-[0.32em] text-[#0a0a0a] shadow-[0_0_64px_-2px_rgb(212_175_55_/_0.74)] transition-shadow duration-[0.6s] hover:brightness-105 hover:shadow-[0_0_88px_-2px_rgb(212_175_55_/_0.76)] disabled:pointer-events-none disabled:opacity-60"
                    >
                        {form.processing ? 'Submitting…' : 'Request private consultation'}
                    </motion.button>
                </form>
            </div>
        </SectionWrapper>
    );
}
