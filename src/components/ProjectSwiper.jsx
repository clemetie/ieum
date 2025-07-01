import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/Main.scss";

import { projects } from "../data/ieum";

const ProjectSwiper = ({ onSelect, selectedProject, openModal }) => {
  const swiperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const handlePause = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handlePlay = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.2}
        onSlideChange={(swiper) => {
          const newIndex = swiper.activeIndex;
          const newProject = projects[newIndex];
          if (newProject) {
            onSelect(newProject.id);
          }
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
                <p className="description">
                  {item.period} | {item.team}
                </p>
                <button
                  className="main-h6 detail-link"
                  onClick={() => openModal(item.id)}
                >
                  → 자세히 보기
                </button>
              </div>
              <div className="stack-icons">
                {item.stacks.map((tool) => (
                  <img
                    key={tool}
                    src={`/images/icons/${tool.toLowerCase()}.svg`}
                    alt={tool}
                    title={tool}
                    className="stack-icon"
                  />
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔘 커스텀 컨트롤 버튼 */}
      <div className="custom-controls">
        <button className="custom-prev" aria-label="이전">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_100_278)">
              <path
                d="M50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25ZM26.4648 13.1836C27.3828 12.2656 28.8672 12.2656 29.7754 13.1836C30.6836 14.1016 30.6934 15.5859 29.7754 16.4941L21.2793 24.9902L29.7754 33.4863C30.6934 34.4043 30.6934 35.8887 29.7754 36.7969C28.8574 37.7051 27.373 37.7148 26.4648 36.7969L16.3086 26.6602C15.3906 25.7422 15.3906 24.2578 16.3086 23.3496L26.4648 13.1836Z"
                fill="#FEE274"
              />
            </g>
            <defs>
              <clipPath id="clip0_100_278">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>

        <button
          className="play-toggle"
          aria-label={isPlaying ? "정지" : "재생"}
          onClick={() => {
            if (isPlaying) swiperRef.current?.autoplay?.stop();
            else swiperRef.current?.autoplay?.start();
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? (
            // 정지 SVG
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_100_280)">
                <path
                  d="M25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50ZM21.875 18.75V31.25C21.875 32.9785 20.4785 34.375 18.75 34.375C17.0215 34.375 15.625 32.9785 15.625 31.25V18.75C15.625 17.0215 17.0215 15.625 18.75 15.625C20.4785 15.625 21.875 17.0215 21.875 18.75ZM34.375 18.75V31.25C34.375 32.9785 32.9785 34.375 31.25 34.375C29.5215 34.375 28.125 32.9785 28.125 31.25V18.75C28.125 17.0215 29.5215 15.625 31.25 15.625C32.9785 15.625 34.375 17.0215 34.375 18.75Z"
                  fill="#FEE274"
                />
              </g>
              <defs>
                <clipPath id="clip0_100_280">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            // 재생 SVG
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_348_77)">
                <path
                  d="M0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25ZM18.3887 14.3652C17.6465 14.7754 17.1875 15.5664 17.1875 16.4062V33.5938C17.1875 34.4434 17.6465 35.2246 18.3887 35.6348C19.1309 36.0449 20.0293 36.0352 20.7617 35.5859L34.8242 26.9922C35.5176 26.5625 35.9473 25.8105 35.9473 24.9902C35.9473 24.1699 35.5176 23.418 34.8242 22.9883L20.7617 14.3945C20.0391 13.9551 19.1309 13.9355 18.3887 14.3457V14.3652Z"
                  fill="#FEE274"
                />
              </g>
              <defs>
                <clipPath id="clip0_348_77">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          )}
        </button>

        <button className="custom-next" aria-label="다음">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_100_276)">
              <path
                d="M0 25C0 31.6304 2.63392 37.9893 7.32233 42.6777C12.0107 47.3661 18.3696 50 25 50C31.6304 50 37.9893 47.3661 42.6777 42.6777C47.3661 37.9893 50 31.6304 50 25C50 18.3696 47.3661 12.0107 42.6777 7.32233C37.9893 2.63392 31.6304 0 25 0C18.3696 0 12.0107 2.63392 7.32233 7.32233C2.63392 12.0107 0 18.3696 0 25ZM23.5352 36.8164C22.6172 37.7344 21.1328 37.7344 20.2246 36.8164C19.3164 35.8984 19.3066 34.4141 20.2246 33.5059L28.7207 25.0098L20.2246 16.5137C19.3066 15.5957 19.3066 14.1113 20.2246 13.2031C21.1426 12.2949 22.627 12.2852 23.5352 13.2031L33.6914 23.3398C34.6094 24.2578 34.6094 25.7422 33.6914 26.6504L23.5352 36.8164Z"
                fill="#FEE274"
              />
            </g>
            <defs>
              <clipPath id="clip0_100_276">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </>
  );
};

export default ProjectSwiper;
