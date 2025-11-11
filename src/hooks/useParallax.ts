import { useEffect, useRef } from "react";


interface Options {
    intensity?: number;
}

export function useParallax({ intensity = 0.05 }: Options = {}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMove = (event: MouseEvent) => {
            const shapes = container.querySelectorAll<HTMLElement>('[data-parallax-shape]');
            const { clientX, clientY } = event;

            shapes.forEach((shape, index) => {
                const direction = index %2 === 0 ? 1 : -1;
                const translateX = clientX * intensity * direction;
                const translateY = clientY * intensity * direction;
                shape.style.transform = `translate(${translateX}px, ${translateY}px)`;
            });
        };

        container.addEventListener('mousemove', handleMove);
        return () => container.removeEventListener('mousemove', handleMove);
    }, [intensity]);

    return { containerRef };
}