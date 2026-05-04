import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { SITE_CONTACT, whatsappChatUrl } from '@/constants/site-contact';
import { cn } from '@/lib/utils';

/** Always show the strip when scroll is at or above the top of the page. */
const SCROLL_TOP_REVEAL_PX = 32;
/** Below this point, visibility follows scroll direction (not position). */
const SCROLL_DIRECTION_ZONE_PX = 72;
/** Ignore tiny wheel jitter; larger = fewer accidental toggles. */
const SCROLL_DELTA_PX = 10;

/**
 * Contact / address row above the main navbar. Hides while scrolling down,
 * reappears near the top of the page or when scrolling up.
 */
function initialStripVisible(): boolean {
    if (typeof window === 'undefined') {
        return true;
    }

    return window.scrollY < SCROLL_DIRECTION_ZONE_PX;
}

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

    const linkMuted =
        'inline-flex max-w-full items-center gap-2 text-stone-500 transition-colors hover:text-[#d4af37]';

    return (
        <div
            aria-hidden={!visible}
            className={cn(
                'overflow-hidden border-b border-white/[0.06] bg-[#060606]/95 backdrop-blur-sm',
                'transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none',
                visible
                    ? 'max-h-[280px] opacity-100'
                    : 'pointer-events-none max-h-0 border-transparent opacity-0',
            )}
        >
            <div className="text-[11px] leading-snug text-stone-500">
                <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-2 px-4 py-2.5 text-center sm:px-6 lg:flex-row lg:flex-wrap lg:items-start lg:justify-between lg:gap-x-10 lg:gap-y-1 lg:px-10 lg:text-left">
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 lg:justify-start lg:gap-x-6">
                        <a
                            href={`mailto:${SITE_CONTACT.email}`}
                            className={linkMuted}
                            title={SITE_CONTACT.email}
                            tabIndex={visible ? undefined : -1}
                        >
                            <Mail className="size-3.5 shrink-0 text-[#d4af37]/60" />
                            <span className="truncate font-medium tracking-wide">
                                {SITE_CONTACT.email}
                            </span>
                        </a>
                        <span
                            className="hidden h-3 w-px shrink-0 bg-white/15 sm:inline"
                            aria-hidden
                        />
                        <a
                            href={`tel:${SITE_CONTACT.phoneE164}`}
                            className={linkMuted}
                            tabIndex={visible ? undefined : -1}
                        >
                            <Phone className="size-3.5 shrink-0 text-[#d4af37]/60" />
                            <span className="whitespace-nowrap font-medium tracking-wider tabular-nums">
                                {SITE_CONTACT.phoneDisplay}
                            </span>
                        </a>
                        <span
                            className="hidden h-3 w-px shrink-0 bg-white/15 lg:inline"
                            aria-hidden
                        />
                        <a
                            href={waBare}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`hidden lg:inline-flex ${linkMuted}`}
                            tabIndex={visible ? undefined : -1}
                        >
                            <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#d4af37]/80">
                                WhatsApp
                            </span>
                        </a>
                    </div>
                    <p className="flex max-w-2xl items-start justify-center gap-2 text-pretty lg:justify-end lg:text-end">
                        <MapPin className="mt-0.5 size-3.5 shrink-0 text-[#d4af37]/55 lg:mt-px" />
                        <span>{SITE_CONTACT.addressLine}</span>
                    </p>
                    <a
                        href={waBare}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`lg:hidden ${linkMuted}`}
                        tabIndex={visible ? undefined : -1}
                    >
                        <span className="font-sans text-[10px] uppercase tracking-[0.28em] text-[#d4af37]/80">
                            WhatsApp chat
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
