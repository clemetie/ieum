// Main.jsx
import { useEffect, useState } from "react";
import "../styles/Main.scss";
import Modal from "./Modal";
import ProjectSwiper from "./ProjectSwiper";
import SkillSwiper from "./SkillSwiper";
import Review from "./Review";
import { projects } from "../data/ieum";

const Main = () => {
  // “project”, “Review”, “skills” 중 하나를 현재 보이는 섹션으로 관리
  const [showSection, setShowSection] = useState("project");

  const [modalOpen, setModalOpen] = useState(false);
  const [activeModalSection, setActiveModalSection] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleProjectSelect = (projectId) => {
    const found = projects.find((p) => p.id === projectId);
    if (found) setSelectedProject(found);
  };

  const openModal = (sectionId) => {
    setActiveModalSection(sectionId);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveModalSection("");
  };

  // 화면 크기 감지 (생략)...
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="main-wrap">
      <Modal
        open={modalOpen}
        onClose={closeModal}
        sectionId={activeModalSection}
      />

      <nav>
        <ul className={isMobile ? "main-h3" : "main-h2"}>
          <li
            className={showSection === "project" ? "active" : ""}
            onClick={() => setShowSection("project")}
          >
            Project
          </li>
          <li
            className={showSection === "Review" ? "active" : ""}
            onClick={() => setShowSection("Review")}
          >
            Review
          </li>
          <li
            className={showSection === "skills" ? "active" : ""}
            onClick={() => setShowSection("skills")}
          >
            Skills
          </li>
        </ul>
      </nav>
      <main>
        {showSection === "project" && (
          <section id="project">
            <div className="top">
              <img
                className="thumnail"
                src={selectedProject.thumnailimage}
                alt={selectedProject.name}
              />
              <div className="txt">
                <h1 className="main-h2 toptitle">
                  {selectedProject.title} | {selectedProject.name}
                </h1>
                <p className="main-h4">
                  "{selectedProject.ment}" <br />
                </p>
                <button
                  className="main-h6 showmodal"
                  onClick={() => openModal(selectedProject.id)}
                >
                  자세히 보기
                </button>
              </div>
            </div>

            <div className="bottom">
              <div className="txt">
                <b className="main-h5">
                  {selectedProject.period} | {selectedProject.team}
                </b>
                <p className="main-h6">
                  <b style={{ color: "#9e9e9e" }}>
                    역할: {selectedProject.roleTitle}
                  </b>
                </p>
                <ul className="description">
                  {selectedProject.roles.map((line, idx) => (
                    <li key={idx}>· {line}</li>
                  ))}
                </ul>
              </div>
              <ProjectSwiper
                onSelect={handleProjectSelect}
                selectedProject={selectedProject}
                openModal={openModal}
              />
            </div>
          </section>
        )}

        {showSection === "Review" && (
          <section id="Review">
            <Review />
          </section>
        )}
        {showSection === "skills" && (
          <section id="skills">
            <SkillSwiper />
          </section>
        )}
      </main>
    </div>
  );
};

export default Main;
