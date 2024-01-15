// import "./styles/style.min.css";
import Navbar from "./components/Navbar.component";
import Intro from "./components/Intro.component";
import Projects from "./components/Projects.component";
import Work from "./components/Work.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import Sidebar from "./components/Sidebar.component";
import sun from "./images/sun.svg";
import moon from "./images/moon.svg";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header.component";
import { useEffect, useState } from "react";
import { Router, Routes } from "react-router-dom";

// const oppositeTheme = (theme: string) => {
//     return theme === "dark" ? "light" : "dark";
// };
function App() {
    const { theme, toggleTheme } = useTheme();
    const [currentFocus, setCurrentFocus] = useState("intro");

    const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
            // Determine which component is currently in focus based on your logic
            // For example, if the Home component is in focus, update the currentFocus state to 'home'
            setCurrentFocus("intro");
        }
    };

    useEffect(() => {
        document.addEventListener("visibilitychange", handleVisibilityChange);
        var observer = new IntersectionObserver(onIntersection, {
            root: null, // default is the viewport
            threshold: 0.5, // percentage of target's visible area. Triggers "onIntersection"
        });

        // callback is called on intersection change
        function onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
            entries.forEach((entry) => {
                console.log(entry.target);
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        }

        // Use the observer to observe an element
        const main = document.querySelector("#main");
        const one = document.querySelector("#one");
        const two = document.querySelector("#two");
        if (main && one && two) {
            // observer.observe(main);
            observer.observe(one);
            observer.observe(two);
        }

        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
    return (
        <div className={`theme ${theme === "dark" ? "theme--dark" : "theme--default"}`}>
            <button className={`btn btn-${theme} flex-center shadow`} id='themeToggler' onClick={() => toggleTheme()} value='Light' name='themeToggle'>
                <img src={theme === "dark" ? moon : sun} alt='themeIcon' id='theme' />
            </button>
            <div className='body'>
                <Navbar></Navbar>
                <div className='body-container'>
                    <Header></Header>
                    {/* <Sidebar></Sidebar> */}
                    <div id='main'>
                        <Intro></Intro>

                        <Work></Work>

                        <Projects></Projects>
                        <Contact></Contact>
                    </div>
                    <div className='bottom-footer'>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
function setCurrentFocus(arg0: string) {
    throw new Error("Function not implemented.");
}
