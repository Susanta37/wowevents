import { AnimatedCard } from '@/components/AnimatedCard';
import { SectionWrapper } from '@/components/SectionWrapper';

import type { TeamMember } from './types';

type Props = {
    team: TeamMember[];
};

export function TeamSection({ team }: Props) {
    return (
        <SectionWrapper className="mx-auto max-w-[1400px] px-6 pt-14 pb-28 lg:px-10 lg:pt-16 lg:pb-32">
            <h2 className="text-center font-display text-3xl text-stone-100 md:text-4xl">
                The principals
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-center text-stone-500">
                Designers, producers, and quiet hosts—chosen for taste and temperament.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member) => (
                    <AnimatedCard
                        key={member.name}
                        className="group overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                decoding="async"
                                className="aspect-[4/5] w-full object-cover grayscale-[38%] transition-[transform,filter] duration-[0.7s] ease-[cubic-bezier(0.42,0,0.58,1)] group-hover:scale-[1.045] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent p-8">
                                <p className="font-display text-lg text-stone-100">
                                    {member.name}
                                </p>
                                <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[#d4af37]/90">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </AnimatedCard>
                ))}
            </div>
        </SectionWrapper>
    );
}
