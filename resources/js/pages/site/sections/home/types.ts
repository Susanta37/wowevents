export type ServicePreview = {
    title: string;
    href: string;
};

export type WorkPiece = {
    title: string;
    src: string;
    category: string;
    alt: string;
    subtitle?: string;
};

export type Testimonial = {
    id: string;
    quote: string;
    name: string;
    role: string;
    event?: string;
    avatar?: string;
    company?: string;
};
