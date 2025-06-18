import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <section className="Info-wrap">
      <p className="main-h1">About Me</p>
      <div className="info">
        <div className="left">
          <div className="photo">
            <img src="/images/profile.jpg" alt="프로필사진" />
          </div>
          <div className="ment">
            <p>
              악기를 조율하며 사람과 팀의 호흡을 읽던 제가,
              <br /> 무대 뒤에서 흐름을 설계하는
              <br /> 기획자를 꿈꾸게 되었습니다.
              <br /> 연주자가 아닌 기획자로 방향을 틀게 된 건
              <br /> 관객과 팀의 연결, 과정과 결과의 흐름을
              <br /> 더 깊이 고민하고 싶어졌기 때문입니다.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right1">
            <div className="right1-1">
              <p className="infotitle">Education</p>
              <ul className="Education">
                <li>
                  영천 성남 여자 고등학교 졸업
                  <span>2017.02</span>
                </li>
                <li>
                  경성대학교 관현악과 졸업 (학사)
                  <span>2017.03 ~ 2020.02</span>
                </li>
                <li>
                  그린아트컴퓨터학원 수료
                  <span>2024.12 ~ 2025.06</span>
                </li>
                <li style={{ color: "#757575" }}>
                  기업요구 프로젝트 중심 웹 UIUX 분석 기획 개발자 양성과정
                </li>
              </ul>
            </div>
            <div className="right1-2">
              <p className="infotitle">Certificate</p>
              <ul className="Certificate">
                <li>
                  음악 심리 상담사 1급 <span>2018.03</span>
                </li>
                <li>
                  문화예술교육사 2급 <span>2021.02</span>
                </li>
                <li>
                  운전면허 2종 보통 <span>2024.01</span>
                </li>
                <li>
                  웹디자인기능사 <span>2025.06</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right2">
            <p className="infotitle">Activities</p>
            <div className="right2-1">
              <div className="right2-2-1">
                <p className="main-h4">Leadership & Team Roles</p>
                <ul>
                  <li>
                    김해 청소년 오케스트라 | 수석
                    <span>2018.03 ~ 2019.03</span>
                  </li>
                  <li>
                    브리즈온 윈드 오케스트라 | 수석
                    <span>2021.11 ~ 2023.11</span>
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/yj6I9G4Naco?si=Q7rOjgk6NNTXxXr9"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginRight: "6px" }}
                      />
                      부산 심포니 오케스트라 | 객원
                    </a>

                    <span>2021.02 ~ 2023.06</span>
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/amieDynV_GI?si=m3_UR8C_fir9IzHc"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginRight: "6px" }}
                      />
                      비라스 금관 앙상블 | 단원
                    </a>
                    <span>2022.03 ~ 2023.11</span>
                  </li>
                </ul>
              </div>
              <div className="right2-2-2">
                <p className="main-h4">Planning & Operation</p>
                <ul>
                  <li>
                    <a
                      href="https://youtu.be/rfvH_Yay7SE?si=PvIa7kDy_c7T410x"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginRight: "6px" }}
                      />
                      브리오 금관 앙상블 | 리더 &lt;음대, 바람 || &gt; 참여
                    </a>
                    <span>2022.07</span>
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/Mw1bI71hFbQ?si=vd3omOUyz6gseKgH"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        style={{ marginRight: "6px" }}
                      />
                      벨로체 퀸텟 | 리더 &lt;Remind&gt; 공연 기획
                    </a>
                    <span>2023.02</span>
                  </li>
                  <li>
                    빙프리 제빙기 청소 예약 플랫폼 | 팀장 &lt;서비스 기획&gt;
                    <span>2025.04</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
