import React, { ReactElement, useRef, useState } from "react";
import { useVisible } from "../hooks/useVisible";
import { JsxElement } from "typescript";

const SkillBlock = ({ title, children, icon }: { title: string; children: ReactElement; icon: string }) => {
    const [show, setShow] = useState(false);
    const element = useRef<HTMLDivElement>(null);
    const child = useRef<HTMLDivElement>(null);
    const [visible] = useVisible(element);
    const [childVisible] = useVisible(child);
    return (
        <>
            <div className={"hideme " + (visible && "is-visible ") + (!show && "my-4")} ref={element}>
                <div
                    className={"block-card p-3 " + (show && "selectedHeader")}
                    onClick={() => setShow((show) => !show)}
                    style={{ cursor: "pointer" }}
                    id='frontHeader'>
                    <h3 className='mb-0'>
                        <span>
                            <i className={icon}></i>
                        </span>
                        {title}
                        <span className='float-right' style={{ cursor: "pointer" }}>
                            <i className={"fa fa-lg fa-angle-" + (show ? "up" : "down")}></i>
                        </span>
                    </h3>
                </div>
            </div>

            <div className={" hideme " + (childVisible && show && "is-visible ")} ref={child}>
                <div className={!show ? "display-none" : ""}>{children}</div>
            </div>
        </>
    );
};

export default SkillBlock;
