import { motion, useReducedMotion } from 'framer-motion';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';

import type { PortfolioItem } from './types';

type Props = {
    item: PortfolioItem | null;
    onOpenChange: (open: boolean) => void;
};

export function LightboxDialog({ item, onOpenChange }: Props) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <Dialog open={!!item} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[min(940px,calc(100vw-3rem))] overflow-hidden rounded-3xl border border-[#d4af37]/25 bg-[#0f0f0f] p-0 text-stone-200 shadow-[0_0_120px_-40px_rgb(212_175_55_/_0.5)] [&>button]:text-stone-400 [&>button]:hover:bg-white/10">
                <DialogTitle className="sr-only">
                    {item?.title ?? 'Portfolio image'}
                </DialogTitle>
                {item && (
                    <motion.div
                        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.985 }}
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      scale: 1,
                                      transition: {
                                          duration: 0.52,
                                          ease: [0.42, 0, 0.58, 1],
                                      },
                                  }
                        }
                    >
                        <div className="relative">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="max-h-[min(78vh,880px)] w-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent p-10 pt-36">
                                <p className="text-[11px] uppercase tracking-[0.32em] text-[#d4af37]/90">
                                    {item.category}
                                </p>
                                <p className="mt-4 font-display text-3xl text-stone-100">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
}
