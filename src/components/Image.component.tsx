import React, { useEffect, useRef, useState } from "react";
import Loader from "./Loader.component";

const Image = ({ src, loader, ...props }: { src: string; loader?: string; className?: string }) => {
    const [img, setImg] = useState(null);
    const [imgLoading, setImgLoading] = useState(true);
    useEffect(() => {
        // import("../assets/images/icons/" + src)
        import("../assets/images/" + src)
            // import(src)
            .then((image) => setImg(image.default))
            .catch((e) => {
                setImg(null);
                // setImgLoading(true);
                console.error(e);
            });
    }, [setImg, src]);
    useEffect(() => {
        // setImgLoading(false);
    }, [img]);
    const element = useRef<HTMLImageElement>(null);

    useEffect(() => {
        // console.log(element.current);
        element?.current?.addEventListener(
            "load",
            () => {
                console.log("loaded");
                setImgLoading(false);
            },
            {
                once: true,
            },
        );
        element?.current?.addEventListener("error", () => setImgLoading(true), {
            once: true,
        });

        // return () => {
        //     element?.current?.removeEventListener("load", () => {}, true);
        // };
    }, [img]);

    return (
        <span className='relative'>
            {imgLoading && <Loader className={"mx-auto my-3 " + loader} />}
            {img && <img loading='lazy' src={img} {...props} className={props?.className + (imgLoading ? " invisible " : "")} alt={src} ref={element} />}
        </span>
    );
};

export default Image;
