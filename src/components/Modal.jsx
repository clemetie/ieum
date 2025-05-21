import "./Modal.scss";
import { useEffect } from "react";
import DonutChart from "./Donutchart";
import Agecharts from "./Agecharts";

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
                  제빙기 청소를 간편하게 예약할 수 있는 웹 플랫폼
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
        {sectionId === "gumi" && (
          <section id="gumi">
            <div className="top">
              <a href="https://noodle-kappa.vercel.app/" target="_blank">
                <img src="/images/projectCard2.png" alt="프로젝트 썸네일" />
              </a>
              <div className="description-box">
                <h3 className="main-h3"> 구미 라면 축제 | 축제 홍보 사이트</h3>
                <p className="main-h6">
                  2025.02.06 ~ 2025.02.27 | 4인 프로젝트(기획, 개발, 디자인)
                </p>
                <p className="description" style={{ color: "#FC6713" }}>
                  지역 축제의 즐거움과 정보를 효과적으로 전달하기 위해 기획한
                  웹사이트
                  <br /> 방문자가 한눈에 정보를 확인하고 쉽게 참여할 수 있도록
                  구성
                </p>
                <ul className="main-h6">
                  <li>역할 : 팀원 | 기여도 80%</li>
                  <li>- 메인 페이지 기획, 디자인, 개발</li>
                  <li>- 축제 배너, 포스터 제작</li>
                  <li>- 커뮤니티 페이지 기획, 디자인, 개발</li>
                </ul>
                <a href="https://noodle-kappa.vercel.app/" target="_blank">
                  <button class="view-button main-h5">→ 사이트 보러가기</button>
                </a>
              </div>
            </div>
            <hr style={{ borderColor: "#FC6713" }} />
            <div className="content">
              <p className="main-h5">
                라면 축제는 다양한 연령대의 방문자가 참여하는 행사인 만큼{" "}
                <b>축제 정보와 참여 방법을 한눈에 볼 수 있는 간결한 구조</b> 와
                <br />
                구미 지역 관광 정보까지 함께 제공하는 <b>통합 안내 플랫폼</b> 이
                필요합니다
              </p>

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
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#F16529" />
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

              <p className="main-h4" style={{ color: "#FC6713" }}>
                페이지별 기능 정의 및 우선 고려 사항
              </p>
              <div className="gumi_3">
                <img src="/images/gumi_ux.png" alt="요구사항 명세서" />
                <img src="/images/moscow.png" alt="우선 순위 정의" />
              </div>
              <p className="main-h6">
                축제 참여를 유도하는 <b>예약 기능을 중심</b>으로,
                <br />
                사용자의 탐색 흐름과 운영 효율성을 고려해{" "}
                <b>기능 우선 순위를 정의</b>하고,
                <br />
                이를 기반으로 <b>실현 가능한 UX 구조를 설계</b>했습니다.
              </p>
            </div>
          </section>
        )}
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
