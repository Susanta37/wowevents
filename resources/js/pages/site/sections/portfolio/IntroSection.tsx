type Props = {
    filters: string[];
    active: string;
    setActive: (f: string) => void;
};

export function IntroSection({ filters, active, setActive }: Props) {
    return (
        <section className="border-b border-white/[0.06] pb-24 pt-24 lg:pt-28">
            <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
                <p className="text-[11px] uppercase tracking-[0.55em] text-[#d4af37]/85">
                    Portfolio
                </p>
                <h1 className="mt-10 max-w-3xl font-display text-4xl text-stone-100 md:text-5xl">
                    Atmospheres we have composed
                </h1>
                <p className="mt-8 max-w-2xl text-stone-500">
                    Filter by signature typologies. Each frame is a quiet promise of what we can
                    inhabit with you.
                </p>
                <div className="mt-14 flex flex-wrap gap-3">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setActive(f)}
                            className={`rounded-full border px-6 py-2 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 ${
                                active === f
                                    ? 'border-[#d4af37]/55 bg-[#d4af37]/12 text-[#e8dfc4] shadow-[0_0_32px_-8px_rgb(212_175_55_/_0.45)]'
                                    : 'border-white/10 bg-transparent text-stone-500 hover:border-[#d4af37]/30 hover:text-stone-200'
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
