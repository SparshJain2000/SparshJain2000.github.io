import { TypeAnimation } from "react-type-animation";

import resume from "../assets/resume.pdf";
import Footer from "./Footer.component";
import withTheme from "./HOC/ThemeProvider";
import { WithThemeProp } from "../types/customTypes";
import Image from "./Image.component";
const Header = ({ theme }: WithThemeProp) => {
    return (
        <header id='header'>
            <div style={{ height: "fit-content" }}>
                <div className='inner'>
                    <div className='container'>
                        <div className='image avatar flex-center cursor-pointer'>
                            <Image src={"avatar.jpg"} loader='lg' />
                        </div>

                        <h1>
                            <span className='ml10'>
                                <span className='text-wrapper'>
                                    <span className='letters'>I am Sparsh,</span>
                                </span>
                            </span>
                            <TypeAnimation
                                sequence={["Senior Software Engineer", 1000, "AI & Vector Search Systems", 1300, "Distributed Backend Engineer", 2000]}
                                wrapper='span'
                                className='text-wrapper'
                                speed={{ type: "keyStrokeDelayInMs", value: 100 }}
                                style={{ display: "inline-block" }}
                                repeat={Infinity}
                            />
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

export default withTheme(Header);
