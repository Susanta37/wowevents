export type CompanyPhone = {
    /** Human-readable label, e.g. +91 4771 7058 */
    display: string;
    /** tel: href value */
    e164: string;
};

export const SITE_CONTACT = {
    email: 'wowevents2010@gmail.com',
    /** Primary mobile — navbar, WhatsApp, footer */
    phoneDisplay: '81000 73675',
    phoneE164: '+918100073675',
    whatsappDigits: '918100073675',
    /** Landline / company lines (contact page) */
    companyNumbers: [
        { display: '+91 9147717058', e164: '+919147717058' },
        { display: '+91 9147717059', e164: '+919147717059' },
        { display: '+91 9147717068', e164: '+919147717068' },
        { display: '+91 9147717069', e164: '+919147717069' },
    ] satisfies CompanyPhone[],
    addressLine:
        '3RD, FLAT NO. 3B, 3/19, VIDYASAGAR COLONY, KOLKATA, Kolkata, West Bengal, 700047',
    addressShort: 'Flat 3B, Vidyasagar Colony, Kolkata 700047',
} as const;

export function whatsappChatUrl(prefill?: string): string {
    const base = `https://wa.me/${SITE_CONTACT.whatsappDigits}`;

    if (!prefill?.trim()) {
        return base;
    }

    return `${base}?text=${encodeURIComponent(prefill)}`;
}
