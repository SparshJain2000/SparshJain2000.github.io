import { useRef } from "react";
import { WorkCardProp } from "../types/customTypes";
import { useVisible } from "../hooks/useVisible";

const WorkCard = ({ title, link, description, duration }: WorkCardProp) => {
    const element = useRef<HTMLDivElement>(null);
    const [visible] = useVisible(element);

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
                    <ul>
                        {description.map((li, i) => (
                            <span key={i}>{li}</span>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
