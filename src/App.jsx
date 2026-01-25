import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsView from "./components/ProjectsView";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Copyright from "./components/Copyright";

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

              <section id="career">
                <Experience />
              </section>
              <section id="copyright">
                <Copyright />
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
