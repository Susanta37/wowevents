import { Head } from '@inertiajs/react';
import { CardsAndFormSection } from '@/pages/site/sections/contact/CardsAndFormSection';
import { HeroSection } from '@/pages/site/sections/contact/HeroSection';
import { MapSection } from '@/pages/site/sections/contact/MapSection';

export default function Contact() {
    return (
        <>
            <Head title="Contact" />
            <HeroSection />
            <CardsAndFormSection />
            <MapSection />
        </>
    );
}
