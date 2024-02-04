import React, { useEffect, useRef, useState } from "react";
import { ProjectCardProp } from "../types/customTypes";
import { useVisible } from "../hooks/useVisible";
import Loader from "./Loader.component";

const ProjectCard = ({ title, description, deployed, github, image }: ProjectCardProp) => {
    // const [src, setSrc] = useState("../images/1.png");
    // const [src, setSrc] = useState("../assets/images/compressed/" + image + ".jpg");

    const [placeholder, setPlaceholder] = useState(null);
    const [img, setImg] = useState();

    const [imgLoading, setImgLoading] = useState(true);
    const [placeholderLoading, setPlaceholderLoading] = useState(true);

    const element = useRef<HTMLDivElement>(null);
    const imgElement = useRef<HTMLImageElement>(null);
    const placeholderElement = useRef<HTMLImageElement>(null);
    const [visible] = useVisible(element);
    useEffect(() => {
        import("../assets/images/compressed/" + image + ".jpg")
            .then((img) => {
                console.log("loaded placeholder");
                setPlaceholder(img.default);
            })
            .catch(() => setPlaceholder(null));
    }, [setPlaceholder, image]);
    useEffect(() => {
        import("../assets/images/fulls/" + image).then((img) => {
            setImg(img.default);
        });
    }, [setImg, image]);
    useEffect(() => {
        placeholderElement?.current?.addEventListener("load", () => setPlaceholderLoading(false), {
            once: true,
        });
        placeholderElement?.current?.addEventListener("error", () => setPlaceholderLoading(true), {
            once: true,
        });
    }, [placeholder]);
    useEffect(() => {
        imgElement?.current?.addEventListener("load", () => setImgLoading(false), {
            once: true,
        });
        imgElement?.current?.addEventListener("error", () => setImgLoading(true), {
            once: true,
        });
    }, [img]);
    return (
        <article className={`col-12 col-md-11 project-item hideme ${visible ? "is-visible" : ""}`} ref={element}>
            <a href={img} className='image fit thumb mx-auto'>
                <>
                    {img && <img className={imgLoading ? " invisible " : ""} loading='lazy' src={img} alt={image} ref={imgElement} />}
                    {placeholder && (
                        <img
                            className={(placeholderLoading && "invisible ") + (imgLoading ? " loading " : " invisible ")}
                            loading='lazy'
                            src={placeholder}
                            alt={image}
                            ref={placeholderElement}
                        />
                    )}
                </>
                {imgLoading && placeholderLoading && <Loader className='my-auto mx-auto lg' />}
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
