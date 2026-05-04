import { Head } from '@inertiajs/react';
import { HeroIntroSection } from '@/pages/site/sections/services/HeroIntroSection';
import { ServicesGridSection } from '@/pages/site/sections/services/ServicesGridSection';
import type { ServiceCard } from '@/pages/site/sections/services/types';

type ServicesProps = {
    services: ServiceCard[];
};

export default function Services({ services }: ServicesProps) {
    return (
        <>
            <Head title="Services" />
            <HeroIntroSection />
            <ServicesGridSection services={services} />
        </>
    );
}
