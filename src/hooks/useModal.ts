import { useCallback, useEffect, useState } from "react";

const BODY_CLASS = 'modal--open'

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle(BODY_CLASS, isOpen);
        return () => document.body.classList.remove(BODY_CLASS,)
    }, [isOpen])

    const open = useCallback(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, behavior: 'smooth'});
        }
        setIsOpen(true)
    }, []);
    
    const close = useCallback(() => setIsOpen(false), []);

    return{ isOpen, open, close };
}