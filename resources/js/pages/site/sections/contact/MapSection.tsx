import { motion, useReducedMotion } from 'framer-motion';
import { MapPin, Compass, ArrowUpRight } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { SectionWrapper } from '@/components/SectionWrapper';

export function MapSection() {
    const prefersReducedMotion = useReducedMotion();
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] overflow-visible px-6 pb-28 lg:px-10 lg:pb-40">
            {/* Ambient glow behind map */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_60%)] blur-3xl"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.1)_0%,transparent_60%)] blur-3xl"
            />

            {/* Section label */}
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
                                  delay: 0.1,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                className="mb-8 flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/40 to-transparent" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Find Us
                    </span>
                </div>
                <Link
                    href="https://maps.google.com/?q=Park+St+Area+Kolkata+West+Bengal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group hidden items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-stone-500 transition-colors duration-500 hover:text-[#d4af37]/80 sm:flex"
                >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="h-3 w-3 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </motion.div>

            {/* Map Container */}
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
                                  delay: 0.2,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                className="group relative"
            >
                {/* Map card glow effect */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-1000 group-hover:opacity-100"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#0a0a0a] shadow-[0_80px_140px_-80px_rgb(0_0_0_/_0.6)] transition-all duration-700 group-hover:border-[#d4af37]/15 group-hover:shadow-[0_80px_160px_-80px_rgb(212_175_55_/_0.15),0_80px_140px_-80px_rgb(0_0_0_/_0.5)]">
                    {/* Map toolbar overlay */}
                    <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between border-b border-white/[0.04] bg-[#0a0a0a]/80 px-6 py-3.5 backdrop-blur-md">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#d4af37]/20 bg-[#d4af37]/8">
                                <MapPin className="h-4 w-4 text-[#d4af37]/70" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400">
                                    Studio Location
                                </p>
                                <p className="text-[11px] text-stone-300">
                                    Park Street Area, Kolkata
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#d4af37]/40 sm:block" />
                            <span className="text-[9px] uppercase tracking-[0.3em] text-stone-500">
                                West Bengal, India
                            </span>
                        </div>
                    </div>

                    {/* Dark map iframe */}
                    <div className="relative pt-14">
                        <iframe
                            title="WOW Events Kolkata — studio location"
                            className="h-[min(60vh,520px)] w-full"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58944.57978743736!2d88.3486027!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae939d%3A0xc52e750b721e0466!2sPark%20St%20Area%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                            style={{
                                border: 0,
                                filter: 'invert(0.92) hue-rotate(180deg) brightness(0.85) contrast(0.9) saturate(0.3)',
                            }}
                        />

                        {/* Map overlay gradient for depth */}
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    </div>

                    {/* Bottom accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]">
                        <div className="h-full w-0 bg-gradient-to-r from-[#d4af37]/50 via-[#d4af37]/30 to-transparent transition-all duration-1000 group-hover:w-full" />
                    </div>

                    {/* Corner accents */}
                    <div
                        aria-hidden="true"
                        className="absolute right-3 top-16 h-6 w-6 border-r border-t border-[#d4af37]/0 transition-all duration-700 group-hover:border-[#d4af37]/15 sm:right-4 sm:top-[4.25rem]"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute bottom-3 left-3 h-6 w-6 border-b border-l border-[#d4af37]/0 transition-all duration-700 group-hover:border-[#d4af37]/15 sm:bottom-4 sm:left-4"
                    />
                </div>
            </motion.div>

            {/* Bottom info + CTA */}
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
                                  delay: 0.5,
                                  ease: easeLuxury,
                              },
                          }
                }
                viewport={{ once: true }}
                className="mt-8 flex flex-col items-center gap-5 sm:flex-row sm:justify-between"
            >
                <div className="flex items-center gap-2 text-center sm:text-left">
                    <Compass className="h-3.5 w-3.5 text-[#d4af37]/30" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
                        Visits by appointment only — we prepare for your arrival
                    </p>
                </div>
                <Link
                    href="/contact"
                    prefetch
                    className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 transition-colors duration-500 hover:text-[#d4af37]"
                >
                    <span>Schedule a visit</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </motion.div>

            {/* Bottom decorative divider */}
            <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{
                    opacity: 1,
                    scaleX: 1,
                    transition: {
                        duration: 1.2,
                        delay: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    },
                }}
                viewport={{ once: true }}
                className="mx-auto mt-12 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#d4af37]/15 to-transparent"
            />
        </SectionWrapper>
    );
}