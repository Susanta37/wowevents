import { Head } from '@inertiajs/react';
import { CompanyStorySection } from '@/pages/site/sections/about/CompanyStorySection';
import { HeroIntroSection, HeroSection } from '@/pages/site/sections/about/HeroIntroSection';
import { TeamSection } from '@/pages/site/sections/about/TeamSection';
import { TimelineSection } from '@/pages/site/sections/about/TimelineSection';
import { VisionMissionSection } from '@/pages/site/sections/about/VisionMissionSection';
import type {
    TeamMember,
    TimelineItem,
} from '@/pages/site/sections/about/types';

type AboutProps = {
    timeline: TimelineItem[];
    team: TeamMember[];
};

export default function About({ timeline, team }: AboutProps) {
    return (
        <>
            <Head title="About" />
            <HeroIntroSection/>
            <CompanyStorySection />
            <TimelineSection timeline={timeline} />
            {/* <TeamSection team={team} /> */}
            <VisionMissionSection />
        </>
    );
}
