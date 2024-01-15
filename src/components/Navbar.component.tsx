import React, { useEffect, useState } from "react";
import { useScroll } from "../hooks/useScroll";

const Navbar = () => {
    const { scrolled } = useScroll();
    return (
        <div className='nav-header'>
            <div className={"progress-container " + (scrolled >= 3 ? "visible" : "none")}>
                <div className='progress-bar' style={{ width: scrolled + "%" }}></div>
            </div>
            <nav className={`navbar navbar-expand ${scrolled >= 3 && "nav-shadow"}`}>
                <div className='nav navbar-nav'>
                    <a className='nav-item nav-link' href='#one'>
                        <i className='icon solid fa-user mr-1'></i>
                        About Me
                    </a>
                    <a className='nav-item nav-link' href='#two'>
                        <i className='icon solid fa-briefcase mr-1'></i>
                        Work Experience
                    </a>
                    <a className='nav-item nav-link' href='#three'>
                        <i className='icon solid fa-code-branch mr-1'></i>
                        Projects
                    </a>
                    <a className='nav-item nav-link' href='#five'>
                        <i className='icon solid fa-cogs mr-1'></i>
                        My Skills
                    </a>
                    <a className='nav-item nav-link' href='#four'>
                        <i className='icon solid fa-phone mr-1'></i>
                        Contact
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
