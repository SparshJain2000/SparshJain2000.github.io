import React, { useEffect, useRef, useState } from "react";
import { ProjectCardProp } from "../types/customTypes";
import { useVisible } from "../hooks/useVisible";

const ProjectCard = ({ title, description, deployed, github, image }: ProjectCardProp) => {
    const [src, setSrc] = useState();
    const element = useRef<HTMLDivElement>(null);
    const [visible] = useVisible(element);
    useEffect(() => {
        import("../images/fulls/" + image).then((img) => setSrc(img.default));
    }, [image]);
    return (
        <article className={`col-12 col-md-11 project-item hideme ${visible ? "is-visible" : ""}`} ref={element}>
            <a href={src} className='image fit thumb'>
                <img loading='lazy' src={src} alt={image} />
            </a>
            <h3>
                {title}
                <span className='float-right mr-1'>
                    <a href={github} className='icon brands fa-github projects'></a>
                </span>
                {deployed && (
                    <span className='float-right mr-3'>
                        <a href={deployed} className='icon brands fa-chrome projects'></a>
                    </span>
                )}
            </h3>
            <p>{description}</p>
        </article>
    );
};

export default ProjectCard;
