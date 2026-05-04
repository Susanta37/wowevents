import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { StaggerContainer, StaggerItem } from '@/components/SectionWrapper';

import type { BlogPostSummary } from './types';

type Props = {
    posts: BlogPostSummary[];
};

export function PostsGridSection({ posts }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="mx-auto max-w-[1400px] px-6 pt-14 pb-20 lg:px-10 lg:pb-24">
            <StaggerContainer className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <StaggerItem key={post.slug}>
                        <Link href={`/blog/${post.slug}`} prefetch className="block">
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
                                        alt=""
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
                                    <span className="mt-8 text-[10px] uppercase tracking-[0.32em] text-stone-500">
                                        Read essay
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
