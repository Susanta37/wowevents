import { Head } from '@inertiajs/react';
import { AwardsSection } from '@/pages/site/sections/about/AwardsSection';
import { BehindTheScenesSection } from '@/pages/site/sections/about/BehindTheScenesSection';
import { ClientLogoSection } from '@/pages/site/sections/about/ClientLogoSection';
import { CompanyStorySection } from '@/pages/site/sections/about/CompanyStorySection';
import { CTASection } from '@/pages/site/sections/about/CTASection';
import { FounderMessageSection } from '@/pages/site/sections/about/FounderMessageSection';
import { HeroIntroSection } from '@/pages/site/sections/about/HeroIntroSection';
import { SignatureEventsSection } from '@/pages/site/sections/about/SignatureEventsSection';
import { StatsCounterSection } from '@/pages/site/sections/about/StatsCounterSection';
import { TestimonialSection } from '@/pages/site/sections/about/TestimonialSection';
import { TimelineSection } from '@/pages/site/sections/about/TimelineSection';
import { VisionMissionSection } from '@/pages/site/sections/about/VisionMissionSection';
import { WhyChooseUsSection } from '@/pages/site/sections/about/WhyChooseUsSection';
import type { Testimonial } from '@/pages/site/sections/home/types';
import type { TimelineItem } from '@/pages/site/sections/about/types';

type AboutProps = {
    timeline: TimelineItem[];
    testimonials: Testimonial[];
};

export default function About({ timeline, testimonials }: AboutProps) {
    return (
        <>
            <Head title="About" />
            <HeroIntroSection />
            <CompanyStorySection />
            <StatsCounterSection />
            <SignatureEventsSection />
            <WhyChooseUsSection />
            <ClientLogoSection />
            <TimelineSection timeline={timeline} />
            <BehindTheScenesSection />
            <FounderMessageSection />
            <TestimonialSection testimonials={testimonials} />
            <VisionMissionSection />
            <AwardsSection />
            <CTASection />
        </>
    );
}
