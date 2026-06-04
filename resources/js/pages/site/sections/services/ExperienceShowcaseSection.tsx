import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { ArrowUpRight, Building2, Crown, Sparkles } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const experiences = [
    {
        icon: Crown,
        eyebrow: 'Weddings',
        title: 'Couture celebrations',
        body: 'Multi-day residencies, mandap artistry, and reception tablescapes—each moment choreographed so tradition and contemporary restraint coexist.',
        image: '/assets/9.jpeg',
        href: '/our-work/wedding',
    },
    {
        icon: Building2,
        eyebrow: 'Site Installation',
        title: 'On-site brand environments',
        body: 'Welcome boards, entrance gates, mandaps, reception stages, and centerpieces—installed with brand precision and invisible operational stewardship.',
        image: '/assets/8.jpeg',
        href: '/our-work/site-installation',
    },
    {
        icon: Sparkles,
        eyebrow: 'Luxury',
        title: 'Immersive brand worlds',
        body: 'Destination activations and private soirées where lighting, florals, and service cadence dissolve into a single sensory narrative.',
        image: '/assets/13.jpeg',
        href: '/our-work/luxury-events',
    },
];

export function ExperienceShowcaseSection() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-24 lg:px-10 lg:pt-16 lg:pb-32">
            <div className="mb-14 text-center">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                    Experience typologies
                </span>
                <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl lg:text-5xl">
                    Where our disciplines come alive
                </h2>
            </div>

            <div className="space-y-8 lg:space-y-12">
                {experiences.map((item, idx) => {
                    const Icon = item.icon;
                    const reversed = idx % 2 === 1;

                    return (
                        <motion.div
                            key={item.title}
                            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: { duration: 0.85, delay: 0.1, ease: easeLuxury },
                                      }
                            }
                            viewport={{ once: true, margin: '-8%' }}
                            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
                        >
                            <div className="relative overflow-hidden rounded-3xl border border-white/[0.06]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="aspect-[4/3] w-full object-cover brightness-[0.6] lg:aspect-[16/10]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />
                            </div>
                            <div>
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5">
                                    <Icon className="h-4 w-4 text-[#d4af37]" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/70">
                                    {item.eyebrow}
                                </span>
                                <h3 className="mt-3 font-display text-2xl text-stone-100 md:text-3xl">
                                    {item.title}
                                </h3>
                                <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500 md:text-base">
                                    {item.body}
                                </p>
                                <Link
                                    href={item.href}
                                    prefetch
                                    className="group mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#d4af37]/80 transition-all hover:gap-3 hover:text-[#d4af37]"
                                >
                                    View related work
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}
