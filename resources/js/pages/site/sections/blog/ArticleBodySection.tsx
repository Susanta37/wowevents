import { SectionWrapper } from '@/components/SectionWrapper';

import type { BlogPostArticle } from './types';

type Props = {
    post: BlogPostArticle;
};

export function ArticleBodySection({ post }: Props) {
    return (
        <SectionWrapper className="mx-auto max-w-[740px] px-6 pb-28 pt-14 lg:px-10 lg:pb-36">
            <div
                className="luxury-scrollbar space-y-10 text-[1.0625rem] leading-[1.92] tracking-[0.01em] text-stone-400 [&_p]:text-pretty [&_strong]:font-medium [&_strong]:text-stone-300"
                dangerouslySetInnerHTML={{ __html: post.body }}
            />
        </SectionWrapper>
    );
}
