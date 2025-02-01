import HomeSection from "./components/home-section/HomeSection";
import NavBar from "./components/nav-bar/NavBar";
import SkillsSection from "./components/skills-section/SkillsSection";
import "./index.css";
import ProjectSection from "./components/project-section/projectsection";

export default function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <NavBar />
      </div>
      <div>
        <HomeSection />
      </div>
      <div>
        <SkillsSection />
      </div>
      <div>
        <ProjectSection />
      </div>
    </div>
  );
}
