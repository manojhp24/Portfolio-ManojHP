import { useEffect, useState } from "react";
import Typed from "typed.js";
import "./home-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  fawindowclose,
} from "@fortawesome/free-brands-svg-icons";

export default function HomeSection() {
  const [showInfoModel, setShowInfoModel] = useState(false);

  useEffect(() => {
    const options = {
      strings: [
        "Full Stack Developer",
        "Machine Learning",
        "Mobile App Developer",
      ],
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
            <button
              className="btn-contact"
              onClick={() => setShowInfoModel(true)}
            >
              Contact Info
            </button>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/manoj-hp/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="icon-linkd" />
            </a>
            <a href="https://github.com/manojhp24" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="icon-git" />
            </a>
          </div>
        </div>
      </div>

      {showInfoModel && (
        <div className="modal-overlay" onClick={() => setShowInfoModel(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-modal"
              onClick={() => setShowInfoModel(false)}
            >
              X
            </button>
            <h2>Contact Info</h2>
            <p>Email: manojhp584@gmail.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Mysore, India</p>
          </div>
        </div>
      )}
    </section>
  );
}
