import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';

// Custom easing curve for a refined, luxurious motion feel
const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
    { value: 200, suffix: '+', label: 'Brands Served', detail: 'Across West Bengal & India' },
    { value: 500, suffix: '+', label: 'Events Executed', detail: 'Weddings to board galas' },
    { value: 15, suffix: '+', label: 'Years of Craft', detail: 'Since our founding in Kolkata' },
    { value: 98, suffix: '%', label: 'Client Return Rate', detail: 'Trust built event by event' },
];

// Elegant stat card with glassmorphism, gold accents, and refined micro-interactions
function AnimatedStat({
    value,
    suffix,
    label,
    detail,
    index,
}: {
    value: number;
    suffix: string;
    label: string;
    detail: string;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-10%' });
    const prefersReducedMotion = useReducedMotion();
    const [count, setCount] = useState(prefersReducedMotion ? value : 0);

    useEffect(() => {
        if (!isInView || prefersReducedMotion) return;

        let frame: number;
        const duration = 2000; // slightly longer for more dramatic effect
        const start = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Cubic ease out for a smooth, premium feel
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(value * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [isInView, prefersReducedMotion, value]);

    return (
        <motion.div
            ref={ref}
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={
                prefersReducedMotion
                    ? undefined
                    : {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.8, delay: index * 0.12, ease: easeLuxury },
                      }
            }
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Premium glass card with golden accents */}
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.03] to-transparent p-6 backdrop-blur-sm transition-all duration-700 hover:border-[#d4af37]/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] lg:p-8">
                {/* Golden top accent line - refined */}
                <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                
                {/* Decorative corner shine - luxury detail */}
                <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[#d4af37]/0 blur-2xl transition-all duration-700 group-hover:bg-[#d4af37]/10" />

                {/* Number with rich typography */}
                <div className="relative">
                    <span className="block font-display text-5xl font-light tracking-tight text-white/90 transition-all duration-500 group-hover:text-white md:text-6xl lg:text-7xl">
                        {count}
                        {suffix}
                    </span>
                    {/* Subtle gold underline that appears on hover */}
                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-gradient-to-r from-[#d4af37] to-transparent transition-all duration-500 group-hover:w-1/3" />
                </div>

                {/* Label with golden tone */}
                <span className="mt-4 block text-[11px] font-medium uppercase tracking-[0.3em] text-[#d4af37]/70 transition-all duration-500 group-hover:text-[#d4af37] md:mt-5 md:text-xs">
                    {label}
                </span>

                {/* Supporting detail text */}
                <span className="mt-2 block text-xs text-stone-500 transition-colors duration-500 group-hover:text-stone-400">
                    {detail}
                </span>
            </div>
        </motion.div>
    );
}

// Main section component with rich background, subtle animations, and luxury styling
export function StatsCounterSection() {
    return (
        <SectionWrapper className="relative overflow-hidden border-y border-white/[0.03] bg-gradient-to-b from-[#030303] via-[#0a0a0a] to-[#030303] px-6 py-24 lg:px-10 lg:py-32">
            {/* Premium background elements */}
            {/* Deep radial glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_60%)]"
            />
            
            {/* Subtle noise texture overlay for tactile feel */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjUiIG51bU9jdGF2ZXM9IjMiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjZikiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay"
            />
            
            {/* Decorative gold line pattern at top and bottom */}
            <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent lg:block" />
            <div className="absolute bottom-16 left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent lg:block" />

            <div className="relative mx-auto max-w-[1280px]">
                {/* Section header with elegant gold detailing */}
                <div className="relative mb-20 text-center">
                    {/* Accent line above */}
                    <div className="mx-auto mb-4 h-px w-12 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
                    
                    <span className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#d4af37]/80">
                        The evidence of excellence
                    </span>
                    
                    <h2 className="relative mt-5 font-display text-3xl font-light tracking-tight text-stone-100 md:text-4xl lg:text-5xl">
                        A legacy measured in moments
                        {/* Decorative golden underline glow */}
                        <span className="absolute -bottom-3 left-1/2 h-px w-16 -translate-x-1/2 bg-[#d4af37]/40" />
                    </h2>
                </div>

                {/* Stats grid with responsive luxury spacing */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <AnimatedStat key={stat.label} index={idx} {...stat} />
                    ))}
                </div>

                {/* Optional: subtle bottom quote or signature line */}
                <div className="mt-16 text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600">
                        Curated with precision • Driven by passion
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
}