export const SITE_CONTACT = {
    email: 'wowevents2010@gmail.com',
    phoneDisplay: '92396 05654',
    /** WhatsApp / dial (India) */
    phoneE164: '+919239605654',
    whatsappDigits: '919239605654',
    addressLine:
        '3RD, FLAT NO. 3B, 3/19, VIDYASAGAR COLONY, KOLKATA, Kolkata, West Bengal, 700047',
    /** Compact address for narrow UI (nav strip, cards) */
    addressShort: 'Flat 3B, Vidyasagar Colony, Kolkata 700047',
} as const;

export function whatsappChatUrl(prefill?: string): string {
    const base = `https://wa.me/${SITE_CONTACT.whatsappDigits}`;

    if (!prefill?.trim()) {
        return base;
    }

    return `${base}?text=${encodeURIComponent(prefill)}`;
}
