export type BlogPostSummary = {
    title: string;
    excerpt: string;
    slug: string;
    image: string;
    date: string;
};

export type BlogPostArticle = BlogPostSummary & {
    body: string;
};
