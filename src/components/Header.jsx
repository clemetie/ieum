import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const naviList = [
  { name: "Project" },
  { name: "Review" },
  { name: "Skills" },
  { name: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false); // 스크롤 상태

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  // ✅ 스크롤 이벤트 등록
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={hasShadow ? "scrollshadow" : ""}>
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
