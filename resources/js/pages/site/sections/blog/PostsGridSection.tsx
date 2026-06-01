import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/SectionWrapper';

import type { BlogPostSummary } from './types';

type Props = {
    posts: BlogPostSummary[];
    title?: string;
    subtitle?: string;
};

export function PostsGridSection({
    posts,
    title = 'Latest essays',
    subtitle = 'Recent stories from our curators and production team.',
}: Props) {
    const prefersReducedMotion = useReducedMotion();

    if (posts.length === 0) {
        return null;
    }

    return (
        <section className="relative mx-auto max-w-[1400px] px-6 pt-14 pb-20 lg:px-10 lg:pb-28">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 right-0 h-[400px] w-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_60%)] blur-3xl"
            />

            <div className="relative mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/70">
                        The journal
                    </span>
                    <h2 className="mt-3 font-display text-3xl text-stone-100 md:text-4xl">{title}</h2>
                    <p className="mt-3 max-w-lg text-sm text-stone-500">{subtitle}</p>
                </div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-600">
                    {posts.length} {posts.length === 1 ? 'essay' : 'essays'}
                </span>
            </div>

            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {posts.map((post) => (
                    <StaggerItem key={post.slug}>
                        <Link href={`/blog/${post.slug}`} prefetch className="group block">
                            <motion.article
                                className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] shadow-[0_40px_80px_-70px_rgb(212_175_55_/_0.22)] transition-shadow duration-700 hover:border-[#d4af37]/35 hover:shadow-[0_54px_100px_-70px_rgb(212_175_55_/_0.3)]"
                                whileHover={
                                    prefersReducedMotion
                                        ? undefined
                                        : { scale: 1.02, transition: { duration: 0.52 } }
                                }
                            >
                                <div className="overflow-hidden">
                                    <motion.img
                                        src={post.image}
                                        alt={post.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="aspect-[5/4] w-full object-cover brightness-90"
                                        whileHover={
                                            prefersReducedMotion
                                                ? undefined
                                                : {
                                                      scale: 1.06,
                                                      transition: {
                                                          duration: 0.7,
                                                          ease: [0.42, 0, 0.58, 1],
                                                      },
                                                  }
                                        }
                                    />
                                </div>
                                <div className="flex flex-1 flex-col p-8">
                                    <time
                                        dateTime={post.date}
                                        className="text-[11px] uppercase tracking-[0.28em] text-[#d4af37]/85"
                                    >
                                        {post.date}
                                    </time>
                                    <h2 className="mt-5 font-display text-xl text-stone-100">
                                        {post.title}
                                    </h2>
                                    <p className="mt-4 flex-1 text-sm leading-relaxed text-stone-500">
                                        {post.excerpt}
                                    </p>
                                    <span className="mt-8 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.32em] text-stone-500 transition-colors group-hover:text-[#d4af37]/80">
                                        Read essay
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>
                            </motion.article>
                        </Link>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </section>
    );
}
