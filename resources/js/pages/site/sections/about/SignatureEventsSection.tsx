import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Building2, Crown, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const events = [
    {
        title: 'Luxury Weddings',
        description:
            'Multi-day residencies, mandap artistry, and reception tablescapes that honour tradition while feeling unmistakably contemporary.',
        image: '/assets/9.jpeg',
        href: '/our-work/wedding',
        icon: Crown,
        tag: 'Wedding',
    },
    {
        title: 'Site Installation',
        description:
            'Welcome boards, branded backdrops, entrance gates, and on-site décor engineered with precision and ballroom calm.',
        image: '/assets/8.jpeg',
        href: '/our-work/site-installation',
        icon: Building2,
        tag: 'Site Installation',
    },
    {
        title: 'Luxury Experiences',
        description:
            'Destination celebrations, private soirées, and immersive brand activations across Kolkata and beyond.',
        image: '/assets/13.jpeg',
        href: '/our-work/luxury-events',
        icon: Sparkles,
        tag: 'Luxury',
    },
];

export function SignatureEventsSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_60%)] blur-3xl"
            />

            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Signature typologies
                    </span>
                    <h2 className="mt-4 max-w-xl font-display text-3xl text-stone-100 md:text-4xl lg:text-5xl">
                        Events we are known for
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-stone-500 md:text-base">
                    From intimate vow exchanges to thousand-guest galas, every format receives the
                    same obsessive attention to atmosphere, flow, and detail.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
                {events.map((event, idx) => {
                    const Icon = event.icon;

                    return (
                        <motion.div
                            key={event.title}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                              duration: 0.8,
                                              delay: idx * 0.12,
                                              ease: easeLuxury,
                                          },
                                      }
                            }
                            viewport={{ once: true, margin: '-8%' }}
                        >
                            <Link
                                href={event.href}
                                prefetch
                                className="group relative block overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-700 hover:border-[#d4af37]/25"
                            >
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover brightness-[0.55] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.7]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                                    <span className="absolute left-4 top-4 rounded-full border border-white/[0.08] bg-[#0a0a0a]/60 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-[#d4af37]/80 backdrop-blur-sm">
                                        {event.tag}
                                    </span>
                                </div>
                                <div className="p-6 sm:p-8">
                                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                        <Icon className="h-4 w-4 text-[#d4af37]" />
                                    </div>
                                    <h3 className="font-display text-xl text-stone-100 transition-colors duration-500 group-hover:text-white sm:text-2xl">
                                        {event.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-stone-500">
                                        {event.description}
                                    </p>
                                    <span className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/70 transition-all duration-500 group-hover:gap-3 group-hover:text-[#d4af37]">
                                        View portfolio
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                                <div
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#d4af37]/50 to-transparent transition-all duration-700 group-hover:w-full"
                                />
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
