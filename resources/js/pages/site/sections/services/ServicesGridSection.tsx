import { motion, useReducedMotion } from 'framer-motion';
import {
    ClipboardList,
    Flower2,
    Lamp,
    Layers,
    Sparkles,
    UtensilsCrossed,
} from 'lucide-react';
import { AnimatedCard } from '@/components/AnimatedCard';
import {
    SectionWrapper,
    StaggerContainer,
    StaggerItem,
} from '@/components/SectionWrapper';

import type { ServiceCard } from './types';

const icons = [Sparkles, Layers, Flower2, Lamp, UtensilsCrossed, ClipboardList];

type Props = {
    services: ServiceCard[];
};

export function ServicesGridSection({ services }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <SectionWrapper className="mx-auto max-w-[1400px] px-6 pt-14 pb-20 lg:px-10 lg:pt-16 lg:pb-28">
            <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, idx) => {
                    const Icon = icons[idx % icons.length];

                    return (
                        <StaggerItem key={service.id}>
                            <AnimatedCard className="group h-full">
                                <motion.article
                                    className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-white/[0.03] p-10 shadow-[0_40px_80px_-70px_rgb(212_175_55_/_0.32)] transition-[border-color,box-shadow] duration-700 group-hover:border-[#d4af37]/28 group-hover:shadow-[0_56px_100px_-70px_rgb(212_175_55_/_0.35)]"
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -4, transition: { duration: 0.55 } }
                                    }
                                >
                                    <div className="inline-flex rounded-2xl border border-[#d4af37]/25 bg-[#d4af37]/10 p-4 text-[#d4af37]">
                                        <Icon className="size-7" aria-hidden />
                                    </div>
                                    <h2 className="mt-10 font-display text-xl text-stone-100">
                                        {service.title}
                                    </h2>
                                    <p className="mt-5 flex-1 leading-relaxed text-stone-500">
                                        {service.description}
                                    </p>
                                    <span className="mt-10 text-[10px] uppercase tracking-[0.36em] text-[#d4af37]/70">
                                        Reserved for you
                                    </span>
                                </motion.article>
                            </AnimatedCard>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </SectionWrapper>
    );
}
