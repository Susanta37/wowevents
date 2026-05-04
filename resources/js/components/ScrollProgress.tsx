import {
    motion,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from 'framer-motion';
import { memo, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Thin gold vertical scroll progress (marketing shell only).
 */
export const ScrollProgress = memo(function ScrollProgress() {
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    const showNativeFallback = prefersReducedMotion || isMobile;

    useEffect(() => {
        if (showNativeFallback) {
            return;
        }

        document.documentElement.classList.add('marketing-hide-native-scrollbar');

        return () => {
            document.documentElement.classList.remove('marketing-hide-native-scrollbar');
        };
    }, [showNativeFallback]);

    const { scrollYProgress } = useScroll();
    const smooth = useSpring(scrollYProgress, {
        stiffness: 110,
        damping: 34,
        mass: 0.32,
    });

    const thumbTop = useTransform(smooth, [0, 1], ['4px', 'calc(100% - 15px)']);

    const [hoverTrack, setHoverTrack] = useState(false);

    if (prefersReducedMotion || isMobile) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed right-8 top-[24vh] z-[91] hidden h-[min(58vh,520px)] md:block xl:right-12">
            <button
                type="button"
                aria-hidden
                tabIndex={-1}
                className="pointer-events-none absolute inset-y-0 -left-10 -right-6 bg-transparent outline-none md:pointer-events-auto"
                onMouseEnter={() => setHoverTrack(true)}
                onMouseLeave={() => setHoverTrack(false)}
                onFocus={() => setHoverTrack(true)}
                onBlur={() => setHoverTrack(false)}
            />

            <motion.div
                className="relative mx-auto h-full origin-right w-[3px] overflow-hidden rounded-full bg-[#111]/95 shadow-[inset_0_0_0_1px_rgba(212,175,55,0.09)] backdrop-blur-sm"
                initial={false}
                animate={{
                    scaleX: hoverTrack ? 1.32 : 1,
                    boxShadow: hoverTrack
                        ? '0 0 16px rgba(212,175,55,0.18), inset 0 0 0 1px rgba(212,175,55,0.18)'
                        : 'inset 0 0 0 1px rgba(212,175,55,0.09)',
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    className="absolute inset-x-0 top-0 h-full w-full rounded-full bg-linear-to-b from-[#f3ecd6] via-[#d4af37] to-[#5a4c28]"
                    style={{
                        transformOrigin: 'top',
                        scaleY: smooth,
                        boxShadow: hoverTrack
                            ? '0 0 18px rgba(212,175,55,0.26), inset 0 0 0 1px rgba(212,175,55,0.16)'
                            : 'inset 0 0 0 1px rgba(212,175,55,0.12)',
                    }}
                />

                <motion.span
                    className="pointer-events-none absolute left-1/2 z-[2] h-[10px] w-[10px] rounded-full bg-[#d4af37]"
                    style={{
                        top: thumbTop,
                        x: '-50%',
                        y: '-50%',
                    }}
                    initial={false}
                    animate={{
                        scale: hoverTrack ? 1.14 : 1,
                        opacity: hoverTrack ? 1 : 0.88,
                        boxShadow: hoverTrack
                            ? '0 0 20px rgba(212,175,55,0.42)'
                            : '0 0 12px rgba(212,175,55,0.22)',
                    }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                />
            </motion.div>
        </div>
    );
});
