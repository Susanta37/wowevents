import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    ArrowUpRight,
    Facebook,
    Instagram,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
} from 'lucide-react';

import { SITE_LOGO_ALT, SITE_LOGO_SRC } from '@/constants/brand-assets';
import { SITE_CONTACT, whatsappChatUrl } from '@/constants/site-contact';

const easing = [0.42, 0, 0.58, 1] as const;

const exploreLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Journal', href: '/blog' },
    { label: 'Book Now', href: '/book-now' },
    { label: 'Contact', href: '/contact' },
];

const portfolioLinks = [
    { label: 'Complete Portfolio', href: '/our-work' },
    { label: 'Wedding', href: '/our-work/wedding' },
    { label: 'Entrance Gate', href: '/our-work/entrance-gate' },
    { label: 'Wedding Mandap', href: '/our-work/wedding-mandap' },
    { label: 'Reception Stage', href: '/our-work/reception-stage' },
    { label: 'Round Table Centerpiece', href: '/our-work/round-table-centerpiece' },
];

const serviceLinks = [
    { label: 'Concept & Narrative', href: '/services' },
    { label: 'Venue Choreography', href: '/services' },
    { label: 'Floral Couture', href: '/services' },
    { label: 'Lighting & Scenic', href: '/services' },
    { label: 'Day-of Stewardship', href: '/services' },
];

const socialLinks = [
    {
        icon: Instagram,
        href: 'https://www.instagram.com/wowevents_kolkata/',
        label: 'Instagram',
    },
    {
        icon: Facebook,
        href: 'https://www.facebook.com/WowEventsKolkata/',
        label: 'Facebook',
    },
    {
        icon: MessageCircle,
        href: whatsappChatUrl('Hello WOW Events, I would like to enquire about an event.'),
        label: 'WhatsApp',
    },
];

type LinkColumnProps = {
    heading: string;
    links: { label: string; href: string }[];
    delay: number;
    prefersReducedMotion: boolean | null;
};

function LinkColumn({ heading, links, delay, prefersReducedMotion }: LinkColumnProps) {
    return (
        <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
            whileInView={
                prefersReducedMotion
                    ? undefined
                    : {
                          opacity: 1,
                          y: 0,
                          transition: { delay, duration: 0.75, ease: easing },
                      }
            }
            viewport={{ once: true, margin: '-10%' }}
        >
            <h3 className="mb-6 font-display text-[11px] uppercase tracking-[0.42em] text-[#d4af37]/90">
                {heading}
            </h3>
            <ul className="space-y-3.5 text-[14px] text-stone-400">
                {links.map((item) => (
                    <li key={item.href + item.label}>
                        <Link
                            href={item.href}
                            prefetch
                            className="group inline-flex items-center gap-1.5 transition-colors duration-500 hover:text-[#e8dfc4]"
                        >
                            <span>{item.label}</span>
                            <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-40" />
                        </Link>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export function Footer() {
    const prefersReducedMotion = useReducedMotion();

    return (
        <footer className="relative mt-28 border-t border-white/10 bg-linear-to-b from-[#060606] via-[#0a0a0a] to-[#040404] text-stone-400">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#d4af37]/50 to-transparent"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_65%)] blur-3xl"
            />

            <div className="relative mx-auto max-w-[1400px] px-6 pt-16 pb-10 lg:px-10">
                <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-12">
                    <motion.div
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
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
                        className="space-y-7 lg:col-span-4"
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
                            Kolkata&apos;s full-service luxury event agency—crafting weddings,
                            corporate milestones, and immersive brand experiences with couture
                            restraint and ballroom calm.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-1">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    aria-label={label}
                                    title={label}
                                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[10px] uppercase tracking-[0.22em] text-stone-400 transition-all duration-500 hover:border-[#d4af37]/35 hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -2, transition: { duration: 0.45 } }
                                    }
                                    whileTap={prefersReducedMotion ? undefined : { scale: 0.97 }}
                                >
                                    <Icon className="size-4 shrink-0" aria-hidden />
                                    {label}
                                </motion.a>
                            ))}
                        </div>

                        <div className="grid max-w-sm grid-cols-3 gap-4 border-t border-white/[0.06] pt-7">
                            {[
                                { value: '200+', label: 'Brands' },
                                { value: '500+', label: 'Events' },
                                { value: '15+', label: 'Years' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <span className="block font-display text-xl text-stone-200">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 block text-[9px] uppercase tracking-[0.25em] text-stone-600">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-3 lg:gap-8">
                        <LinkColumn
                            heading="Explore"
                            links={exploreLinks}
                            delay={0.1}
                            prefersReducedMotion={prefersReducedMotion}
                        />
                        <LinkColumn
                            heading="Our Work"
                            links={portfolioLinks}
                            delay={0.18}
                            prefersReducedMotion={prefersReducedMotion}
                        />
                        <LinkColumn
                            heading="Services"
                            links={serviceLinks}
                            delay={0.26}
                            prefersReducedMotion={prefersReducedMotion}
                        />
                    </div>

                    <motion.div
                        initial={prefersReducedMotion ? undefined : { opacity: 0, y: 26 }}
                        whileInView={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      y: 0,
                                      transition: { delay: 0.34, duration: 0.75, ease: easing },
                                  }
                        }
                        viewport={{ once: true, margin: '-10%' }}
                        className="lg:col-span-3"
                    >
                        <h3 className="mb-6 font-display text-[11px] uppercase tracking-[0.42em] text-[#d4af37]/90">
                            Get in Touch
                        </h3>
                        <ul className="space-y-5 text-[14px] leading-relaxed text-stone-500">
                            <li>
                                <a
                                    href={`tel:${SITE_CONTACT.phoneE164}`}
                                    className="group flex items-start gap-3 transition-colors hover:text-[#d4af37]"
                                >
                                    <Phone className="mt-0.5 size-4 shrink-0 text-[#d4af37]/50" />
                                    <span>
                                        <span className="block text-[10px] uppercase tracking-[0.28em] text-stone-600">
                                            Phone
                                        </span>
                                        +91 {SITE_CONTACT.phoneDisplay}
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href={`mailto:${SITE_CONTACT.email}`}
                                    className="group flex items-start gap-3 transition-colors hover:text-[#d4af37]"
                                >
                                    <Mail className="mt-0.5 size-4 shrink-0 text-[#d4af37]/50" />
                                    <span>
                                        <span className="block text-[10px] uppercase tracking-[0.28em] text-stone-600">
                                            Email
                                        </span>
                                        {SITE_CONTACT.email}
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 size-4 shrink-0 text-[#d4af37]/50" />
                                <span>
                                    <span className="block text-[10px] uppercase tracking-[0.28em] text-stone-600">
                                        Studio
                                    </span>
                                    {SITE_CONTACT.addressShort}
                                </span>
                            </li>
                        </ul>

                        <Link
                            href="/book-now"
                            prefetch
                            className="group mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#d4af37] transition-all duration-500 hover:border-[#d4af37]/45 hover:bg-[#d4af37]/10"
                        >
                            Schedule a consultation
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-[11px] uppercase tracking-[0.28em] text-stone-600 sm:flex-row sm:text-left">
                    <p>
                        © {new Date().getFullYear()} WOW Events. Crafted for those who notice the
                        details.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                        <a
                            href="https://www.instagram.com/wowevents_kolkata/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#d4af37]"
                        >
                            @wowevents_kolkata
                        </a>
                        <span className="hidden text-stone-800 sm:inline">·</span>
                        <a
                            href="https://www.facebook.com/WowEventsKolkata/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#d4af37]"
                        >
                            Facebook
                        </a>
                        <span className="hidden text-stone-800 sm:inline">·</span>
                        <Link href="/contact" prefetch className="transition-colors hover:text-[#d4af37]">
                            Enquire
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
