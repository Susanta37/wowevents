import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Compass, Eye, Shield } from 'lucide-react';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;
const easePremium = [0.42, 0, 0.58, 1] as const;

const panels = [
    {
        eyebrow: 'Atmosphere',
        title: 'Stories told in restrained gold',
        subtitle: 'Where every detail whispers, never shouts',
        body: 'We script arrival light, choreography of servers, tonal florals—all echoing the architecture you chose. From the first glass of champagne to the final candle flicker, every moment is composed like a symphony. Nothing shouts, yet everything speaks.',
        stat: '5000+',
        statLabel: 'Events curated',
        icon: Sparkles,
        gradient: 'from-amber-500/10 via-[#d4af37]/5 to-transparent',
        imageSrc: '/assets/1.jpeg',
        imageAlt: 'Luxury event atmosphere — restrained gold and luminous detail',
    },
    {
        eyebrow: 'Trust',
        title: 'Stewardship invisible by design',
        subtitle: 'You host with grace; we orchestrate in silence',
        body: 'You host; we glide. Timing windows, climatic contingencies, and vendor diplomacy stay behind the veil. Our teams move through your event like quiet currents—present when needed, invisible when not. This is the art of anticipatory service.',
        stat: '98%',
        statLabel: 'Client return rate',
        icon: Shield,
        gradient: 'from-[#d4af37]/5 via-amber-500/10 to-transparent',
        imageSrc: '/assets/2.jpeg',
        imageAlt: 'Discreet event stewardship and calm execution',
    },
    {
        eyebrow: 'Vision',
        title: 'Design that disappears into feeling',
        subtitle: 'When the aesthetic becomes the atmosphere',
        body: 'Tablescapes that frame conversation. Lighting that sculpts emotion. Sound that wraps around shoulders like cashmere. We design not to impress, but to immerse—creating environments where design dissolves and only feeling remains. Your guests will remember how it felt, not what it looked like.',
        stat: '15+',
        statLabel: 'Years of mastery',
        icon: Eye,
        gradient: 'from-transparent via-[#d4af37]/5 to-amber-500/10',
        imageSrc: '/assets/3.jpeg',
        imageAlt: 'Immersive event design — tablescape, light, and mood',
    },
    {
        eyebrow: 'Philosophy',
        title: 'The luxury of being present',
        subtitle: 'When every worry has been anticipated',
        body: "True luxury is the freedom to be fully present. While you're lost in conversation, we're tracking timing windows to the second. While you're savoring the moment, our culinary brigade is orchestrating precision from the shadows. This is events beyond management—this is liberation.",
        stat: '360°',
        statLabel: 'Complete care',
        icon: Compass,
        gradient: 'from-[#d4af37]/5 via-transparent to-amber-500/10',
        imageSrc: '/assets/4.jpeg',
        imageAlt: 'Full presence at a curated luxury gathering',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.9,
            ease: easeLuxury,
        },
    },
};

function ParallaxBackground() {
    return (
        <>
            {/* Orbital gold glows */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-96 left-1/3 h-[900px] w-[900px] animate-[spin_60s_linear_infinite] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_50%)] blur-3xl"
                style={{ animationDuration: '45s' }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute right-1/4 top-1/2 h-[700px] w-[700px] animate-[spin_60s_linear_infinite] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,47,47,0.12)_0%,transparent_50%)] blur-3xl"
                style={{ animationDuration: '55s', animationDirection: 'reverse' }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl"
            />

            {/* Subtle grid lines */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
                    backgroundSize: '80px 80px',
                }}
            />
        </>
    );
}

function PanelProgressBar({ progress }: { progress: number }) {
    return (
        <motion.div className="mt-8 h-[1px] w-full bg-white/[0.03] overflow-hidden rounded-full">
            <motion.div
                className="h-full bg-gradient-to-r from-[#d4af37]/60 to-[#d4af37]/20"
                initial={{ width: '0%' }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.8, ease: easePremium }}
            />
        </motion.div>
    );
}

export function StoryPanelsSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#070707]">
            <ParallaxBackground />

            <div className="relative mx-auto max-w-[1400px] px-6 pt-12 pb-16 lg:px-10 lg:pt-14 lg:pb-20">
                {/* Hero introduction — centered stack */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20%' }}
                    className="relative mx-auto mb-16 flex max-w-3xl flex-col items-center text-center md:mb-20 lg:mb-24"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 flex items-center justify-center gap-3"
                    >
                        <span className="h-px w-6 shrink-0 bg-gradient-to-r from-transparent to-[#d4af37]/45" />
                        <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#d4af37]/75">
                            Our Philosophy
                        </span>
                        <span className="h-px w-6 shrink-0 bg-gradient-to-l from-transparent to-[#d4af37]/45" />
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="font-display text-4xl leading-tight text-stone-100 md:text-5xl lg:text-6xl"
                    >
                        Beyond
                        <br />
                        <span className="bg-gradient-to-r from-[#d4af37] via-[#c9a830] to-[#b8942e] bg-clip-text text-transparent">
                            event management
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-stone-500 lg:text-lg"
                    >
                        We don't just plan events. We architect moments where
                        luxury dissolves into experience, and every detail serves
                        a single purpose: your complete presence.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        style={{ transformOrigin: 'center' }}
                        className="mt-10 h-px w-full max-w-xs bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent md:max-w-sm"
                        aria-hidden
                    />
                </motion.div>

                {/* Story panels - Alternating layout */}
                <div className="space-y-20 md:space-y-28 lg:space-y-32">
                    {panels.map((panel, idx) => {
                        const IconComponent = panel.icon;
                        const isEven = idx % 2 === 0;

                        return (
                            <motion.div
                                key={panel.eyebrow}
                                initial={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 0, y: 80 }
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
                                                  delay: idx * 0.1,
                                              },
                                          }
                                }
                                viewport={{ once: true, margin: '-10%' }}
                                className={`group relative grid gap-10 lg:grid-cols-2 lg:gap-16 ${
                                    !isEven ? 'lg:[direction:rtl]' : ''
                                }`}
                            >
                                {/* Content side */}
                                <div
                                    className={!isEven ? 'lg:[direction:ltr]' : ''}
                                >
                                    {/* Hover glow */}
                                    <div
                                        aria-hidden="true"
                                        className={`pointer-events-none absolute -inset-8 rounded-3xl bg-gradient-to-r ${panel.gradient} opacity-0 blur-2xl transition-opacity duration-1000 group-hover:opacity-100`}
                                    />

                                    <div className="relative space-y-6">
                                        {/* Number & Eyebrow */}
                                        <div className="flex items-center gap-4">
                                            <motion.span
                                                initial={
                                                    prefersReducedMotion
                                                        ? undefined
                                                        : { opacity: 0, scale: 0.5 }
                                                }
                                                whileInView={
                                                    prefersReducedMotion
                                                        ? undefined
                                                        : {
                                                              opacity: 1,
                                                              scale: 1,
                                                              transition: {
                                                                  duration: 0.6,
                                                                  delay: idx * 0.1 + 0.2,
                                                              },
                                                          }
                                                }
                                                viewport={{ once: true }}
                                                className="font-display text-5xl text-[#d4af37]/15 transition-colors duration-700 group-hover:text-[#d4af37]/25 lg:text-7xl"
                                            >
                                                {String(idx + 1).padStart(2, '0')}
                                            </motion.span>

                                            <div>
                                                <span className="font-sans text-[10px] uppercase tracking-[0.45em] text-[#d4af37]/75 transition-colors duration-700 group-hover:text-[#d4af37]">
                                                    {panel.eyebrow}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-display text-3xl leading-snug text-stone-100 transition-colors duration-700 group-hover:text-white lg:text-4xl">
                                            {panel.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#d4af37]/50 transition-colors duration-700 group-hover:text-[#d4af37]/70">
                                            {panel.subtitle}
                                        </p>

                                        {/* Body */}
                                        <p className="max-w-xl text-base leading-relaxed text-stone-500 transition-colors duration-700 group-hover:text-stone-400 lg:text-lg">
                                            {panel.body}
                                        </p>

                                        {/* Stat */}
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
                                                              delay: idx * 0.1 + 0.5,
                                                          },
                                                      }
                                            }
                                            viewport={{ once: true }}
                                            className="flex items-baseline gap-3 pt-4"
                                        >
                                            <span className="font-display text-4xl text-stone-100 lg:text-5xl">
                                                {panel.stat}
                                            </span>
                                            <span className="text-sm text-stone-600">
                                                {panel.statLabel}
                                            </span>
                                        </motion.div>

                                        {/* Progress bar */}
                                        <PanelProgressBar
                                            progress={
                                                idx === 0
                                                    ? 85
                                                    : idx === 1
                                                      ? 95
                                                      : idx === 2
                                                        ? 75
                                                        : 90
                                            }
                                        />
                                    </div>
                                </div>

                                {/* Visual side — image card */}
                                <motion.div
                                    className={`relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none ${
                                        !isEven ? 'lg:[direction:ltr]' : ''
                                    }`}
                                    initial={
                                        prefersReducedMotion
                                            ? undefined
                                            : { opacity: 0, scale: 0.9 }
                                    }
                                    whileInView={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  opacity: 1,
                                                  scale: 1,
                                                  transition: {
                                                      duration: 0.9,
                                                      delay: idx * 0.1 + 0.3,
                                                      ease: easeLuxury,
                                                  },
                                              }
                                    }
                                    viewport={{ once: true }}
                                >
                                    <div className="flex h-full items-center justify-center lg:justify-center">
                                        <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/[0.06] shadow-[0_28px_80px_-40px_rgb(0_0_0_/_0.65)] transition-all duration-700 group-hover:border-[#d4af37]/25 group-hover:shadow-[0_40px_100px_-40px_rgb(212_175_55_/_0.14)]">
                                            <img
                                                src={panel.imageSrc}
                                                alt={panel.imageAlt}
                                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                                loading={idx === 0 ? 'eager' : 'lazy'}
                                                decoding="async"
                                            />
                                            <div
                                                aria-hidden
                                                className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/15 to-[#0a0a0a]/35"
                                            />
                                            <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-[#d4af37]/25 transition-colors duration-700 group-hover:border-[#d4af37]/45" />
                                            <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#d4af37]/25 transition-colors duration-700 group-hover:border-[#d4af37]/45" />
                                            <div className="absolute bottom-4 left-4 flex items-center rounded-2xl border border-white/[0.08] bg-black/35 p-2.5 backdrop-blur-md transition-colors duration-700 group-hover:border-[#d4af37]/25">
                                                <IconComponent className="h-6 w-6 text-[#d4af37]/85" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Closing statement */}
                <motion.div
                    initial={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 0, y: 60 }
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
                    viewport={{ once: true }}
                    className="mt-20 border-t border-white/[0.04] pt-12 text-center md:mt-24 lg:mt-28"
                >
                    <p className="mx-auto max-w-2xl font-display text-2xl text-stone-400 italic lg:text-3xl">
                        "We don't create events.
                        <br />
                        We create the{' '}
                        <span className="text-[#d4af37]/80">conditions</span>{' '}
                        for unforgettable moments."
                    </p>

                    <motion.div
                        aria-hidden="true"
                        initial={{ scaleX: 0 }}
                        whileInView={{
                            scaleX: 1,
                            transition: {
                                duration: 1,
                                delay: 0.5,
                                ease: easePremium,
                            },
                        }}
                        viewport={{ once: true }}
                        style={{ originX: 0.5 }}
                        className="mx-auto mt-12 h-px w-32 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}