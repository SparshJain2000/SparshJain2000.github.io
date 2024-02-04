import { useEffect, useState } from "react";

export function useScroll(initialValue?: string) {
    // return { theme, toggleTheme };

    const [scrolled, setScrolled] = useState(0);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = (event: Event) => {
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            setScrollY(window.scrollY);

            setScrolled((window.scrollY / height) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { scrolled, scrollY, setScrolled };
}
