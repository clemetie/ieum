import { useEffect, useState } from "react";
import DonutChart from "./Donutchart";
import Agecharts from "./Agecharts";
import { projects } from "../data/ieum";
import "./Modal.scss";

const Modal = ({ open, onClose, sectionId }) => {
  // 1. 모달 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // 2. 모달이 열리지 않으면 null 반환
  if (!open) return null;

  // 기획 포인트
  const points = {
    bingfree1: [
      {
        title: "[위생 인식 개선]",
        description:
          "제빙기 위생 인식 부족 문제를\n실제 사례로 시각화하여 해결",
      },
      {
        title: "[간편 예약]",
        description: "상담 없어도 바로 예약과 결제가\n가능한 간단한 흐름 설계",
      },
      {
        title: "[사용자 맞춤 예약]",
        description: "대수, 기사 성별까지 선택 가능한\n사용자 맞춤 예약 시스템",
      },
      {
        title: "[지속 관리]",
        description: "정기적 이용도 편리한\n횟수 기반의 구독 요금제 설계",
      },
    ],
    gumi: [
      {
        title: "[한눈에 보기 쉬운 안내 구조]",
        description:
          "가족 단위/ 외지인 중심 \n → 요약된 정보 동선으로 빠르게 탐색 가능",
      },
      {
        title: "[관광 정보 연계 콘텐츠]",
        description:
          "여행 상품 ∙ 관광 콘텐츠 정보 제공 \n → 외지인 대상 지역 체류 ∙ 소비 유도",
      },
      {
        title: "[참여형 콘텐츠 UX]",
        description:
          "라면 투표, 공장 체험 등 \n → 가족 단위 방문객 중심 체험형 콘텐츠 설계",
      },
    ],
    ieum: [
      {
        title: "[PM 포트폴리오]",
        description: "직접 기획, 디자인, 개발까지\nEnd-to-End 과정 정리",
      },
    ],
  };

  const projectData = projects.find((p) => p.id === sectionId);

  // 빙프라임 이미지

  const imagePaths = [
    "/images/image 42.png",
    "/images/image 43.png",
    "/images/image 44.png",
    "/images/image 45.png",
    "/images/image 46.png",
    "/images/image 47.png",
  ];

  // 3. 모달 UI 반환
  return (
    <div className="modal">
      <div className="modal-content">
        {/* 빙프리 */}
        {sectionId === "bingfree1" && (
          <section id="bingfree1">
            {/* <img src="/images/bing1top.png" alt="프로젝트 소개" /> */}
            <div className="content">
              <img src="/images/bing1.png" alt="" />
              {/* <p className="main-h5">
                제빙기는 위생 관리가 필수지만, 사용자의 위생 인식 부족과 예약
                불편으로 청소 수요가 낮습니다.
                <br />
                <b>다양한 연령대의 고객군을 고려한</b>
                직관적인 예약 시스템과 <b>장기 이용을 유도할 전략</b>이
                필요합니다.
              </p>

              <img src="/images/bing1-1.png" alt="상세이미지 1" />
              <p className="main-h4">
                <b>
                  <span class="highlight">사용자의 불편에서 출발한 기획</span>,
                </b>
                <br />
                빙프리는 이렇게 정리했습니다.
              </p>
              <div className="solution-list">
                {points[sectionId]?.map((point, idx) => (
                  <div key={idx} className="solution-card">
                    <p className="main-h5">{point.title}</p>
                    <p className="main-h6">
                      {point.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>

              <img src="/images/bing1-2.png" alt="상세이미지2" />
              <p className="main-h5">
                본 화면은 기획, 디자인, 프론트엔드 구현까지 직접 담당한
                결과물입니다.
                <br />
                <span class="highlight">
                  <b>
                    문제 정의 → 사용자 흐름 설계 → 시각화 → 실제 예약 기능 구현
                  </b>
                </span>
                에 이르기까지
                <br />
                기획 관점에서의 End-to-End 경험을 담았습니다.
              </p> */}
              <div className="demo">
                <div className="demo1">
                  <video
                    src="/images/bing-main.mkv"
                    alt="메인 비디오"
                    autoPlay
                    muted
                    loop
                  />
                  <p className="description demo-description">
                    제빙기 위생은 사용자 인식의 사각지대에 놓인 문제입니다.
                    <br /> 위생 문제를 '눈에 보이지 않는 위험'으로 시각화해
                    <b> 인식 전환을 유도</b> 하고,
                    <br />
                    구독 서비스를 통해
                    <b>가시적인 신뢰 요소(라벨)로 연결</b> 되는 흐름을
                    설계했습니다.
                  </p>
                </div>
                <div className="demo2">
                  <video
                    src="/images/bing-reserv.mkv"
                    alt="메인 비디오"
                    autoPlay
                    muted
                    loop
                  />
                  <p className="description demo-description">
                    고객은 예약 전 궁금한 점이 생기면 상담이 필요하다고 느끼기
                    쉽습니다.
                    <br />
                    이를 줄이기 위해 자주 묻는 질문을 말풍선 형태로 배치해
                    심리적 장벽을 낮췄고,
                    <br />
                    바로 예약으로 이어지는 흐름으로
                    <b> 전환율 개선을 고려한 구조를 설계</b> 했습니다.
                  </p>
                </div>
                <div className="demo3">
                  <img src="/images/bing-demo3.png" alt="시연사진" />
                  <p className="description demo-description">
                    다양한 사용자 환경을 고려해 입력 UI의 직관성을 높이고,
                    <br /> <b>가격 예측 및 구독 전환 유도를 함께 고려</b>한 예약
                    페이지를 설계했습니다.
                  </p>
                </div>
                <div className="demo4">
                  <img src="/images/bing-demo4.png" alt="시연사진" />
                  <p className="description demo-description">
                    최소한의 정보로도 예약 내역을 조회할 수 있도록 설계하고,
                    <br />
                    반복 예약 시 기존 정보를 불러와
                    <b> 편의성과 전환율을 높였습니다.</b>
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* 빙프라임 */}
        {sectionId === "bingfree2" && (
          <section id="bingfree2">
            <img src="/images/bing2.png" alt="빙프라임 설명" />
          </section>
        )}
        {/* 구미 */}
        {sectionId === "gumi" && (
          <section id="gumi">
            <div className="content">
              <img src="/images/gumi.png" alt="" />
              <div className="introgumi">
                <div
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 30,
                    fontFamily: "Paperlogy",
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  라면 좋아하는 사람들 다 모여~ <br />
                  같이 끓이고, 같이 웃고, 같이 먹는 축제
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "#FC6713",
                    fontSize: 42,
                    fontFamily: "Paperlogy",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  이번엔 집 말고, 구미에서 함께 라면!
                </div>
                <ul
                  style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    textAlign: "left",
                    margin: "auto",
                  }}
                >
                  <li
                    style={{
                      width: "20%",
                      color: "#BDBDBD",
                      fontSize: 20,
                      fontFamily: "Paperlogy",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    축제의 일정, 운영 시간, 장소, 주최/주관 정보 등 핵심 개요를
                    한눈에 파악할 수 있도록 정리했습니다.
                  </li>
                  <li
                    style={{
                      width: "20%",
                      color: "#BDBDBD",
                      fontSize: 20,
                      fontFamily: "Paperlogy",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    참여 푸드존, 부스 구성, 프로그램 시간표 등 현장을 즐기기
                    위한 주요 콘텐츠를 정리했습니다.
                  </li>
                  <li
                    style={{
                      width: "20%",
                      color: "#BDBDBD",
                      fontSize: 20,
                      fontFamily: "Paperlogy",
                      fontWeight: "400",
                      wordWrap: "break-word",
                    }}
                  >
                    오시는 길, 셔틀버스, 이벤트 쿠폰 등 관람객 편의를 고려한
                    정보도 함께 제공됩니다.
                  </li>
                </ul>
              </div>
              <p className="main-h4" style={{ color: "#FC6713" }}>
                방문객 데이터를 기반으로 설계한 UX 전략
              </p>
              <div className="charts">
                <DonutChart />
                <Agecharts />
              </div>
              <svg
                className="arrow"
                width="100"
                height="150"
                viewBox="0 0 100 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M79.6074 83.125H100L50 150L0 83.125H20.3926V0H79.6074V83.125Z"
                  fill="url(#paint0_linear_173_271)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_173_271"
                    x1="50"
                    y1="0"
                    x2="50"
                    y2="150"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#212121" />
                    <stop offset="1" stopColor="#F16529" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="solution-list">
                {points[sectionId]?.map((point, idx) => (
                  <div key={idx} className="solution-card">
                    <p className="main-h5">{point.title}</p>
                    <p className="main-h6">
                      {point.description.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
              <img src="/images/gumilast.png" alt="구미 설명" />
            </div>
          </section>
        )}
        {/* 이음 */}
        {sectionId === "ieum" && (
          <section id="ieum">
            <div className="content">
              <h1>내용</h1>
              {/* 시연 */}
              <div className="demo"></div>
            </div>
          </section>
        )}
        {/* 니팅 */}
        {sectionId === "knitting" && (
          <section id="knitting">
            <div className="content">
              <img style={{ margin: 0 }} src="/images/knitt~.png" alt="니팅" />
              <div className="demo"></div>
            </div>
          </section>
        )}
        {sectionId === "bookbookbook" && (
          <section id="bookbookbook">
            <div className="content" style={{ padding: 0 }}>
              <img
                style={{ margin: 0 }}
                src="/images/bookbook.png"
                alt="북북북"
              />

              <div className="demo"></div>
            </div>
          </section>
        )}
        {sectionId === "minum" && (
          <section id="minum">
            <div className="content">
              <img src="/images/minum (1).jpg" alt="민음사로고" />
              <img src="/images/minum (2).jpg" alt="민음사로고" />
              <img src="/images/minum (3).jpg" alt="민음사로고" />
              <img src="/images/minum (4).jpg" alt="민음사로고" />
              <img src="/images/minum (5).jpg" alt="민음사로고" />
              <img src="/images/minum (6).jpg" alt="민음사로고" />
              <div className="demo"></div>
            </div>
          </section>
        )}
      </div>
      <div className="btnbox">
        <button onClick={onClose}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="25" cy="25" r="25" fill="#FEE274" />
            <path
              d="M34.4125 18.4125C35.1938 17.6312 35.1938 16.3625 34.4125 15.5812C33.6313 14.8 32.3625 14.8 31.5813 15.5812L25 22.1687L18.4125 15.5875C17.6313 14.8062 16.3625 14.8062 15.5813 15.5875C14.8 16.3687 14.8 17.6375 15.5813 18.4187L22.1688 25L15.5875 31.5875C14.8063 32.3687 14.8063 33.6375 15.5875 34.4187C16.3688 35.2 17.6375 35.2 18.4188 34.4187L25 27.8312L31.5875 34.4125C32.3688 35.1937 33.6376 35.1937 34.4188 34.4125C35.2001 33.6312 35.2001 32.3625 34.4188 31.5812L27.8313 25L34.4125 18.4125Z"
              fill="white"
            />
          </svg>
        </button>
        <button className="link">
          <a href={projectData?.href || "#"} target="_blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#FEE274" />
              <path
                d="M37.9901 25.5849C40.8151 22.7599 40.8151 18.1849 37.9901 15.3599C35.4901 12.8599 31.5501 12.5349 28.6751 14.5899L28.5951 14.6449C27.8751 15.1599 27.7101 16.1599 28.2251 16.8749C28.7401 17.5899 29.7401 17.7599 30.4551 17.2449L30.5351 17.1899C32.1401 16.0449 34.3351 16.2249 35.7251 17.6199C37.3001 19.1949 37.3001 21.7449 35.7251 23.3199L30.1151 28.9399C28.5401 30.5149 25.9901 30.5149 24.4151 28.9399C23.0201 27.5449 22.8401 25.3499 23.9851 23.7499L24.0401 23.6699C24.5551 22.9499 24.3851 21.9499 23.6701 21.4399C22.9551 20.9299 21.9501 21.0949 21.4401 21.8099L21.3851 21.8899C19.3251 24.7599 19.6501 28.6999 22.1501 31.1999C24.9751 34.0249 29.5501 34.0249 32.3751 31.1999L37.9901 25.5849ZM12.0101 24.4149C9.18511 27.2399 9.18511 31.8149 12.0101 34.6399C14.5101 37.1399 18.4501 37.4649 21.3251 35.4099L21.4051 35.3549C22.1251 34.8399 22.2901 33.8399 21.7751 33.1249C21.2601 32.4099 20.2601 32.2399 19.5451 32.7549L19.4651 32.8099C17.8601 33.9549 15.6651 33.7749 14.2751 32.3799C12.7001 30.7999 12.7001 28.2499 14.2751 26.6749L19.8851 21.0599C21.4601 19.4849 24.0101 19.4849 25.5851 21.0599C26.9801 22.4549 27.1601 24.6499 26.0151 26.2549L25.9601 26.3349C25.4451 27.0549 25.6151 28.0549 26.3301 28.5649C27.0451 29.0749 28.0501 28.9099 28.5601 28.1949L28.6151 28.1149C30.6751 25.2399 30.3501 21.2999 27.8501 18.7999C25.0251 15.9749 20.4501 15.9749 17.6251 18.7999L12.0101 24.4149Z"
                fill="white"
              />
            </svg>
          </a>
        </button>
        <button className="git">
          <a href={projectData?.git || "#"} target="_blank">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="#FEE274" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25 9C33.8368 9 41 16.3439 41 25.4047C41 32.6511 36.4208 38.7983 30.0672 40.9695C29.256 41.1311 28.968 40.6188 28.968 40.182C28.968 39.6412 28.9872 37.8749 28.9872 35.6797C28.9872 34.1501 28.4752 33.1518 27.9008 32.643C31.464 32.2366 35.208 30.8492 35.208 24.5484C35.208 22.7564 34.5872 21.2941 33.56 20.1453C33.7264 19.7309 34.2752 18.0623 33.4032 15.8031C33.4032 15.8031 32.0624 15.3636 29.008 17.4852C27.7296 17.122 26.36 16.9392 25 16.9328C23.64 16.9392 22.272 17.122 20.9952 17.4852C17.9376 15.3636 16.5936 15.8031 16.5936 15.8031C15.7248 18.0623 16.2736 19.7309 16.4384 20.1453C15.416 21.2941 14.7904 22.7564 14.7904 24.5484C14.7904 30.8332 18.5264 32.2419 22.08 32.6563C21.6224 33.0659 21.208 33.7884 21.064 34.8492C20.152 35.2684 17.8352 35.9939 16.408 33.4867C16.408 33.4867 15.5616 31.9105 13.9552 31.7953C13.9552 31.7953 12.3952 31.7746 13.8464 32.7922C13.8464 32.7922 14.8944 33.2962 15.6224 35.1922C15.6224 35.1922 16.5616 38.1201 21.0128 37.1281C21.0208 38.4993 21.0352 39.7916 21.0352 40.182C21.0352 40.6156 20.7408 41.1231 19.9424 40.9711C13.584 38.8031 9 32.6527 9 25.4047C9 16.3439 16.1648 9 25 9Z"
                fill="white"
              />
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Modal;
