import React, { ReactNode, useEffect, useRef, useState } from "react";
import { useScroll } from "../hooks/useScroll";
export interface WorkCardProp {
    title: string;
    link: ReactNode;
    description: ReactNode[];
    duration: string;
}
const WorkCard = ({ title, link, description, duration }: WorkCardProp) => {
    const element = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const bottom_of_object = element.current?.offsetTop ?? 0;

    useEffect(() => {
        const bottom_of_window = scrollY + window.outerHeight;
        // console.log(bottom_of_window, bottom_of_object);
        setVisible(bottom_of_window > bottom_of_object + 150);
    }, [scrollY, bottom_of_object]);
    return (
        <div className={`timeline-card hideme ${visible ? "is-visible" : ""}`} ref={element}>
            <div className='info'>
                <h3 className='title'>
                    <span>
                        {title} @ {link}
                    </span>
                    <span className='duration'>{duration}</span>
                </h3>
                <div>
                    <ul>{description.map((li) => li)}</ul>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
