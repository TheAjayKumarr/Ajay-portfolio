import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsView from "./components/ProjectsView";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <section id="intro">
                <Hero />
              </section>

              <section id="projects">
                <Projects />
              </section>

              <section id="skills">
                <Skills />
              </section>

              <section id="experience">
                <Experience />
              </section>
            </>
          }
        />
        <Route path="/projects/:slug" element={<ProjectsView />} />
      </Route>
    </Routes>
  );
}

export default App;
