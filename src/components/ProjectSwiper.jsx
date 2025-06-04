import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Main.scss";

// projects 배열을 import했다고 가정
import { projects } from "../data/ieum";

const ProjectSwiper = ({ onSelect, selectedProject, openModal }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.2}
      onSlideChange={(swiper) => {
        // swiper.activeIndex는 현재 보이는 슬라이드 인덱스를 의미합니다.
        // 만약 slidesPerView를 1.5로 주어서 반쯤 보이는 카드가 있다면,
        //  activeIndex가 “정수 인덱스”만을 반환하므로, projects 배열 인덱스를 그대로 사용해도 됩니다.
        const newIndex = swiper.activeIndex;
        const newProject = projects[newIndex];
        if (newProject) {
          onSelect(newProject.id);
        }
      }}
      // (선택적으로) 초기 슬라이드를 명시하고 싶으면 initialSlide={0} 등 지정
    >
      {projects.map((item, index) => (
        <SwiperSlide key={item.id}>
          <div
            className={`project-card ${
              selectedProject.id === item.id ? "active" : ""
            }`}
            onClick={() => onSelect(item.id)}
          >
            <img src={item.image} alt={item.name} />
            <div className="project-description">
              <h5 className="main-h5">{item.name}</h5>
              <p>
                {item.period} | {item.team}
              </p>

              <button
                className="main-h6 detail-link"
                onClick={() => openModal(item.id)}
              >
                → 자세히 보기
              </button>
            </div>
            <div className="stack-icons">{item.stacks}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectSwiper;
