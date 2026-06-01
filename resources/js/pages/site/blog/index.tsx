import { Head } from '@inertiajs/react';
import { CTASection } from '@/pages/site/sections/blog/CTASection';
import { EditorialQuoteSection } from '@/pages/site/sections/blog/EditorialQuoteSection';
import { EditorialTopicsSection } from '@/pages/site/sections/blog/EditorialTopicsSection';
import { FeaturedPostSection } from '@/pages/site/sections/blog/FeaturedPostSection';
import { HeroSection } from '@/pages/site/sections/blog/HeroSection';
import { NewsletterSection } from '@/pages/site/sections/blog/NewsletterSection';
import { PostsGridSection } from '@/pages/site/sections/blog/PostsGridSection';
import type { BlogPostSummary } from '@/pages/site/sections/blog/types';

type BlogIndexProps = {
    posts: BlogPostSummary[];
};

export default function BlogIndex({ posts }: BlogIndexProps) {
    const [featured, ...remaining] = posts;

    return (
        <>
            <Head title="Journal" />
            <HeroSection />
            {featured && <FeaturedPostSection post={featured} />}
            <EditorialTopicsSection />
            {remaining.length > 0 && <PostsGridSection posts={remaining} />}
            <EditorialQuoteSection />
            <NewsletterSection />
            <CTASection />
        </>
    );
}
