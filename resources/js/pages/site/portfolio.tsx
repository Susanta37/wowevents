import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { GallerySection } from '@/pages/site/sections/portfolio/GallerySection';
import { IntroSection } from '@/pages/site/sections/portfolio/IntroSection';
import { LightboxDialog } from '@/pages/site/sections/portfolio/LightboxDialog';
import type { PortfolioItem } from '@/pages/site/sections/portfolio/types';

type PortfolioProps = {
    items: PortfolioItem[];
    filters: string[];
};

export default function Portfolio({ items, filters }: PortfolioProps) {
    const [active, setActive] = useState<string>('All');
    const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);

    const filtered =
        active === 'All' ? items : items.filter((i) => i.category === active);

    return (
        <>
            <Head title="Our Work" />
            <IntroSection filters={filters} active={active} setActive={setActive} />
            <GallerySection items={filtered} openLightbox={setLightbox} />
            <LightboxDialog
                item={lightbox}
                onOpenChange={(open) => !open && setLightbox(null)}
            />
        </>
    );
}
