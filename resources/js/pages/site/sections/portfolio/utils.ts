import type { PortfolioFilter, PortfolioItem } from './types';

export function filterHref(filter: PortfolioFilter): string {
    return filter.slug ? `/our-work/${filter.slug}` : '/our-work';
}

export function itemSharePath(item: PortfolioItem): string {
    return `/our-work/${item.categorySlug}/${item.slug}`;
}

export function itemShareUrl(item: PortfolioItem): string {
    if (typeof window === 'undefined') {
        return itemSharePath(item);
    }

    return `${window.location.origin}${itemSharePath(item)}`;
}

export function categoryPath(activeCategorySlug: string | null): string {
    if (!activeCategorySlug) {
        return '/our-work';
    }

    return `/our-work/${activeCategorySlug}`;
}
