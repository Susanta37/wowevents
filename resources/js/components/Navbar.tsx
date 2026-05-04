import { Link, router, usePage } from '@inertiajs/react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { NavbarContactStrip } from '@/components/NavbarContactStrip';
import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '@/constants/brand-assets';

const easeNavbar = [0.42, 0, 0.58, 1] as const;

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

function isActivePath(current: string, href: string) {
    if (href === '/') {
        return current === '/' || current === '';
    }

    return current === href || current.startsWith(`${href}/`);
}

export function Navbar() {
    const { url } = usePage();
    const path = typeof url === 'string' ? url.split('?')[0] ?? url : '';

    const [solid, setSolid] = useState(false);
    const [open, setOpen] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const onScroll = () => {
            const hero = document.getElementById('cinematic-hero-section');
            if (hero) {
                const rect = hero.getBoundingClientRect();
                // Keep transparent while the hero section's bottom is still below the navbar height
                setSolid(rect.bottom <= 100);
            } else {
                setSolid(window.scrollY > 32);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        
        // Initial check
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const unsub = router.on('finish', () => {
            setOpen(false);
        });

        return unsub;
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${
                solid
                    ? 'border-b border-white/10 bg-[#0a0a0a] shadow-[0_12px_40px_-28px_rgb(212_175_55_/_0.35)]'
                    : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-[2px]'
            }`}
        >
            <NavbarContactStrip />

            <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-5 lg:px-10">
                <Link
                    href="/"
                    prefetch
                    className="flex shrink-0 items-center rounded-lg outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[#d4af37]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                    <img
                        src={SITE_LOGO_SRC}
                        alt={SITE_LOGO_ALT}
                        className="h-9 w-auto max-w-[200px] object-contain object-left md:h-11"
                        decoding="async"
                        fetchPriority="high"
                    />
                </Link>

                <nav
                    aria-label="Main"
                    className="hidden lg:flex lg:flex-1 lg:justify-center"
                >
                    <ul className="flex gap-10 text-[13px] font-medium uppercase tracking-[0.26em] text-stone-300">
                        {navItems.map((item) => {
                            const active = isActivePath(path, item.href);

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        prefetch
                                        className={`transition-colors duration-500 hover:text-[#d4af37] ${active ? 'text-[#d4af37]' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="hidden shrink-0 items-center gap-4 lg:flex">
                    <Link
                        href="/book-now"
                        prefetch
                        className="rounded-2xl border border-[#d4af37]/60 bg-linear-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] px-7 py-2.5 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#0a0a0a] shadow-[0_0_36px_-6px_rgb(212_175_55_/_0.55)] transition-all duration-500 hover:shadow-[0_0_48px_-4px_rgb(212_175_55_/_0.7)] hover:brightness-105"
                    >
                        Book Now
                    </Link>
                </div>

                <button
                    type="button"
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className="inline-flex rounded-xl border border-white/15 bg-white/5 p-2 text-stone-100 lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        id="mobile-menu"
                        initial={
                            prefersReducedMotion
                                ? undefined
                                : { height: 0, opacity: 0 }
                        }
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : { height: 'auto', opacity: 1 }
                        }
                        exit={
                            prefersReducedMotion
                                ? undefined
                                : { height: 0, opacity: 0 }
                        }
                        transition={{
                            duration: 0.45,
                            ease: easeNavbar,
                        }}
                        className="overflow-hidden border-t border-white/10 bg-[#0a0a0a]/96 backdrop-blur-md lg:hidden"
                    >
                        <nav
                            aria-label="Mobile main"
                            className="flex flex-col gap-1 px-6 py-8"
                        >
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  opacity: 0,
                                                  y: 10,
                                                  transition: {
                                                      delay: i * 0.05 + 0.05,
                                                      duration: 0.45,
                                                      ease: easeNavbar,
                                                  },
                                              }
                                    }
                                    animate={
                                        prefersReducedMotion
                                            ? undefined
                                            : {
                                                  opacity: 1,
                                                  y: 0,
                                                  transition: {
                                                      delay: i * 0.05 + 0.05,
                                                      duration: 0.45,
                                                      ease: easeNavbar,
                                                  },
                                              }
                                    }
                                >
                                    <Link
                                        href={item.href}
                                        prefetch
                                        className={`block rounded-xl px-4 py-3 font-display text-xl tracking-[0.08em] transition-colors hover:bg-white/5 hover:text-[#d4af37] ${
                                            isActivePath(path, item.href)
                                                ? 'bg-white/5 text-[#d4af37]'
                                                : 'text-stone-200'
                                        }`}
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <Link
                                href="/book-now"
                                prefetch
                                className="mt-6 rounded-2xl border border-[#d4af37]/55 bg-linear-to-br from-[#d4af37] via-[#c9a02d] to-[#8a7130] py-4 text-center text-[13px] font-semibold uppercase tracking-[0.32em] text-[#0a0a0a] shadow-[0_0_32px_-4px_rgb(212_175_55_/_0.58)] transition-all duration-500 hover:brightness-105"
                                onClick={() => setOpen(false)}
                            >
                                Book Now
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
