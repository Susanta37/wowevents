import { useReducedMotion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { SITE_CONTACT, whatsappChatUrl } from '@/constants/site-contact';

const SCROLL_SHOW_PX = 360;

const WA_MESSAGE_DEFAULT = `Hello WOW Events,

I'd like to enquire about an event. Please see my details:

• Event type:
• Preferred date(s):
• City / venue area:
• Approx. guest count:
• Brief note:

Thank you — I look forward to hearing from you.`;

const WA_MESSAGE_WEDDING = `Hello WOW Events,

We're planning our wedding and would love your boutique curation.

• Tentative date(s):
• City / venue preference:
• Guest count:
• Ceremony + reception:

Please advise next steps for a curator call.`;

const WA_MESSAGE_CORPORATE = `Hello WOW Events,

We're organising a corporate milestone / gala.

• Occasion type:
• Target quarter / date window:
• City:
• Estimated guest count:
• Venue status (secured / exploring):

I'd appreciate a tailored concept outline when possible.`;

const TEMPLATE_OPTIONS: { label: string; body: string }[] = [
    { label: 'General', body: WA_MESSAGE_DEFAULT },
    { label: 'Wedding', body: WA_MESSAGE_WEDDING },
    { label: 'Corporate', body: WA_MESSAGE_CORPORATE },
];

/** WhatsApp mark (brand-style simplified path). */
function WhatsAppGlyph({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.239-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
    );
}

export function SiteFloatingWidgets() {
    const prefersReducedMotion = useReducedMotion();
    const [showTop, setShowTop] = useState(false);
    const [whatsappOpen, setWhatsappOpen] = useState(false);
    const [waDraft, setWaDraft] = useState(WA_MESSAGE_DEFAULT);

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > SCROLL_SHOW_PX);

        onScroll();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function openWhatsAppWithDraft() {
        const text = waDraft.trim();
        const url = whatsappChatUrl(text.length ? text : undefined);

        window.open(url, '_blank', 'noopener,noreferrer');

        setWhatsappOpen(false);
    }

    return (
        <>
            <div className="pointer-events-none fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
                {showTop && (
                    <button
                        type="button"
                        onClick={() =>
                            window.scrollTo({
                                top: 0,
                                behavior: prefersReducedMotion
                                    ? 'auto'
                                    : 'smooth',
                            })
                        }
                        className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-[#d4af37]/45 bg-[#0a0a0a]/90 text-[#d4af37] shadow-[0_8px_32px_-12px_rgb(212_175_55_/_0.45)] backdrop-blur-md transition-all duration-300 hover:border-[#d4af37]/65 hover:bg-[#d4af37]/15 hover:shadow-[0_12px_40px_-8px_rgb(212_175_55_/_0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]/70 md:size-12"
                        aria-label="Back to top"
                    >
                        <ChevronUp
                            className="size-5 md:size-[22px]"
                            strokeWidth={2}
                        />
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => {
                        setWaDraft(WA_MESSAGE_DEFAULT);
                        setWhatsappOpen(true);
                    }}
                    className="pointer-events-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-14px_rgb(37_211_102_/_0.65)] ring-2 ring-white/25 transition-all duration-300 hover:brightness-105 hover:ring-white/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:h-[3.75rem] md:w-[3.75rem]"
                    aria-label={`Write a WhatsApp message to ${SITE_CONTACT.phoneDisplay}`}
                >
                    <WhatsAppGlyph className="size-7 md:size-8" />
                </button>
            </div>

            <Dialog open={whatsappOpen} onOpenChange={setWhatsappOpen}>
                <DialogContent className="max-h-[min(90vh,640px)] overflow-y-auto border-white/10 bg-[#0c0c0c] text-stone-200 sm:max-w-md [&_[data-slot=dialog-close]>svg]:text-stone-400">
                    <DialogHeader>
                        <DialogTitle className="font-display tracking-wide text-stone-100">
                            Message on WhatsApp
                        </DialogTitle>
                        <DialogDescription className="text-left text-stone-500">
                            Choose a starter, edit below, then continue — we will
                            open WhatsApp ({SITE_CONTACT.phoneDisplay}) with
                            your text prefilled.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3">
                        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500">
                            Starter templates
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {TEMPLATE_OPTIONS.map(({ label, body }) => (
                                <button
                                    key={label}
                                    type="button"
                                    onClick={() => setWaDraft(body)}
                                    className={`rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider transition-colors ${
                                        waDraft === body
                                            ? 'border-[#25D366]/55 bg-[#25D366]/12 text-[#b8f7cc]'
                                            : 'border-white/12 bg-white/[0.03] text-stone-400 hover:border-white/25 hover:text-stone-200'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>

                        <label
                            htmlFor="wa-draft"
                            className="mt-4 block text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500"
                        >
                            Your message
                        </label>
                        <textarea
                            id="wa-draft"
                            value={waDraft}
                            onChange={(e) => setWaDraft(e.target.value)}
                            rows={11}
                            className="min-h-[180px] w-full resize-y rounded-xl border border-white/10 bg-black/35 px-3 py-3 text-[13px] leading-relaxed text-stone-200 placeholder:text-stone-600 focus:border-[#25D366]/45 focus:outline-none focus:ring-1 focus:ring-[#25D366]/30"
                            placeholder="Type your enquiry…"
                            spellCheck
                        />
                    </div>

                    <DialogFooter className="gap-2 sm:gap-2">
                        <button
                            type="button"
                            onClick={() => setWhatsappOpen(false)}
                            className="inline-flex h-10 flex-1 items-center justify-center rounded-xl border border-white/12 px-4 text-sm font-medium text-stone-300 transition-colors hover:bg-white/[0.04] sm:flex-initial"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            onClick={openWhatsAppWithDraft}
                            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-semibold text-white shadow-inner transition-colors hover:bg-[#20bd5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
                        >
                            <WhatsAppGlyph className="size-4 shrink-0" />
                            Continue to WhatsApp
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
