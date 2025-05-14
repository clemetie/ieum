import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const naviList = [
  {
    name: "Project",
  },
  {
    name: "Certificate",
  },
  {
    name: "Skills",
  },
  {
    name: "FAQ",
  },
];

const Header = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <img src="/images/ieumlogo.png" alt="로고" />
      <ul className="inner">
        {naviList.map((navi, index) => (
          <li
            key={index}
            onClick={() => handleScroll(navi.name.toLowerCase())}
            style={{ cursor: "pointer" }}
            className="main-h3"
          >
            {navi.name}
          </li>
        ))}
      </ul>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faBars} className="main-h4" />
      </div>
    </header>
  );
};

export default Header;
