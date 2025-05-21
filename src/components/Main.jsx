import { useEffect, useState } from "react";

import "../styles/Main.scss";
import Modal from "./Modal";
import ProjectSwiper from "./ProjectSwiper";
import SkillsSwiper from "./SkillsSwiper";

const Main = () => {
  const [activeScrollSection, setActiveScrollSection] = useState("project");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalSection, setActiveModalSection] = useState("");
  const [isMobile, setIsMobile] = useState(false); // ✅ 모바일 여부 상태

  const scrollToInner = (id) => {
    const contentBox = document.querySelector("#contentBox");
    const target = document.getElementById(id);
    const navHeight = 80;

    if (!target || !contentBox) return;

    const contentBoxTop = contentBox.getBoundingClientRect().top;
    const targetTop = target.getBoundingClientRect().top;
    const offset = targetTop - contentBoxTop;

    contentBox.scrollTo({
      top: contentBox.scrollTop + offset - navHeight,
      behavior: "smooth",
    });

    setActiveScrollSection(id);
  };

  

  // ✅ 화면 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 기준
    };

    handleResize(); // 초기 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const contentBox = document.querySelector("#contentBox");

    const observer = new IntersectionObserver(
      (entries) => {
        let visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveScrollSection(visible.target.id);
        }
      },
      {
        root: contentBox,
        threshold: 0.1,
        rootMargin: "-80px 0px -30% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 자격증 담아둠
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

  const openModal = (sectionId) => {
    setActiveScrollSection(sectionId);
    setActiveModalSection(sectionId);
    setModalOpen(true);
  };

  return (
    <div className="main-wrap">
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sectionId={activeModalSection}
      />
      <nav className="left-nav">
        <ul className={isMobile ? "main-h3" : "main-h1"}>
          <li
            className={activeScrollSection === "project" ? "active" : ""}
            onClick={() => scrollToInner("project")}
          >
            PROJECT
          </li>
          <li
            className={activeScrollSection === "certificate" ? "active" : ""}
            onClick={() => scrollToInner("certificate")}
          >
            CERTIFICATE
          </li>
          <li
            className={activeScrollSection === "skills" ? "active" : ""}
            onClick={() => scrollToInner("skills")}
          >
            SKILLS
          </li>
        </ul>
      </nav>

      <div className="content-box" id="contentBox">
        <section id="project" className="scroll-section">
          <ProjectSwiper openModal={openModal} />
        </section>
        <section id="certificate" className="scroll-section">
          {certificatecard.map((card, idx) => (
            <div className="certificate-card" key={idx}>
              <p className="main-h4">{card.name}</p>
              <p className="main-h6">
                {card.date} | {card.Certification}
              </p>
            </div>
          ))}
        </section>
        <section id="skills" className="scroll-section">
          <SkillsSwiper />
        </section>
      </div>
    </div>
  );
};

export default Main;
