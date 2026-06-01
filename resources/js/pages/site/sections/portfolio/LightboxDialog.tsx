import { useCallback, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, Link2, Share2 } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';

import type { PortfolioItem } from './types';
import { itemShareUrl } from './utils';

type Props = {
    item: PortfolioItem | null;
    onOpenChange: (open: boolean) => void;
};

export function LightboxDialog({ item, onOpenChange }: Props) {
    const prefersReducedMotion = useReducedMotion();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setCopied(false);
    }, [item?.slug]);

    const shareLink = useCallback(async () => {
        if (!item) {
            return;
        }

        const url = itemShareUrl(item);

        try {
            if (typeof navigator !== 'undefined' && navigator.share) {
                await navigator.share({
                    title: item.title,
                    text: `${item.title} — WOW Events`,
                    url,
                });

                return;
            }

            await navigator.clipboard.writeText(url);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2200);
        } catch {
            try {
                await navigator.clipboard.writeText(url);
                setCopied(true);
                window.setTimeout(() => setCopied(false), 2200);
            } catch {
                // Clipboard unavailable — silent fail
            }
        }
    }, [item]);

    return (
        <Dialog open={!!item} onOpenChange={onOpenChange}>
            <DialogContent className="max-h-[calc(100vh-1.5rem)] w-[min(96vw,1280px)] max-w-none overflow-hidden rounded-[1.75rem] border border-[#d4af37]/20 bg-[#080808]/95 p-0 text-stone-200 shadow-[0_0_160px_-50px_rgb(212_175_55_/_0.55)] backdrop-blur-xl sm:rounded-[2rem] [&>button]:right-4 [&>button]:top-4 [&>button]:z-20 [&>button]:rounded-full [&>button]:border [&>button]:border-white/10 [&>button]:bg-[#0a0a0a]/70 [&>button]:p-2.5 [&>button]:text-stone-400 [&>button]:backdrop-blur-md [&>button]:hover:border-[#d4af37]/25 [&>button]:hover:bg-[#d4af37]/10 [&>button]:hover:text-[#d4af37]">
                <DialogTitle className="sr-only">
                    {item?.title ?? 'Portfolio image'}
                </DialogTitle>
                {item && (
                    <motion.div
                        initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.98 }}
                        animate={
                            prefersReducedMotion
                                ? undefined
                                : {
                                      opacity: 1,
                                      scale: 1,
                                      transition: {
                                          duration: 0.55,
                                          ease: [0.42, 0, 0.58, 1],
                                      },
                                  }
                        }
                        className="flex max-h-[calc(100vh-1.5rem)] flex-col"
                    >
                        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-[#050505] p-3 sm:p-5">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_65%)]"
                            />
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-6 rounded-[1.25rem] border border-[#d4af37]/10 sm:inset-8"
                            />
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="relative z-10 max-h-[min(82vh,920px)] w-full object-contain"
                                loading="eager"
                            />
                        </div>

                        <div className="relative border-t border-white/[0.06] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/98 to-[#0a0a0a]/90 px-5 py-5 sm:px-8 sm:py-6">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent"
                            />

                            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-[0.35em] text-[#d4af37]/85 sm:text-[11px]">
                                        {item.category}
                                    </p>
                                    <p className="mt-3 font-display text-2xl leading-tight text-stone-100 sm:text-3xl lg:text-4xl">
                                        {item.title}
                                    </p>
                                    {item.subtitle && (
                                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone-400 sm:text-base">
                                            {item.subtitle}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => void shareLink()}
                                    className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-[#d4af37]/25 bg-[#d4af37]/5 px-5 py-3 text-[10px] uppercase tracking-[0.28em] text-[#d4af37] transition-all duration-500 hover:border-[#d4af37]/45 hover:bg-[#d4af37]/10 hover:shadow-[0_0_40px_-12px_rgb(212_175_55_/_0.45)] sm:px-6"
                                >
                                    {copied ? (
                                        <Check className="h-3.5 w-3.5" />
                                    ) : (
                                        <Share2 className="h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-110" />
                                    )}
                                    <span>{copied ? 'Link copied' : 'Share link'}</span>
                                    <Link2 className="hidden h-3 w-3 opacity-40 sm:block" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </DialogContent>
        </Dialog>
    );
}
