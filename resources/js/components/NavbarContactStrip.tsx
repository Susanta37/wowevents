import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { SITE_CONTACT, whatsappChatUrl } from '@/constants/site-contact';
import { cn } from '@/lib/utils';

/** Always show the strip when scroll is at or above the top of the page. */
const SCROLL_TOP_REVEAL_PX = 32;
/** Below this point, visibility follows scroll direction (not position). */
const SCROLL_DIRECTION_ZONE_PX = 72;
/** Ignore tiny wheel jitter; larger = fewer accidental toggles. */
const SCROLL_DELTA_PX = 10;

function initialStripVisible(): boolean {
    if (typeof window === 'undefined') {
        return true;
    }

    return window.scrollY < SCROLL_DIRECTION_ZONE_PX;
}

const tapRow =
    'inline-flex min-h-[44px] w-full max-w-full items-center justify-center gap-2 rounded-lg px-2 py-2.5 text-left transition-colors hover:bg-white/[0.04] hover:text-[#d4af37] sm:min-h-0 sm:w-auto sm:justify-start sm:rounded-none sm:px-0 sm:py-0 sm:hover:bg-transparent';

/**
 * Contact / address row above the main navbar. Hides while scrolling down,
 * reappears near the top of the page or when scrolling up.
 */
export function NavbarContactStrip() {
    const [visible, setVisible] = useState(initialStripVisible);
    const lastY = useRef(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        lastY.current = window.scrollY;

        const applyScroll = () => {
            const y = window.scrollY;
            const delta = y - lastY.current;

            lastY.current = y;

            setVisible((prev) => {
                if (y <= SCROLL_TOP_REVEAL_PX) {
                    return true;
                }

                if (y < SCROLL_DIRECTION_ZONE_PX) {
                    return prev;
                }

                if (delta > SCROLL_DELTA_PX) {
                    return false;
                }

                if (delta < -SCROLL_DELTA_PX) {
                    return true;
                }

                return prev;
            });
        };

        const onScroll = () => {
            if (rafRef.current !== null) {
                return;
            }

            rafRef.current = window.requestAnimationFrame(() => {
                rafRef.current = null;
                applyScroll();
            });
        };

        applyScroll();

        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);

            if (rafRef.current !== null) {
                window.cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    const waBare = whatsappChatUrl();

    const linkMuted = cn(
        'text-stone-500 transition-colors hover:text-[#d4af37]',
        tapRow,
        // Mobile: icon-only buttons
        'sm:py-0 sm:px-0 sm:w-auto sm:min-h-0 sm:rounded-none',
    );

    return (
        <div
            aria-hidden={!visible}
            className={cn(
                'overflow-hidden border-b border-white/[0.06] bg-[#060606]/95 backdrop-blur-sm',
                'transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none',
                visible
                    ? 'max-h-[min(72vh,520px)] opacity-100 sm:max-h-[300px] lg:max-h-[280px]'
                    : 'pointer-events-none max-h-0 border-transparent opacity-0',
            )}
        >
            <div className="text-[11px] leading-snug text-stone-500">
                <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-3 py-3 sm:gap-2 sm:px-5 sm:py-2.5 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-10 lg:px-10">
                    <div className="flex w-full items-center justify-center gap-2 sm:w-auto sm:flex-wrap sm:justify-center sm:gap-x-4 lg:justify-start lg:gap-x-6">
                        <a
                            href={`mailto:${SITE_CONTACT.email}`}
                            className={cn(
                                linkMuted,
                                'w-11 justify-center gap-0 sm:w-auto sm:justify-start sm:gap-2',
                            )}
                            title={SITE_CONTACT.email}
                            tabIndex={visible ? undefined : -1}
                        >
                            <Mail className="size-4 shrink-0 text-[#d4af37]/60 sm:size-3.5" />
                            <span className="sr-only">Email</span>
                            <span className="hidden min-w-0 flex-1 truncate font-medium tracking-wide sm:inline sm:max-w-[14rem] lg:max-w-none">
                                {SITE_CONTACT.email}
                            </span>
                        </a>
                        <a
                            href={`tel:${SITE_CONTACT.phoneE164}`}
                            className={cn(
                                linkMuted,
                                'w-11 justify-center gap-0 sm:w-auto sm:justify-start sm:gap-2',
                            )}
                            tabIndex={visible ? undefined : -1}
                        >
                            <Phone className="size-4 shrink-0 text-[#d4af37]/60 sm:size-3.5" />
                            <span className="sr-only">Call</span>
                            <span className="hidden whitespace-nowrap font-medium tabular-nums tracking-wider sm:inline">
                                +91 {SITE_CONTACT.phoneDisplay}
                            </span>
                        </a>
                        <a
                            href={waBare}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                                linkMuted,
                                'w-11 justify-center gap-0 font-sans text-[10px] uppercase tracking-[0.26em] text-[#d4af37]/85 sm:w-auto sm:justify-start sm:gap-2',
                            )}
                            tabIndex={visible ? undefined : -1}
                        >
                            {/* Keep text only on sm+; on mobile show icon-only */}
                            <MessageCircle
                                className="size-4 shrink-0 text-[#d4af37]/60 sm:size-3.5"
                                aria-hidden
                            />
                            <span className="sr-only">WhatsApp</span>
                            <span className="hidden whitespace-nowrap font-medium tabular-nums tracking-wider sm:inline">
                                WhatsApp · +91 {SITE_CONTACT.phoneDisplay}
                            </span>
                        </a>
                    </div>

                    <p className="flex w-full items-start justify-center gap-2 text-pretty text-[10px] leading-relaxed sm:text-[11px] lg:max-w-xl lg:justify-end lg:text-end lg:text-[11px]">
                        <MapPin
                            className="mt-0.5 size-4 shrink-0 text-[#d4af37]/55 sm:size-3.5 lg:mt-px"
                            aria-hidden
                        />
                        <span className="text-left lg:text-end">
                            <span className="lg:hidden">{SITE_CONTACT.addressShort}</span>
                            <span className="hidden lg:inline">{SITE_CONTACT.addressLine}</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
