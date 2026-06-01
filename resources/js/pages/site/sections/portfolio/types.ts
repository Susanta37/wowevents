export type PortfolioItem = {
    title: string;
    src: string;
    category: string;
    categorySlug: string;
    alt: string;
    slug: string;
    subtitle?: string;
};

export type PortfolioFilter = {
    label: string;
    slug: string | null;
};
