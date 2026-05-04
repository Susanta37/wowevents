export function HeroIntroSection() {
    return (
        <section className="relative overflow-hidden border-b border-white/[0.06] pb-28 pt-24 md:pb-36 lg:pt-28">
            <div
                aria-hidden
                className="absolute inset-y-16 start-[-10%] w-[46%] rotate-[-6deg] rounded-[2.5rem] border border-[#d4af37]/14 bg-linear-to-br from-[#16110d]/80 to-transparent blur-[3px]"
            />
            <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
                <p className="text-[11px] uppercase tracking-[0.55em] text-[#d4af37]/85">
                    Capabilities
                </p>
                <h1 className="mt-10 max-w-3xl font-display text-4xl text-stone-100 md:text-5xl">
                    Every detail composed like a screenplay
                </h1>
                <p className="mt-10 max-w-2xl leading-relaxed text-stone-500">
                    Planning, artistry, choreography—woven so your guests perceive only seamless
                    atmosphere. Hover each chapter to glimpse how we deepen the craft.
                </p>
            </div>
        </section>
    );
}
