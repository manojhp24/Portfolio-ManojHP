import { useState } from "react";
import "./nav-bar.css";

export default function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav-bar">
      <div className="logo">My Portfolio</div>

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
