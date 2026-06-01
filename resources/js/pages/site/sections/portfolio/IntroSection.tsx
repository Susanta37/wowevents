import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Eye, Sparkles, ArrowRight } from 'lucide-react';

type Props = {
    active: string;
};

export function IntroSection({ active }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const easeLuxury = [0.25, 0.46, 0.45, 0.94];

    const portfolioStats = [
        { value: '300+', label: 'Events Captured' },
        { value: '18', label: 'Cities Worldwide' },
        { value: '4', label: 'Signature Typologies' },
    ];

    return (
        <section className="relative overflow-hidden border-b border-white/[0.06] bg-[#080808]">
            {/* Background Image Layer - Right side visible, left fades to solid */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2936&auto=format&fit=crop"
                    alt="Luxury event atmosphere with warm lighting"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                />
                {/* Left-to-transparent gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/88 via-[#080808]/50 to-transparent" />
                {/* Bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent" />
                {/* Subtle warmth */}
                <div className="absolute inset-0 bg-[#080808]/5" />
            </div>

            {/* Ambient glow overlays */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1]"
            >
                {/* Gold glow near text area */}
                <div className="absolute -left-24 top-1/3 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_60%)] blur-3xl" />
                {/* Warm chocolate glow at bottom */}
                <div className="absolute -bottom-48 left-1/4 h-[500px] w-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.2)_0%,transparent_60%)] blur-3xl" />
                {/* Subtle gold accent on right */}
                <div className="absolute -right-16 top-1/2 h-[450px] w-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.07)_0%,transparent_60%)] blur-3xl" />
                {/* Secondary warm center glow */}
                <div className="absolute left-1/3 top-2/3 h-[350px] w-[550px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl" />
            </div>

            {/* Grid pattern over solid area */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[1] opacity-[0.009]"
                style={{
                    backgroundImage:
                        'radial-gradient(rgba(212,175,55,0.6) 1px, transparent 1px)',
                    backgroundSize: '45px 45px',
                    maskImage:
                        'linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 65%)',
                    WebkitMaskImage:
                        'linear-gradient(to right, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0) 65%)',
                }}
            />

            <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-32 lg:px-10 lg:pb-44 lg:pt-40">
                {/* Corner frame accents */}
                <div
                    aria-hidden="true"
                    className="absolute left-6 top-12 h-14 w-14 border-l border-t border-[#d4af37]/15 lg:left-10 lg:top-16"
                />
                <div
                    aria-hidden="true"
                    className="absolute bottom-12 right-6 h-14 w-14 border-b border-r border-[#d4af37]/15 lg:bottom-16 lg:right-10"
                />

                {/* Main Content - Left aligned */}
                <div className="relative max-w-3xl">
                    {/* Eyebrow */}
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
                                          delay: 0.2,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mb-8 flex items-center gap-4"
                    >
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: 48 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4,
                                ease: easeLuxury,
                            }}
                            viewport={{ once: true }}
                            className="block h-px bg-gradient-to-r from-[#d4af37]/60 to-[#d4af37]/10"
                        />
                        <span className="flex items-center gap-2.5 font-sans text-[10px] uppercase tracking-[0.45em] text-[#d4af37]/85 md:text-[11px]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]/60" />
                            Portfolio
                        </span>
                        <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: 80 }}
                            transition={{
                                duration: 0.7,
                                delay: 0.45,
                                ease: easeLuxury,
                            }}
                            viewport={{ once: true }}
                            className="hidden h-px bg-gradient-to-l from-[#d4af37]/25 to-transparent sm:block"
                        />
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.55,
                            }}
                            viewport={{ once: true }}
                            className="hidden items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-stone-500 sm:flex"
                        >
                            <Eye className="h-3 w-3 text-[#d4af37]/40" />
                            Curated Work
                        </motion.span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 0,
                                      y: 30,
                                      filter: 'blur(10px)',
                                  }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      filter: 'blur(0px)',
                                      transition: {
                                          duration: 0.9,
                                          delay: 0.35,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="font-display text-4xl leading-[1.12] tracking-tight text-stone-100 md:text-5xl lg:text-6xl xl:text-7xl"
                    >
                        Atmospheres
                        <br />
                        we have{' '}
                        <span className="relative inline-block">
                            <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                                composed
                            </span>
                            {/* Animated underline */}
                            <motion.span
                                aria-hidden="true"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.9,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                                viewport={{ once: true }}
                                style={{ originX: 0 }}
                                className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-[#d4af37]/60 to-transparent"
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
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
                                          delay: 0.6,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-10 max-w-xl text-base leading-relaxed text-stone-400 md:text-lg lg:text-xl"
                    >
                        Filter by signature typologies. Each frame is a quiet
                        promise of what we can inhabit with you—moments captured
                        from celebrations that breathed.
                    </motion.p>

                    {/* Filter philosophy */}
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
                                          delay: 0.75,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-8 flex items-start gap-3"
                    >
                        <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4af37]/30" />
                        <p className="max-w-lg text-sm leading-relaxed text-stone-500 md:text-base">
                            Every image tells the story of a space transformed, a
                            moment suspended, an atmosphere inhabited.
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        aria-hidden="true"
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { opacity: 0, scaleX: 0 }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      scaleX: 1,
                                      transition: {
                                          duration: 0.8,
                                          delay: 0.85,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        style={{ originX: 0 }}
                        className="mt-12 h-px w-56 bg-gradient-to-r from-[#d4af37]/35 to-transparent md:w-72"
                    />

                    {/* Stats Row */}
                    <motion.div
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
                                          duration: 0.8,
                                          delay: 1.05,
                                          ease: easeLuxury,
                                          staggerChildren: 0.12,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-14 flex flex-wrap gap-10 md:gap-14 lg:gap-20"
                    >
                        {portfolioStats.map((stat) => (
                            <motion.div
                                key={stat.label}
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
                                                  duration: 0.6,
                                                  ease: easeLuxury,
                                              },
                                          }
                                }
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                {/* Gold accent dot */}
                                <span
                                    aria-hidden="true"
                                    className="absolute -left-4 top-2.5 h-1.5 w-1.5 rounded-full bg-[#d4af37]/0 transition-all duration-500 group-hover:bg-[#d4af37]/60"
                                />
                                <span className="block font-display text-3xl text-stone-100 transition-colors duration-500 group-hover:text-white md:text-4xl lg:text-5xl">
                                    {stat.value}
                                </span>
                                <span className="mt-2 block text-[10px] uppercase tracking-[0.25em] text-stone-500 transition-colors duration-500 group-hover:text-stone-400 md:text-[11px]">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bottom scroll hint / active filter indicator */}
                    <motion.div
                        aria-hidden="true"
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
                                          delay: 1.3,
                                          ease: easeLuxury,
                                      },
                                  }
                        }
                        viewport={{ once: true }}
                        className="mt-16 flex items-center gap-3"
                    >
                        <button
                            type="button"
                            onClick={() => {
                                const gallery = document.getElementById('gallery-section');
                                if (gallery) {
                                    const y = gallery.getBoundingClientRect().top + window.scrollY - 100;
                                    window.scrollTo({ top: y, behavior: 'smooth' });
                                }
                            }}
                            className="group flex cursor-pointer items-center gap-3"
                        >
                            <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/25 to-transparent transition-all duration-300 group-hover:w-12 group-hover:from-[#d4af37]/50" />
                            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-600 transition-colors duration-300 group-hover:text-[#d4af37]">
                                {active === 'All'
                                    ? 'Browse complete portfolio'
                                    : `Viewing: ${active}`}
                            </span>
                            <ArrowRight className="h-3 w-3 text-[#d4af37]/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d4af37]/60" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}