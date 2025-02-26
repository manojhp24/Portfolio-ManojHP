import "./contact-section.css";

export function ContactSection() {
  return (
    <footer id="Contact" className="cont-sec">
      <div className="footer-cont">
        <div className="contact-sec">
          <h2 className="section-title">Get In Touch</h2>
          <form action="#" className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email Address</label>
              <input type="text" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Your Message</label>
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
    </footer>
  );
}
