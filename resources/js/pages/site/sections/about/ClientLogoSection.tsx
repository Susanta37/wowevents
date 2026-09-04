import { motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

// Replace these with actual image imports or CDN URLs when available
// Example: import TataSteelLogo from '@/assets/logos/tata-steel.svg';
const clients = [
    { name: 'Tata Steel', logo: '/logos/tata-steel.svg' },
    { name: 'ITC Hotels', logo: '/logos/itc-hotels.svg' },
    { name: 'Bengal Chamber', logo: '/logos/bengal-chamber.svg' },
    { name: 'Peerless Hotels', logo: '/logos/peerless-hotels.svg' },
    { name: 'Ambuja Neotia', logo: '/logos/ambuja-neotia.svg' },
    { name: 'RP-Sanjiv Goenka Group', logo: '/logos/rp-sanjiv-goenka.svg' },
    { name: 'Lux Kolkata', logo: '/logos/lux-kolkata.svg' },
    { name: 'East India Company', logo: '/logos/east-india-company.svg' },
    { name: 'Heritage Resorts', logo: '/logos/heritage-resorts.svg' },
    { name: 'Calcutta Club', logo: '/logos/calcutta-club.svg' },
];

// Fallback text style if logo image is missing
const FallbackText = ({ name }: { name: string }) => (
    <span className="whitespace-nowrap font-display text-base tracking-wide text-stone-500 transition-all duration-500 group-hover:text-[#d4af37] md:text-lg">
        {name}
    </span>
);

export function ClientLogoSection() {
    const prefersReducedMotion = useReducedMotion();
    const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
    const doubled = [...clients, ...clients];

    const handleImageError = (clientName: string) => {
        setImgErrors(prev => ({ ...prev, [clientName]: true }));
    };

    return (
        <section className="relative overflow-hidden border-y border-white/[0.04] bg-gradient-to-b from-[#080808] to-[#0a0a0a] py-20 lg:py-28">
            {/* Refined background glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)]"
            />
            
            {/* Subtle top and bottom golden lines */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent" />

            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
                {/* Section header with luxury details */}
                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
                    }
                    viewport={{ once: true }}
                    className="mb-14 text-center"
                >
                    <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Trusted by industry leaders
                    </span>
                    <h2 className="relative mt-4 font-display text-2xl font-light tracking-tight text-stone-100 md:text-3xl lg:text-4xl">
                        Brands that expect excellence
                        <span className="absolute -bottom-3 left-1/2 h-px w-12 -translate-x-1/2 bg-[#d4af37]/40" />
                    </h2>
                </motion.div>

                {/* Marquee container with elegant masks */}
                <div className="relative">
                    {/* Gradient masks for smooth edges */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#080808] via-[#080808]/80 to-transparent"
                    />

                    <div
                        className={`flex ${prefersReducedMotion ? 'flex-wrap justify-center gap-8' : 'animate-marquee w-max gap-12'}`}
                        style={!prefersReducedMotion ? { animationDuration: '30s' } : undefined}
                    >
                        {doubled.map((client, idx) => {
                            const hasError = imgErrors[client.name];
                            return (
                                <div
                                    key={`${client.name}-${idx}`}
                                    className="group flex shrink-0 cursor-default items-center justify-center px-6 py-4 transition-all duration-500 hover:scale-105"
                                >
                                    {!hasError && client.logo ? (
                                        <img
                                            src={client.logo}
                                            alt={`${client.name} logo`}
                                            className="max-h-8 w-auto opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-10"
                                            onError={() => handleImageError(client.name)}
                                            loading="lazy"
                                        />
                                    ) : (
                                        <FallbackText name={client.name} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Elegant footer note */}
                <motion.p
                    initial={prefersReducedMotion ? undefined : { opacity: 0 }}
                    whileInView={prefersReducedMotion ? undefined : { opacity: 1, transition: { delay: 0.3, duration: 0.6 } }}
                    viewport={{ once: true }}
                    className="mt-14 text-center text-xs uppercase tracking-[0.2em] text-stone-500"
                >
                    5000+ distinguished clients across West Bengal & India
                </motion.p>
            </div>

            {/* Custom marquee keyframes - add to your global CSS or tailwind config */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .group:hover .animate-marquee {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}