import type { BlogPostArticle } from './types';

type Props = {
    post: BlogPostArticle;
};

export function ArticleHeaderSection({ post }: Props) {
    return (
        <header className="border-b border-white/[0.06] pb-20 pt-20 lg:pt-24">
            <div className="mx-auto max-w-[820px] px-6 lg:px-10">
                <time
                    dateTime={post.date}
                    className="text-[11px] uppercase tracking-[0.38em] text-[#d4af37]/85"
                >
                    {post.date}
                </time>
                <h1 className="mt-8 font-display text-4xl text-stone-100 md:text-[2.75rem]">
                    {post.title}
                </h1>
                <p className="mt-10 text-lg leading-relaxed text-stone-400">{post.excerpt}</p>
            </div>
        </header>
    );
}
