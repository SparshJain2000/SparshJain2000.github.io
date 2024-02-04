import React, { useEffect, useMemo, useState } from "react";
import { useScroll } from "../hooks/useScroll";
import { useVisibleDOM } from "../hooks/useVisible";

const Navbar = () => {
    const { scrolled } = useScroll();
    const [visible1] = useVisibleDOM(document.getElementById("one"));
    const [visible2] = useVisibleDOM(document.getElementById("two"));
    const [visible3] = useVisibleDOM(document.getElementById("three"));
    const [visible4] = useVisibleDOM(document.getElementById("five"));
    const [visible5] = useVisibleDOM(document.getElementById("four"));
    const [navItems, setNavItems] = useState([
        {
            title: "About Me",
            icon: "fa-user",
            active: false,
            href: "#one",
        },
        {
            title: "Work Experience",
            icon: "fa-briefcase",
            active: false,
            href: "#two",
        },
        {
            title: "Projects",
            icon: "fa-code-branch",
            active: false,
            href: "#three",
        },
        {
            title: "My Skills",
            icon: "fa-cogs",
            active: false,
            href: "#five",
        },
        {
            title: "Contact",
            icon: "fa-phone",
            active: false,
            href: "#four",
        },
    ]);
    let obj: { [key: string]: boolean } = useMemo(
        () => ({ "#one": visible1, "#two": visible2, "#three": visible3, "#five": visible4, "#four": visible5 }),
        [visible1, visible2, visible3, visible4, visible5],
    );
    useEffect(() => {
        setNavItems((navItems) => {
            navItems.forEach((item) => (item.active = obj[item.href]));
            return navItems;
        });
    }, [obj]);
    return (
        <div className='nav-header'>
            <div className={"progress-container " + (scrolled >= 3 ? "visible" : "none")}>
                <div className='progress-bar' style={{ width: scrolled + "%" }}></div>
            </div>
            <nav className={`navbar navbar-expand ${scrolled >= 3 && "nav-shadow"}`}>
                <div className='nav navbar-nav '>
                    {navItems.map(({ active, title, icon, href }) => (
                        <a key={href} className={"nav-item nav-link " + (active && "active")} href={href}>
                            <i className={"icon solid mr-1 " + icon}></i>
                            {title}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
