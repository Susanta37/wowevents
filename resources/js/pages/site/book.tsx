import { Head } from '@inertiajs/react';
import { BookingFormSection } from '@/pages/site/sections/book/BookingFormSection';
import { HeroSection } from '@/pages/site/sections/book/HeroSection';

export default function Book() {
    return (
        <>
            <Head title="Book Now" />
            <HeroSection />
            <BookingFormSection />
        </>
    );
}
