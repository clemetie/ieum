import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Papa from "papaparse";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // “pubhtml” 대신 “pub?output=csv” 로 바꾼 URL
    const csvUrl =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vRb6vHpTokK1vrR2derKUHOscdV0NhE9w3DZXv-cWeTa0_xkAX89Go94y11ZDGaDRudHHZPK7ze6lev/pub?gid=1534480473&single=true&output=csv";

    fetch(csvUrl)
      .then((res) => res.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // 첫 줄을 키(헤더)로 해석
          skipEmptyLines: true, // 빈 줄 무시
          complete: (results) => {
            setReviews(results.data);
          },
          error: (err) => {
            console.error("CSV 파싱 중 에러:", err);
          },
        });
      })
      .catch((err) => console.error("CSV fetch 에러:", err));
  }, []);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={4.5}
      breakpoints={{
        // 모바일: 0 ~ 639px
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        // 태블릿: 640 ~ 1023px
        640: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        // 소형 데스크탑: 1024 ~ 1439px
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 20,
        },
        // 대형 데스크탑: 1440px 이상
        1440: {
          slidesPerView: 4.5,
          spaceBetween: 20,
        },
      }}
    >
      {reviews.length === 0 ? (
        // 로딩 중
        <div className="skeleton-wrapper">
          {[...Array(4)].map((_, idx) => (
            <div className="review-skeleton-card" key={idx}>
              <div className="skeleton-text short"></div>
              <div className="skeleton-text long"></div>
            </div>
          ))}
        </div>
      ) : (
        // 실제 리뷰 카드 출력
        reviews.map((row, idx) => (
          <SwiperSlide key={idx} className="ReviewSwipe">
            <div className="review-card">
              <p>{row["내용"]}</p>
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
