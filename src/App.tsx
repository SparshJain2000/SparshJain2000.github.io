// import "./styles/style.min.css";
import Navbar from "./components/Navbar.component";
import Intro from "./components/Intro.component";
import Projects from "./components/Projects.component";
import Work from "./components/Work.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import sun from "./images/sun.svg";
import moon from "./images/moon.svg";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header.component";
import { createContext } from "react";

// const oppositeTheme = (theme: string) => {
//     return theme === "dark" ? "light" : "dark";
// };
export const ThemeContext = createContext("light");
function App() {
    const [theme, toggleTheme] = useTheme();
    return (
        <ThemeContext.Provider value={theme}>
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
        </ThemeContext.Provider>
    );
}

export default App;
