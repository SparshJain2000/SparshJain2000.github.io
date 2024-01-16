import { useEffect, useState } from "react";
import { useScroll } from "./useScroll";

export function useVisible(element: React.RefObject<HTMLDivElement>) {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const bottom_of_object = element.current?.offsetTop ?? 0;
    useEffect(() => {
        const bottom_of_window = scrollY + window.outerHeight;
        // console.log(bottom_of_window, bottom_of_object);
        setVisible(bottom_of_window > bottom_of_object + 150);
    }, [scrollY, bottom_of_object]);
    return [visible, setVisible] as const;
}
