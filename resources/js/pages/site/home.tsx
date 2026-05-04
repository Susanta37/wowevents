import { Head } from '@inertiajs/react';
import { CtaSection } from '@/pages/site/sections/home/CtaSection';
import { EngagementProcessSection } from '@/pages/site/sections/home/EngagementProcessSection';
import { FaqSection } from '@/pages/site/sections/home/FaqSection';
import { HeroSection } from '@/pages/site/sections/home/HeroSection';
import { ServicesPreviewSection } from '@/pages/site/sections/home/ServicesPreviewSection';
import { StoryPanelsSection } from '@/pages/site/sections/home/StoryPanelsSection';
import { TestimonialsSection } from '@/pages/site/sections/home/TestimonialsSection';
import type {
    ServicePreview,
    Testimonial,
    WorkPiece,
} from '@/pages/site/sections/home/types';
import { WorkPreviewSection } from '@/pages/site/sections/home/WorkPreviewSection';

type HomeProps = {
    previewServices: ServicePreview[];
    previewWork: WorkPiece[];
    testimonials: Testimonial[];
};

export default function Home({
    previewServices,
    previewWork,
    testimonials,
}: HomeProps) {
    return (
        <>
            <Head title="Home" />
            <HeroSection />
            <ServicesPreviewSection previewServices={previewServices} />
            <StoryPanelsSection />
            <WorkPreviewSection previewWork={previewWork} />
            <TestimonialsSection testimonials={testimonials} />
            <EngagementProcessSection />
            <FaqSection />
            <CtaSection />
        </>
    );
}
