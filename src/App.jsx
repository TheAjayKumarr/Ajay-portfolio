import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import ProjectsView from "./components/ProjectsView";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Copyright from "./components/Copyright";
import Container from "./components/container";

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
                <Container>
                  <Hero />
                </Container>
              </section>

              <section id="projects" className="darkback-color overflow-hidden">
                <Container>
                  <Projects />
                </Container>
              </section>

              <section id="skills">
                <Container>
                  <Skills />
                </Container>
              </section>

              <section id="career" className="darkback-color overflow-hidden">
                <Container>
                  <Experience />
                </Container>
              </section>
              <section id="copyright">
                <Container>
                  <Copyright />
                </Container>
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
