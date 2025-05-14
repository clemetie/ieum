import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Home.scss";

const projectList = [
  {
    name: "제빙기 청소 예약 플랫폼",
    image: "/images/projectCard1.png",
    during: "2025.04 ~ 2025.05",
    team: "4인 프로젝트",
    svg: ["/svg/vite.svg", "/svg/figma-svgrepo-com.svg"],
  },
];

const Project = () => {
  return (
    <section className="project-wrap">
      <h2>Project Section</h2>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {projectList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={item.image} alt={item.namea} />
              <h3>{item.name}</h3>
              <div className="stack-icons">
                {item.svg.map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt="stack icon"
                    className="stack-icon"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Project;
