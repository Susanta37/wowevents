import { TestimonialsSection } from '@/pages/site/sections/home/TestimonialsSection';
import type { Testimonial } from '@/pages/site/sections/home/types';

type Props = {
    testimonials: Testimonial[];
};

export function ClientTestimonialsSection({ testimonials }: Props) {
    return <TestimonialsSection testimonials={testimonials} />;
}
