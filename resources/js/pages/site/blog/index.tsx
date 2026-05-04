import { Head } from '@inertiajs/react';
import { HeroSection } from '@/pages/site/sections/blog/HeroSection';
import { PostsGridSection } from '@/pages/site/sections/blog/PostsGridSection';
import type { BlogPostSummary } from '@/pages/site/sections/blog/types';

type BlogIndexProps = {
    posts: BlogPostSummary[];
};

export default function BlogIndex({ posts }: BlogIndexProps) {
    return (
        <>
            <Head title="Journal" />
            <HeroSection />
            <PostsGridSection posts={posts} />
        </>
    );
}
