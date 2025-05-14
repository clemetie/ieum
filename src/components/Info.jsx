const Info = () => {
  return (
    <section className="Info-wrap">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/HFCKQnIDRSA?si=d7eNpjR_TGM9h4B0&amp;start=120"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="profile">
        <p className="hello">
          안녕하세요,
          <br />
          가능성을 이어주는 PM 김효빈입니다
        </p>
        <ul className="Info-bullets">
          <li>팀원 각자의 강점을 조율하며 더 나은 결과를 만듭니다.</li>
          <li>사용자의 Pain Point를 빠르게 읽고 연결합니다.</li>
          <li>시작만 해도 반드시 피니시를 책임집니다.</li>
          <li>흐름 속에서도, 집중을 잃고 다시 연결합니다.</li>
        </ul>
      </div>
      <div className="Info-buttons">
        <a
          href="https://www.notion.so/18a5da4a6d758023a05dcb9ea6920cf8?pvs=4"
          target="_blank"
        >
          Notion
        </a>
        <a href="https://github.com/clemetie" target="_blank">
          Github
        </a>
      </div>
    </section>
  );
};

export default Info;
