import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import DockMenu from "./components/DockMenu";

function App() {
  return (
    <>
      <DockMenu />

      <section id="intro">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>
      <section id="resume">
        <Resume />
      </section>

      <section id="experience">
        <Experience />
      </section>
    </>
  );
}

export default App;
