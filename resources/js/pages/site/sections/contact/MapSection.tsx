import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SITE_CONTACT } from '@/constants/site-contact';

const mapsQuery = encodeURIComponent(SITE_CONTACT.addressShort);
const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&hl=en&z=15&output=embed`;

export function MapSection() {
    const prefersReducedMotion = useReducedMotion();
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pb-28 lg:px-10 lg:pb-40">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-3xl"
            />

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
                              transition: { duration: 0.6, ease: easeLuxury },
                          }
                }
                viewport={{ once: true }}
                className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            >
                <div>
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                            Studio location
                        </span>
                    </div>
                    <p className="font-sans text-[15px] leading-relaxed text-stone-300 sm:text-base">
                        {SITE_CONTACT.addressShort}
                    </p>
                </div>
                <a
                    href={`https://maps.google.com/?q=${mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-sans text-[13px] text-stone-400 transition-colors hover:text-[#d4af37]"
                >
                    Open in Google Maps
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
            </motion.div>

            <motion.div
                initial={
                    prefersReducedMotion
                        ? undefined
                        : { opacity: 0, y: 28 }
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
                className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0a0a] shadow-[0_40px_100px_-50px_rgb(0_0_0_/_0.7)]"
            >
                <div className="flex items-center gap-3 border-b border-white/[0.05] bg-[#0c0c0c] px-5 py-4 sm:px-6">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d4af37]/15 bg-[#d4af37]/5">
                        <MapPin className="h-4 w-4 text-[#d4af37]/75" />
                    </div>
                    <div>
                        <p className="font-sans text-[13px] font-medium text-stone-200">
                            WOW Events Studio
                        </p>
                        <p className="font-sans text-[12px] text-stone-500">
                            Kolkata, West Bengal
                        </p>
                    </div>
                </div>

                <iframe
                    title="WOW Events Kolkata — studio location"
                    className="h-[min(55vh,480px)] w-full"
                    loading="lazy"
                    src={mapsEmbedSrc}
                    style={{
                        border: 0,
                        filter: 'invert(0.92) hue-rotate(180deg) brightness(0.88) contrast(0.9) saturate(0.25)',
                    }}
                />

                <div className="border-t border-white/[0.05] bg-[#0c0c0c] px-5 py-4 sm:px-6">
                    <p className="font-sans text-[13px] leading-relaxed text-stone-500">
                        Studio visits are by appointment only.{' '}
                        <Link
                            href="/contact"
                            prefetch
                            className="text-[#d4af37]/80 underline-offset-2 transition-colors hover:text-[#d4af37] hover:underline"
                        >
                            Contact us
                        </Link>{' '}
                        to schedule.
                    </p>
                </div>
            </motion.div>

            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: { duration: 1, delay: 0.4, ease: easeLuxury },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-12 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/12 to-transparent"
            />
        </SectionWrapper>
    );
}
