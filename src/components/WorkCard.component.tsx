import { useRef } from "react";
import { WorkCardProp } from "../types/customTypes";
import { useVisible } from "../hooks/useVisible";
import { TypeAnimation } from "react-type-animation";

const WorkCard = ({ title, link, description, duration }: WorkCardProp) => {
    const element = useRef<HTMLDivElement>(null);
    const [visible] = useVisible(element);
    return (
        <div className={`timeline-card hideme ${visible ? "is-visible" : ""}`} ref={element}>
            <div className='info'>
                <h3 className='title'>
                    <span>
                        <TypeAnimation
                            sequence={[title]}
                            key={visible ? "start" : "idle"}
                            wrapper='span'
                            className='text-wrapper'
                            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                            style={{ display: "inline-block" }}
                            repeat={1}
                        />{" "}
                        @ {link}
                    </span>
                    <span className='duration'>{duration}</span>
                </h3>
                <div>
                    <ul>
                        {description.map((li, i) => (
                            <li key={i} dangerouslySetInnerHTML={{ __html: li }} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;
