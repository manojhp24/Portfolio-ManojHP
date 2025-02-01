import { useState } from "react";
import "./nav-bar.css";

export default function NavBar() {
  const [active, setActive] = useState("Home");
  return (
    <header className="nav-bar">
      <nav className="nav-links">
        <ul>
          {["Home", "Skills", "Projects", "Experience", "Contact"].map(
            (item) => (
              <li
                key={item}
                className={active === item ? "active" : ""}
                onClick={() => setActive(item)}
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
