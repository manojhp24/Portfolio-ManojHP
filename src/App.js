import HomeSection from "./components/home-section/HomeSection";
import NavBar from "./components/nav-bar/NavBar";
import SkillsSection from "./components/skills-section/SkillsSection";
import "./index.css";
import ProjectSection from "./components/project-section/projectsection";
import ExperienceSection from "./components/Experience-section/ExperienceSection";
import { ContactSection } from "./components/contact-section/ContactSection";

export default function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <NavBar />
      </div>
      <HomeSection />

      <SkillsSection />

      <ProjectSection />

      <ExperienceSection />

      <ContactSection />
    </div>
  );
}
