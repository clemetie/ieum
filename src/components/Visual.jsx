const Visual = () => {
  return (
    <section className="visual-wrap headline">
      <span className="title left main-h1">0에서 1로 뛰는 순간,</span>
      <svg
        className="wave-line"
        viewBox="0 0 1920 120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className="blue-path"
          d="M0,60 C320,120 640,0 960,60"
          stroke="#4A90F4"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
        <path
          className="yellow-path"
          d="M960,60 C1280,120 1600,0 1920,60"
          stroke="#FEE274"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="title right main-h1">가능성을 이어주는 기획자</span>
    </section>
  );
};

export default Visual;
