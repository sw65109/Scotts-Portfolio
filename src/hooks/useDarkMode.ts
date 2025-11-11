import { useCallback, useEffect, useState } from "react";


const DARK_CLASS = 'dark-theme';
const STORAGE_KEY = 'scott-portfolio-theme';

const preferDark = (): boolean =>
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;

export function useDarkMode() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? stored === 'dark' : preferDark();
    });

    useEffect(() => {
        document.body.classList.toggle(DARK_CLASS, isDark);
        localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggle = useCallback(() => setIsDark((prev) => !prev), []);

    return { isDark, toggle };
}