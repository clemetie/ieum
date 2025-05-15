import { useEffect, useState } from "react";
import "../styles/Main.scss";
import ProjectSwiper from "../components/ProjectSwiper";

const Main = () => {
  const [activeSection, setActiveSection] = useState("project");

  const scrollToInner = (id) => {
    const target = document.getElementById(id);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: document.querySelector("#contentBox"), // 내부 스크롤 박스 기준
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const certificatecard = [
    {
      name: "웹디자인개발기능사",
      date: "2025년 취득",
      Certification: "한국산업인력공단",
    },
    {
      name: "문화예술교육사 2급",
      date: "2020년 취득",
      Certification: "문화체육관광부",
    },
    {
      name: "음악심리상담사",
      date: "2018년 취득",
      Certification: "한국산업인력공단",
    },
    {
      name: "Sqld 개발자",
      date: "2025년 취득",
      Certification: "한국데이터산업진흥원",
    },
  ];
  return (
    <div className="main-wrap">
      <nav className="left-nav">
        <ul className="main-h1">
          <li
            className={activeSection === "project" ? "active" : ""}
            onClick={() => scrollToInner("project")}
          >
            PROJECT
          </li>
          <li
            className={activeSection === "certificate" ? "active" : ""}
            onClick={() => scrollToInner("certificate")}
          >
            CERTIFICATE
          </li>
          <li
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToInner("skills")}
          >
            SKILLS
          </li>
        </ul>
      </nav>

      <div className="content-box" id="contentBox">
        <section id="project" className="scroll-section">
          <ProjectSwiper />
        </section>
        <section id="certificate" className="scroll-section">
          {certificatecard.map((card) => (
            <div className="certificate-card">
              <p className="main-h4">{card.name}</p>
              <p className="main-h6">
                {card.date} | {card.Certification}
              </p>
            </div>
          ))}
        </section>
        <section id="skills" className="scroll-section">
          <h2>스킬 콘텐츠</h2>
        </section>
      </div>
    </div>
  );
};

export default Main;
