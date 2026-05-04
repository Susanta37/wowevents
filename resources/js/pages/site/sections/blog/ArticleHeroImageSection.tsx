type Props = {
    src: string;
    alt: string;
};

export function ArticleHeroImageSection({ src, alt }: Props) {
    return (
        <div className="mx-auto mt-14 max-w-[1100px] overflow-hidden px-6 lg:px-10">
            <img
                src={src}
                alt={alt}
                loading="eager"
                decoding="async"
                className="max-h-[min(68vh,640px)] w-full rounded-[1.75rem] object-cover brightness-95"
            />
        </div>
    );
}
