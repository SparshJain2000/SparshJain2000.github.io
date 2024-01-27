import React, { useEffect, useRef, useState } from "react";
import { ProjectCardProp } from "../types/customTypes";
import { useVisible } from "../hooks/useVisible";

const ProjectCard = ({ title, description, deployed, github, image }: ProjectCardProp) => {
    // const [src, setSrc] = useState("../images/1.png");
    // const [src, setSrc] = useState("../assets/images/compressed/" + image + ".jpg");

    const [placeholder, setPlaceholder] = useState();
    const [img, setImg] = useState();
    const [imgLoading, setImgLoading] = useState(true);
    const element = useRef<HTMLDivElement>(null);
    const [visible] = useVisible(element);
    useEffect(() => {
        import("../assets/images/compressed/" + image + ".jpg").then((img) => setPlaceholder(img.default));
    }, [setPlaceholder, image]);
    useEffect(() => {
        import("../assets/images/fulls/" + image).then((img) => {
            setImg(() => {
                setImgLoading(false);
                return img.default;
            });
        });
    }, [setImg, image]);

    return (
        <article className={`col-12 col-md-11 project-item hideme ${visible ? "is-visible" : ""}`} ref={element}>
            <a href={img} className='image fit thumb'>
                <img className={imgLoading ? "loading" : ""} loading='lazy' src={imgLoading ? placeholder : img} alt={image} />
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
