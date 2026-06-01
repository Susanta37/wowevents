import { Link } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

import type { BlogPostSummary } from './types';

const easeLuxury = [0.25, 0.46, 0.45, 0.94] as const;

type Props = {
    post: BlogPostSummary;
};

export function FeaturedPostSection({ post }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section className="relative border-b border-white/[0.05] bg-[#070707] px-6 py-16 lg:px-10 lg:py-24">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_55%)]"
            />

            <div className="relative mx-auto max-w-[1400px]">
                <div className="mb-10 flex items-center gap-3">
                    <span className="h-px w-8 bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37]/75">
                        Featured essay
                    </span>
                </div>

                <motion.div
                    initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                    whileInView={
                        prefersReducedMotion
                            ? undefined
                            : { opacity: 1, y: 0, transition: { duration: 0.85, ease: easeLuxury } }
                    }
                    viewport={{ once: true, margin: '-8%' }}
                >
                    <Link
                        href={`/blog/${post.slug}`}
                        prefetch
                        className="group grid overflow-hidden rounded-3xl border border-white/[0.06] bg-[#0a0a0a] lg:grid-cols-[1.1fr_1fr]"
                    >
                        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
                            <img
                                src={post.image}
                                alt={post.title}
                                loading="eager"
                                decoding="async"
                                className="h-full w-full object-cover brightness-[0.65] transition-all duration-700 group-hover:scale-105 group-hover:brightness-[0.75]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]/40 lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0a0a]/80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-transparent lg:hidden" />
                        </div>

                        <div className="relative flex flex-col justify-center p-8 lg:p-12 xl:p-14">
                            <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-stone-500">
                                <Clock className="h-3.5 w-3.5 text-[#d4af37]/50" />
                                <time dateTime={post.date}>{post.date}</time>
                            </div>
                            <h2 className="font-display text-2xl leading-tight text-stone-100 transition-colors duration-500 group-hover:text-white md:text-3xl lg:text-4xl">
                                {post.title}
                            </h2>
                            <p className="mt-5 max-w-lg text-sm leading-relaxed text-stone-500 md:text-base">
                                {post.excerpt}
                            </p>
                            <span className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-[#d4af37]/80 transition-all duration-500 group-hover:gap-3 group-hover:text-[#d4af37]">
                                Read the full essay
                                <ArrowUpRight className="h-3.5 w-3.5" />
                            </span>
                            <div
                                aria-hidden="true"
                                className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-[#d4af37]/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 lg:left-12 lg:right-12"
                            />
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
