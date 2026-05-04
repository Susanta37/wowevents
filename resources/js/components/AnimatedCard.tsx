import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimatedCardProps = {
    children: ReactNode;
    className?: string;
};

export function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            whileHover={{
                scale: 1.02,
                y: -6,
                transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] },
            }}
            whileTap={{ scale: 0.99 }}
            transition={{
                duration: 0.55,
                ease: [0.42, 0, 0.58, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
