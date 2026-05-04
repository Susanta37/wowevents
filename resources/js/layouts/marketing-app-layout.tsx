import { usePage } from '@inertiajs/react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

import { CustomCursor } from '@/components/CustomCursor';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ScrollProgress } from '@/components/ScrollProgress';
import { SiteFloatingWidgets } from '@/components/SiteFloatingWidgets';

type MarketingAppLayoutProps = {
    children: ReactNode;
};

/**
 * Public marketing layout (luxury WOW Events site).
 * Maps to the requested reusable AppLayout pattern.
 */
export default function MarketingAppLayout({
    children,
}: MarketingAppLayoutProps) {
    const { url } = usePage();
    const path = typeof url === 'string' ? url.split('?')[0] ?? url : '';
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="luxury-scrollbar min-h-screen bg-luxury-black text-stone-200">
            <CustomCursor />
            <ScrollProgress />
            <Navbar />
            <SiteFloatingWidgets />
            {prefersReducedMotion ? (
                <main className="min-h-[50vh]">{children}</main>
            ) : (
                <motion.main
                    key={path}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.65,
                        ease: [0.42, 0, 0.58, 1],
                    }}
                    className="min-h-[50vh]"
                >
                    {children}
                </motion.main>
            )}
            <Footer />
        </div>
    );
}
