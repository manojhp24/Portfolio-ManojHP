import { useEffect } from "react";
import Typed from "typed.js";
import "./home-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function HomeSection() {
  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Machine Learning", "Deep Learning"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed("#element", options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="Home" className="home-sec">
      <div className="home-container">
        <div className="right-sec">
          <div className="right-img">
            <img src="images/my_photo.png" alt="" />
          </div>
        </div>
        <div className="left-sec">
          <h2>Hello!</h2>
          <h1 className="my-name">
            I'm <span>Manoj HP</span>
          </h1>
          <span id="element"></span>
          <div className="btn">
            <a href="documents/Manoj-HP-Resume2025.pdf" target="_blank">
              <button className="btn-resume">Resume 🗒️</button>
            </a>
            <button className="btn-contact">Contact Info</button>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/manoj-hp/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="icon-linkd" />
            </a>
            <a href="https://github.com/manojhp007" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon-git" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
