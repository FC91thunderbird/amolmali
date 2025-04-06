import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Work from "./components/Work";
import Contact from "./components/Contact";

export default function App() {
    return (
        <>
            <Navbar />
            <main className=" bg-bgDark text-textWhite px-5 md:px-8">
                <HeroSection />
                <About />
                <Education />
                <Work />
                {/* <Skills /> */}
                <Projects />
                <Contact />
            </main>
        </>
    );
}
