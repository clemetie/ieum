import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Papa from "papaparse";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [isOverflowing, setIsOverflowing] = useState([]);

  useEffect(() => {
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb6vHpTokK1vrR2derKUHOscdV0NhE9w3DZXv-cWeTa0_xkAX89Go94y11ZDGaDRudHHZPK7ze6lev/pub?gid=1534480473&single=true&output=csv";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setReviews(results.data);
            setExpanded(Array(results.data.length).fill(false));
            setTimeout(() => {
              const overflowResults = results.data.map((_, idx) => {
                const el = document.getElementById(`review-text-${idx}`);
                return el && el.scrollHeight > el.clientHeight;
              });
              setIsOverflowing(overflowResults);
            }, 100); // DOM 렌더링 후 높이 측정
          },
        });
      })
      .catch((err) => console.error("CSV fetch 에러:", err));
  }, []);

  const toggleExpand = (idx) => {
    setExpanded((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <Swiper
      className="review-swiper"
      spaceBetween={20}
      slidesPerView={4.5}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.length === 0 ? (
        <div className="skeleton-wrapper">
          {[...Array(4)].map((_, idx) => (
            <div className="review-skeleton-card" key={idx}>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text long"></div>
            </div>
          ))}
        </div>
      ) : (
        reviews.map((row, idx) => (
          <SwiperSlide key={idx} className="ReviewSwipe">
            <div className="review-card">
              <p
                id={`review-text-${idx}`}
                className={`review-text ${expanded[idx] ? "expanded" : ""}`}
              >
                {row["내용"]}
              </p>
              {isOverflowing[idx] && (
                <span
                  className="toggle-button mbonly"
                  onClick={() => toggleExpand(idx)}
                >
                  {expanded[idx] ? "접기" : "더보기"}
                </span>
              )}
              <h5>
                {row["이름"]} | {row["팀"]}
              </h5>
            </div>
          </SwiperSlide>
        ))
      )}
    </Swiper>
  );
};

export default Review;
