export function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-white/[0.06] pb-28 pt-24 lg:pt-28">
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgb(212_175_55_/_0.16)_0%,transparent_50%),radial-gradient(circle_at_90%_20%,rgb(59_47_47_/_0.5)_0%,transparent_55%)]"
            />
            <div className="relative mx-auto max-w-[840px] px-6 text-center lg:px-10">
                <p className="text-[11px] uppercase tracking-[0.52em] text-[#d4af37]/85">
                    Reservations
                </p>
                <h1 className="mt-10 font-display text-4xl text-stone-100 md:text-[2.9rem]">
                    Curate my evening with discretion
                </h1>
                <p className="mx-auto mt-8 max-w-xl text-stone-500">
                    Share the tenor of your affair. We reciprocate with a refined concept brief and
                    curator conversation—typically within forty-eight candlelit hours.
                </p>
            </div>
        </section>
    );
}
