import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

const easePremium = [0.42, 0, 0.58, 1] as const;

const fadeSlide = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: easePremium },
    },
};

type SectionWrapperProps = {
    children: ReactNode;
    className?: string;
    id?: string;
};

export function SectionWrapper({
    children,
    className = '',
    id,
}: SectionWrapperProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return (
            <section id={id} className={className}>
                {children}
            </section>
        );
    }

    return (
        <motion.section
            id={id}
            className={className}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-12% 0px' }}
            variants={fadeSlide}
        >
            {children}
        </motion.section>
    );
}

const staggerParent = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.08,
        },
    },
};

const staggerChild = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: easePremium },
    },
};

type StaggerContainerProps = {
    children: ReactNode;
    className?: string;
};

export function StaggerContainer({
    children,
    className = '',
}: StaggerContainerProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10% 0px' }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = '',
}: {
    children: ReactNode;
    className?: string;
}) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div variants={staggerChild} className={className}>
            {children}
        </motion.div>
    );
}
