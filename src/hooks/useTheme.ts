import { useEffect, useState } from "react";

export function useTheme(initialValue?: string) {
    const [theme, setTheme] = useState(initialValue ?? "light");
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        setTheme(theme ? JSON.parse(theme) : "light");
    }, []);
    const toggleTheme: () => void = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        localStorage.setItem("theme", JSON.stringify(newTheme));
        setTheme(newTheme);
    };

    return [theme, toggleTheme] as const;
}
