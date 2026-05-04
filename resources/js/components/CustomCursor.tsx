import { useReducedMotion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type HoverKind = 'default' | 'interactive' | 'image';

const LERP_INNER = 0.2;
const LERP_RING = 0.082;

function pickHoverKind(target: EventTarget | null): HoverKind {
    if (!(target instanceof Element)) {
        return 'default';
    }

    if (target.closest('img,[data-cursor-image]')) {
        return 'image';
    }

    if (
        target.closest(
            'a[href],button,input,select,textarea,[role="button"],[role="link"],label[for]',
        )
    ) {
        return 'interactive';
    }

    return 'default';
}

function CursorInner() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const targetRef = useRef({ x: -128, y: -128 });
    const innerPos = useRef({ x: -128, y: -128 });
    const outerPos = useRef({ x: -128, y: -128 });
    const hoverKindRef = useRef<HoverKind>('default');
    const pressingRef = useRef(false);

    const rafRef = useRef(0);
    const [alive, setAlive] = useState(false);

    useEffect(() => {
        document.documentElement.classList.add('marketing-cursor-active');

        const apply = () => {
            const d = dotRef.current;
            const r = ringRef.current;

            if (!d || !r) {
                return;
            }

            const ix = innerPos.current.x;
            const iy = innerPos.current.y;
            const ox = outerPos.current.x;
            const oy = outerPos.current.y;
            const kind = hoverKindRef.current;
            const press = pressingRef.current;

            let ringScale = 1;
            let dotBase = 4;
            let ringOpacity = 0.74;
            let dotOpacity = 0.93;
            let borderAlpha = 0.82;

            switch (kind) {
                case 'interactive':
                    ringScale = 1.22;
                    dotBase = 4.85;
                    ringOpacity = 0.96;
                    borderAlpha = 0.95;
                    break;
                case 'image':
                    ringScale = 1.13;
                    dotBase = 5.1;
                    ringOpacity = 0.54;
                    dotOpacity = 0.72;
                    borderAlpha = 0.48;
                    break;
                default:
                    break;
            }

            const side = `${32 * ringScale}px`;
            const ringShadow =
                kind === 'interactive'
                    ? '0 0 22px 2px rgba(212,175,55,0.34), 0 0 52px rgba(212,175,55,0.12)'
                    : kind === 'image'
                      ? '0 0 14px rgba(212,175,55,0.14)'
                      : 'none';

            r.style.transform = `translate3d(${ox}px, ${oy}px, 0) translate(-50%, -50%)`;
            r.style.width = side;
            r.style.height = side;
            r.style.opacity = String(ringOpacity);
            r.style.borderColor = `rgba(212, 175, 55, ${borderAlpha})`;
            r.style.boxShadow = ringShadow;

            const ds =
                dotBase *
                (press
                    ? 0.9
                    : kind === 'interactive'
                      ? 1.04
                      : kind === 'image'
                        ? 1.08
                        : 1);

            d.style.width = `${ds}px`;
            d.style.height = `${ds}px`;
            d.style.opacity = String(dotOpacity);
            d.style.transform = `translate3d(${ix}px, ${iy}px, 0) translate(-50%, -50%)`;
        };

        const tick = () => {
            const tx = targetRef.current.x;
            const ty = targetRef.current.y;

            innerPos.current.x += (tx - innerPos.current.x) * LERP_INNER;
            innerPos.current.y += (ty - innerPos.current.y) * LERP_INNER;

            outerPos.current.x += (tx - outerPos.current.x) * LERP_RING;
            outerPos.current.y += (ty - outerPos.current.y) * LERP_RING;

            apply();
            rafRef.current = requestAnimationFrame(tick);
        };

        const onMove = (e: MouseEvent) => {
            targetRef.current.x = e.clientX;
            targetRef.current.y = e.clientY;

            const next = pickHoverKind(e.target);

            if (next !== hoverKindRef.current) {
                hoverKindRef.current = next;
            }

            setAlive(true);
        };

        const onDown = () => {
            pressingRef.current = true;
        };

        const onUp = () => {
            pressingRef.current = false;
        };

        const onLeave = () => setAlive(false);

        window.addEventListener('mousemove', onMove, { passive: true });
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        document.documentElement.addEventListener('mouseleave', onLeave);

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            document.documentElement.classList.remove('marketing-cursor-active');
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.documentElement.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <div
            aria-hidden
            data-active={alive}
            className="pointer-events-none fixed inset-0 z-[9998] isolate mix-blend-normal data-[active=false]:invisible data-[active=false]:opacity-0"
        >
            <div
                ref={ringRef}
                className="pointer-events-none absolute left-0 top-0 box-border rounded-full border-[1px] border-solid border-[rgba(212,175,55,0.82)] bg-transparent will-change-[transform,width,height]"
            />
            <div
                ref={dotRef}
                className="pointer-events-none absolute left-0 top-0 rounded-full bg-[#D4AF37] shadow-[0_0_14px_rgba(212,175,55,0.22)] will-change-[transform,width,height]"
                style={{
                    transform: `translate(-128px, -128px) translate(-50%, -50%)`,
                    width: 4,
                    height: 4,
                }}
            />
        </div>
    );
}

/** Premium custom cursor — disabled on narrow viewports and when reduced-motion is on. */
export const CustomCursor = memo(function CustomCursor() {
    const isMobile = useIsMobile();
    const prefersReducedMotion = useReducedMotion();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        let canceled = false;
        const idle = typeof window.requestIdleCallback === 'function';

        const go = () => {
            if (!canceled) {
                setReady(true);
            }
        };

        if (idle) {
            const id = window.requestIdleCallback(go, { timeout: 480 });

            return () => {
                canceled = true;
                window.cancelIdleCallback(id);
            };
        }

        const t = window.setTimeout(go, 24);

        return () => {
            canceled = true;
            window.clearTimeout(t);
        };
    }, []);

    if (!ready || isMobile || prefersReducedMotion) {
        return null;
    }

    return <CursorInner />;
});
