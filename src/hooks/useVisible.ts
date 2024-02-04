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

export function useVisibleDOM(element?: HTMLElement | null) {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const top_of_object = element?.offsetTop ?? 0;
        const bottom_of_object = (element?.offsetTop ?? 0) + (element?.clientHeight ?? 0);
        const bottom_of_window = scrollY + window.outerHeight;
        const top_of_window = scrollY;

        // console.log("bottom ", element?.id, bottom_of_window, top_of_object);
        // console.log("top ", element?.id, top_of_window, bottom_of_object);

        setVisible(bottom_of_window > top_of_object + 300 && top_of_window <= bottom_of_object - 150);
    }, [scrollY, element]);
    return [visible, setVisible] as const;
}
