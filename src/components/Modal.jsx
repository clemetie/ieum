import "./Modal.scss";
import { useEffect } from "react";

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

  // 빙프리 기획 포인트
  const points = [
    {
      title: "[위생 인식 개선]",
      description: "제빙기 위생 인식 부족 문제를\n실제 사례로 시각화하여 해결",
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
  ];

  // 3. 모달 UI 반환
  return (
    <div className="modal">
      <div className="modal-content">
        {sectionId === "bingfree1" && (
          <section id="bingfree">
            <div className="top">
              <a href="https://bingfree-b.vercel.app/" target="_blank">
                <img src="/images/projectCard1.png" alt="프로젝트 썸네일" />
              </a>
              <div className="description-box">
                <h3 className="main-h3">빙프리 | 제빙기 청소 예약 사이트</h3>
                <p className="main-h6">
                  2025.03.07 ~ 2025.04.25 | 4인 프로젝트(기획, 개발, 디자인)
                </p>
                <p className="description">
                  제빙기 위생 관리가 중요한 업장(카페, 음식점, 병원 등)과 가정
                  고객을 대상으로
                  <br />
                  제빙기 청소를 간편하게 예약할 수 있는 웹 플랫폼입니다.
                </p>
                <ul className="main-h6">
                  <li>역할 : 프로젝트 매니저 (팀장)</li>
                  <li>- 기획 ~ 배포 전 과정 총괄</li>
                  <li>- 예약 페이지 기획, 디자인, 개발</li>
                  <li>- GA 적용 및 A/B테스트 후 배포</li>
                </ul>
                <a
                  href="https://www.notion.so/1b25da4a6d7580c7b858c796925882e7?pvs=4"
                  target="_blank"
                >
                  <button class="view-button main-h5">
                    → 기획부터 개발까지, 작업 전체 보기
                  </button>
                </a>
              </div>
            </div>
            <hr />
            <div className="content">
              <p className="main-h5">
                제빙기는 위생 관리가 필수지만,
                <br />
                사용자의 위생 인식 부족과 예약 불편으로 청소 수요가 낮습니다.
                <br />
                <b>다양한 연령대의 고객군을 고려한</b>
                <br />
                직관적인 예약 시스템과 <b>장기 이용을 유도할 전략</b>이
                필요합니다.
              </p>

              <img src="/images/bingfree (1).png" alt="상세이미지 1" />
              <p className="main-h4">
                <b>
                  <span class="highlight">사용자의 불편에서 출발한 기획</span>,
                </b>
                <br />
                빙프리는 이렇게 정리했습니다.
              </p>
              <div className="solution-list">
                {points.map((point, idx) => (
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
              <img src="/images/bingfree (3).png" alt="상세이미지2" />
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
              </p>
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
        {sectionId === "gumi" && <section id="gumi">구미 내용</section>}
      </div>
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
    </div>
  );
};

export default Modal;
