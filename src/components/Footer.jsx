import "./Footer.scss";
const faqlist = [
  { Question: "기획할 때 가장 중요하게 여기는 가치는 무엇인가요?", Answer: "" },
  { Question: "협업 중 의견 충돌이 있었을 때 어떻게 조율했나요?", Answer: "" },
  {
    Question: "가장 도전적이었던 프로젝트는 무엇이고, 어떻게 극복했나요?",
    Answer: "",
  },
  { Question: "결과가 예상과 달랐을 때 어떤 선택을 하셨나요?", Answer: "" },
  { Question: "5년 후, 어떤 팀에서 어떤 문제를 풀고 싶나요?", Answer: "" },
];

const Footer = () => {
  return (
    <footer>
      <div className="profile">
        <h1 className="main-h2"> 김효빈 | KIM HYO BEEN</h1>
        <div className="profile-list">
          <ul className="title main-h6">
            <li>Birth</li>
            <li>Email</li>
            <li>Mobile</li>
            <li>Site</li>
          </ul>
          <ul className=" main-h6">
            <li>1998.12.21</li>
            <li>hyobin1221@naver.com</li>
            <li>010-3508-3619</li>
            <li>
              <a
                href="https://www.notion.so/18a5da4a6d758023a05dcb9ea6920cf8?pvs=4"
                target="_blank"
              >
                노션
              </a>
              <a href="https://github.com/clemetie" target="_blank">
                깃허브
              </a>
              <a href="https://blog.naver.com/hyobin1221" target="_blank">
                블로그
              </a>
              <a
                href="https://youtube.com/@f0r_been422?si=X2wbJET5FmmF5SZD"
                target="_blank"
              >
                유튜브
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="faq">
        <p className="main-h2">FAQ</p>
        {faqlist.map((item, idx) => (
          <div className="faqlist main-h5" key={idx}>
            {item.Question}
          </div>
        ))}
      </div>
      <h1 className="bigtitle">KIMHYOBEEN</h1>
    </footer>
  );
};

export default Footer;
