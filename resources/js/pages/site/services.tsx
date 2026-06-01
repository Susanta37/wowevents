import { Head } from '@inertiajs/react';
import { ClientTestimonialsSection } from '@/pages/site/sections/services/ClientTestimonialsSection';
import { CTASection } from '@/pages/site/sections/services/CTASection';
import { EventGallerySection } from '@/pages/site/sections/services/EventGallerySection';
import { ExperienceShowcaseSection } from '@/pages/site/sections/services/ExperienceShowcaseSection';
import { FAQSection } from '@/pages/site/sections/services/FAQSection';
import { HeroIntroSection } from '@/pages/site/sections/services/HeroIntroSection';
import { LuxuryStatsSection } from '@/pages/site/sections/services/LuxuryStatsSection';
import { ProcessSection } from '@/pages/site/sections/services/ProcessSection';
import { ServicesGridSection } from '@/pages/site/sections/services/ServicesGridSection';
import { WhyChooseUsSection } from '@/pages/site/sections/services/WhyChooseUsSection';
import type { Testimonial } from '@/pages/site/sections/home/types';
import type { ServiceCard } from '@/pages/site/sections/services/types';

type ServicesProps = {
    services: ServiceCard[];
    testimonials: Testimonial[];
};

export default function Services({ services, testimonials }: ServicesProps) {
    return (
        <>
            <Head title="Services" />
            <HeroIntroSection />
            <LuxuryStatsSection />
            <ServicesGridSection services={services} />
            <ExperienceShowcaseSection />
            <ProcessSection />
            <WhyChooseUsSection />
            <EventGallerySection />
            <ClientTestimonialsSection testimonials={testimonials} />
            <FAQSection />
            <CTASection />
        </>
    );
}
