import { Link } from '@inertiajs/react';

import type { BlogPostSummary } from './types';

type Props = {
    related: BlogPostSummary[];
};

export function RelatedPostsSection({ related }: Props) {
    if (related.length === 0) {
        return null;
    }

    return (
        <section className="border-t border-white/[0.06] bg-[#070707] pt-14 pb-24 lg:pt-16 lg:pb-28">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                <h2 className="font-display text-2xl text-stone-100">Related</h2>
                <div className="mt-14 grid gap-10 md:grid-cols-2">
                    {related.map((r) => (
                        <Link
                            key={r.slug}
                            href={`/blog/${r.slug}`}
                            prefetch
                            className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-10 transition-colors duration-500 hover:border-[#d4af37]/35"
                        >
                            <p className="text-[11px] uppercase tracking-[0.26em] text-[#d4af37]/80">
                                {r.date}
                            </p>
                            <p className="mt-6 font-display text-xl text-stone-100 transition-colors duration-500 group-hover:text-[#f2e8c9]">
                                {r.title}
                            </p>
                            <p className="mt-4 text-sm text-stone-500">{r.excerpt}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
