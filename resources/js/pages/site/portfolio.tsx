import { Head, router } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import { GallerySection } from '@/pages/site/sections/portfolio/GallerySection';
import { IntroSection } from '@/pages/site/sections/portfolio/IntroSection';
import { LightboxDialog } from '@/pages/site/sections/portfolio/LightboxDialog';
import type { PortfolioFilter, PortfolioItem } from '@/pages/site/sections/portfolio/types';
import { categoryPath, itemSharePath } from '@/pages/site/sections/portfolio/utils';

type PortfolioProps = {
    items: PortfolioItem[];
    filters: PortfolioFilter[];
    activeCategory: string;
    activeCategorySlug: string | null;
    openItemSlug?: string | null;
};

export default function Portfolio({
    items,
    filters,
    activeCategory,
    activeCategorySlug,
    openItemSlug = null,
}: PortfolioProps) {
    const findItemBySlug = useCallback(
        (slug: string | null | undefined) =>
            slug ? (items.find((item) => item.slug === slug) ?? null) : null,
        [items],
    );

    const [lightbox, setLightbox] = useState<PortfolioItem | null>(() =>
        findItemBySlug(openItemSlug),
    );

    useEffect(() => {
        setLightbox(findItemBySlug(openItemSlug));
    }, [findItemBySlug, openItemSlug]);

    const openLightbox = (item: PortfolioItem) => {
        setLightbox(item);
        router.visit(itemSharePath(item), {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    };

    const closeLightbox = () => {
        setLightbox(null);
        router.visit(categoryPath(activeCategorySlug), {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    };

    return (
        <>
            <Head title="Our Work" />
            <IntroSection active={activeCategory} />
            <GallerySection
                items={items}
                openLightbox={openLightbox}
                filters={filters}
                active={activeCategory}
            />
            <LightboxDialog
                item={lightbox}
                onOpenChange={(open) => {
                    if (!open) {
                        closeLightbox();
                    }
                }}
            />
        </>
    );
}
