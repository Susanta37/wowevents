import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '@/constants/brand-assets';

const easing = [0.42, 0, 0.58, 1] as const;

const midCols = [
    {
        heading: 'Quick Links',
        links: [
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Our Work', href: '/our-work' },
            { label: 'Journal', href: '/blog' },
            { label: 'Contact', href: '/contact' },
        ],
    },
    {
        heading: 'Services',
        links: [
            { label: 'Luxury Weddings', href: '/services' },
            { label: 'Corporate Galas', href: '/services' },
            { label: 'Destination Design', href: '/services' },
            { label: 'Venue Stewardship', href: '/services' },
        ],
    },
];

const socialRow = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
];

export function Footer() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <footer className="relative mt-28 border-t border-white/10 bg-linear-to-b from-[#060606] via-[#0a0a0a] to-[#040404] text-stone-400">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/50 to-transparent"
            />
            <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-24 lg:px-10 lg:pb-28">
                <div className="grid gap-16 md:grid-cols-[1.4fr_repeat(2,1fr)_1fr]">
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
                                      transition: { duration: 0.85, ease: easing },
                                  }
                        }
                        viewport={{ once: true, margin: '-10%' }}
                        className="space-y-6"
                    >
                        <Link
                            href="/"
                            prefetch
                            className="inline-flex rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#d4af37]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                        >
                            <img
                                src={SITE_LOGO_SRC}
                                alt={SITE_LOGO_ALT}
                                className="h-12 w-auto max-w-[260px] object-contain object-left md:h-[3.25rem]"
                                loading="lazy"
                                decoding="async"
                            />
                        </Link>
                        <p className="max-w-sm leading-relaxed text-stone-500">
                            Bespoke choreography for luminous gatherings—planned
                            with couture restraint, executed with ballroom calm.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {socialRow.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    title={label}
                                    className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-[#d4af37] transition-colors hover:border-[#d4af37]/40 hover:bg-[#d4af37]/15"
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -3, transition: { duration: 0.45 } }
                                    }
                                    whileTap={
                                        prefersReducedMotion ? undefined : { scale: 0.97 }
                                    }
                                >
                                    <Icon className="size-5" aria-hidden />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {midCols.map((block, idx) => (
                        <motion.div
                            key={block.heading}
                            initial={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 0,
                                          y: 26,
                                          transition: {
                                              delay: 0.1 * (idx + 1),
                                              duration: 0.75,
                                              ease: easing,
                                          },
                                      }
                            }
                            whileInView={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                              delay: 0.1 * (idx + 1),
                                              duration: 0.75,
                                              ease: easing,
                                          },
                                      }
                            }
                            viewport={{ once: true, margin: '-10%' }}
                        >
                            <h3 className="mb-8 font-display text-sm uppercase tracking-[0.42em] text-[#d4af37]/90">
                                {block.heading}
                            </h3>
                            <ul className="space-y-5 text-[15px] text-stone-400">
                                {block.links.map((item) => (
                                    <li key={item.href + item.label}>
                                        <Link
                                            href={item.href}
                                            prefetch
                                            className="transition-colors duration-500 hover:text-[#e8dfc4]"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 0,
                                      y: 26,
                                      transition: {
                                          delay: 0.42,
                                          duration: 0.75,
                                          ease: easing,
                                      },
                                  }
                        }
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                          delay: 0.42,
                                          duration: 0.75,
                                          ease: easing,
                                      },
                                  }
                        }
                        viewport={{ once: true, margin: '-10%' }}
                    >
                        <h3 className="mb-8 font-display text-sm uppercase tracking-[0.42em] text-[#d4af37]/90">
                            Contact
                        </h3>
                        <ul className="space-y-6 text-[15px] leading-relaxed text-stone-500">
                            <li>
                                <span className="block text-[11px] uppercase tracking-[0.28em] text-stone-600">
                                    Concierge
                                </span>
                                <a
                                    href="mailto:hello@wowevents.studio"
                                    className="text-stone-300 transition-colors hover:text-[#d4af37]"
                                >
                                    hello@wowevents.studio
                                </a>
                            </li>
                            <li>
                                <span className="block text-[11px] uppercase tracking-[0.28em] text-stone-600">
                                    Studio
                                </span>
                                <span>12 Park Street, Kolkata 700016</span>
                            </li>
                            <li>
                                <span className="block text-[11px] uppercase tracking-[0.28em] text-stone-600">
                                    Hours
                                </span>
                                <span>By appointment</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <div className="mt-20 border-t border-white/10 pt-10 text-center text-[12px] uppercase tracking-[0.32em] text-stone-600">
                    © {new Date().getFullYear()} WOW Events. Crafted for those
                    who notice the details.
                </div>
            </div>
        </footer>
    );
}
