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
import { Suspense, createContext, useRef } from "react";
import Skills from "./components/Skills.component";
import Loader from "./components/Loader.component";
import { ErrorBoundary } from "react-error-boundary";
import { useScroll } from "./hooks/useScroll";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

export const ThemeContext = createContext("light");
function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <ErrorBoundary fallback={<>⚠️ Something went wrong</>}>
            <ThemeContext.Provider value={theme}>
                <Routes>
                    <Route path='/' element={<Home theme={theme} toggleTheme={toggleTheme} />} />
                    <Route path='/blogs' element={<>hello MFs</>} />
                </Routes>
            </ThemeContext.Provider>
        </ErrorBoundary>
    );
}

export default App;
