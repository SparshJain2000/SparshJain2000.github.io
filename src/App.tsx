// import "./styles/style.min.css";
import Navbar from "./components/Navbar.component";
import Intro from "./components/Intro.component";
import Projects from "./components/Projects.component";
import Work from "./components/Work.component";
import Contact from "./components/Contact.component";
import Footer from "./components/Footer.component";
import sun from "./assets/images/sun.svg";
import moon from "./assets/images/moon.svg";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header.component";
import { Suspense, createContext } from "react";
import Skills from "./components/Skills.component";
import Loader from "./components/Loader.component";
import { ErrorBoundary } from "react-error-boundary";

export const ThemeContext = createContext("light");
function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <ErrorBoundary fallback={<>⚠️ Something went wrong</>}>
            <ThemeContext.Provider value={theme}>
                <div className={`theme ${theme === "dark" ? "theme--dark" : "theme--default"}`}>
                    <button className={`btn btn-${theme} flex-center shadow`} id='themeToggler' onClick={() => toggleTheme()} value='Light' name='themeToggle'>
                        <img src={theme === "dark" ? moon : sun} alt='themeIcon' id='theme' />
                    </button>
                    <div className='body'>
                        <Navbar />
                        <div className='body-container'>
                            <Header />
                            {/* <Sidebar></Sidebar> */}
                            <div id='main'>
                                <Suspense fallback={<Loader className='mx-auto my-3 lg' />}>
                                    <Intro />
                                </Suspense>
                                <Suspense fallback={<Loader className='mx-auto my-3 lg' />}>
                                    <Work />
                                </Suspense>
                                <Suspense fallback={<Loader className='mx-auto my-3 lg' />}>
                                    <Projects />
                                </Suspense>
                                <Suspense fallback={<Loader className='mx-auto my-3 lg' />}>
                                    <Skills />
                                </Suspense>
                                <Suspense fallback={<Loader className='mx-auto my-3 lg' />}>
                                    <Contact />
                                </Suspense>
                            </div>
                            <div className='bottom-footer'>
                                <Footer />
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
