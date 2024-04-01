import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Reveal from "./components/animations/Reveal";

export default function App() {
  return (
    <>
      <div>
        <Reveal>
          <Home />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Skill />
        </Reveal>
      </div>
    </>
  );
}
