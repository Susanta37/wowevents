import { Head } from '@inertiajs/react';
import { ArticleBodySection } from '@/pages/site/sections/blog/ArticleBodySection';
import { ArticleHeaderSection } from '@/pages/site/sections/blog/ArticleHeaderSection';
import { ArticleHeroImageSection } from '@/pages/site/sections/blog/ArticleHeroImageSection';
import { RelatedPostsSection } from '@/pages/site/sections/blog/RelatedPostsSection';
import type { BlogPostArticle } from '@/pages/site/sections/blog/types';

type BlogShowProps = {
    post: BlogPostArticle;
    posts: BlogPostArticle[];
};

export default function BlogShow({ post, posts }: BlogShowProps) {
    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

    return (
        <>
            <Head title={post.title} />
            <article>
                <ArticleHeaderSection post={post} />
                <ArticleHeroImageSection src={post.image} alt={post.title} />
                <ArticleBodySection post={post} />
                <RelatedPostsSection related={related} />
            </article>
        </>
    );
}
