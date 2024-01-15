import { TypeAnimation } from "react-type-animation";
import avatar from "../images/avatar.png";

import resume from "../assets/resume.pdf";
import Footer from "./Footer.component";
const Header = () => {
    return (
        <header id='header'>
            <div style={{ height: "fit-content" }}>
                <div className='inner'>
                    <div
                        className='container'
                        // style='background-color: transparent'
                    >
                        <a className='image avatar'>
                            <img
                                loading='lazy'
                                id='avatar'
                                src={avatar}
                                alt='avatar'
                                // style='background: transparent'
                            />
                        </a>

                        <h1>
                            <span className='ml10'>
                                <span className='text-wrapper'>
                                    <span className='letters'>I am Sparsh,</span>
                                </span>
                            </span>
                            <TypeAnimation
                                sequence={["A Software Engineer", 1000, "A Full Stack Web Developer", 2000]}
                                wrapper='span'
                                className='text-wrapper'
                                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                                style={{ display: "inline-block" }}
                                repeat={Infinity}
                            />
                            {/* A Full Stack Web Developer */}
                            <br />
                        </h1>
                        <br />
                        <a href={resume} target='_blank' rel='noreferrer' download={"resume.pdf"} className='btn btn-outline-light glow-on-hover'>
                            View Resume<i className='fa fa-download ml-1'></i>
                        </a>
                        <br />
                    </div>
                </div>
            </div>
            <div className='header-footer'>
                <Footer />
            </div>
        </header>
    );
};

export default Header;
