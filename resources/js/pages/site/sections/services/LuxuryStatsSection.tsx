import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SectionWrapper } from '@/components/SectionWrapper';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

const stats = [
    { value: 6, suffix: '', label: 'Core Disciplines', detail: 'End-to-end under one roof' },
    { value: 40, suffix: '+', label: 'In-House Specialists', detail: 'Design, production & execution' },
    { value: 200, suffix: '+', label: 'Brands Trusted', detail: 'Across West Bengal & India' },
    { value: 360, suffix: '°', label: 'Full Production', detail: 'Concept through final toast' },
];

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
        if (!isInView || prefersReducedMotion) {
            return;
        }

        let frame: number;
        const start = performance.now();
        const duration = 1800;

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
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
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
            whileInView={
                prefersReducedMotion
                    ? undefined
                    : {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.7, delay: index * 0.1, ease: easeLuxury },
                      }
            }
            viewport={{ once: true }}
            className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#d4af37]/20 lg:px-8 lg:py-10"
        >
            <span className="block font-display text-4xl text-stone-100 md:text-5xl">
                {count}
                {suffix}
            </span>
            <span className="mt-3 block text-[10px] uppercase tracking-[0.28em] text-[#d4af37]/80">
                {label}
            </span>
            <span className="mt-2 block text-xs text-stone-600">{detail}</span>
        </motion.div>
    );
}

export function LuxuryStatsSection() {
    return (
        <SectionWrapper className="relative border-y border-white/[0.05] bg-[#070707] px-6 py-20 lg:px-10 lg:py-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_55%)]"
            />
            <div className="relative mx-auto max-w-[1200px]">
                <div className="mb-14 text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        Capability at scale
                    </span>
                    <h2 className="mt-4 font-display text-3xl text-stone-100 md:text-4xl">
                        Production depth you can measure
                    </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <AnimatedStat key={stat.label} index={idx} {...stat} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
