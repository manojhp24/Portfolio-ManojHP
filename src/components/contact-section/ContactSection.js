import "./contact-section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  fawindowclose,
} from "@fortawesome/free-brands-svg-icons";

export function ContactSection() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="Contact">
      <footer className="cont-sec">
        <div className="footer-cont">
          <div className="contact-sec">
            <h2 className="section-title">Get In Touch</h2>
            <form action="#" className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message"></textarea>
              </div>

              <div className="form-group">
                <button type="submit" className="submit-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links-footer">
            <a
              href="https://www.linkedin.com/in/manoj-hp"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon-linkd" />
            </a>
            <a
              href="https://github.com/manojhp24"
              target="_blank"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="icon-linkd" />
            </a>
            <a href="mailto:your@email.com" aria-label="Email">
              <i className="fas fa-envelope icon-email"></i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; {currentYear} Manoj HP. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
