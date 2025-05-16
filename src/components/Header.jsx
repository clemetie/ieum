import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const naviList = [
  { name: "Project" },
  { name: "Certificate" },
  { name: "Skills" },
  { name: "FAQ" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <img src="/images/ieumlogo.png" alt="로고" />
      <ul className={`menu-list ${menuOpen ? "show" : ""}`}>
        {naviList.map((navi, index) => {
          const delay = (naviList.length - index - 1) * 0.1;
          return (
            <li
              key={index}
              onClick={() => handleScroll(navi.name.toLowerCase())}
              className="main-h3"
              style={{
                transitionDelay: menuOpen ? `${delay}s` : "0s",
              }}
            >
              {navi.name}
            </li>
          );
        })}
      </ul>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FontAwesomeIcon icon={faBars} className="main-h4" />
      </div>
    </header>
  );
};

export default Header;
