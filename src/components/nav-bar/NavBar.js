import { useState, useEffect } from "react";
import "./nav-bar.css";

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-bar">
      <div className="logo">MANOJ HP</div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <ul>
          {["Home", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => {
                  setActive(item);
                  setMenuOpen(false); // Close menu on selection
                }}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
