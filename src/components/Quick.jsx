const QuickMenu = () => {
  const email = "hyobin1221@naver.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("이메일 주소가 복사되었습니다!");
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ 전체 창 최상단으로 이동
  };

  return (
    <div className="quick-menu">
      <div className="mail" onClick={copyEmail}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#FEE274" />
          <g clipPath="url(#clip0_100_288)">
            <path
              d="M24.4 25.6001C22.4125 25.6001 20.8 27.2126 20.8 29.2001C20.8 30.3326 21.3325 31.3976 22.24 32.0801L38.56 44.3201C39.415 44.9576 40.585 44.9576 41.44 44.3201L57.76 32.0801C58.6675 31.3976 59.2 30.3326 59.2 29.2001C59.2 27.2126 57.5875 25.6001 55.6 25.6001H24.4ZM20.8 34.0001V49.6001C20.8 52.2476 22.9525 54.4001 25.6 54.4001H54.4C57.0475 54.4001 59.2 52.2476 59.2 49.6001V34.0001L42.88 46.2401C41.17 47.5226 38.83 47.5226 37.12 46.2401L20.8 34.0001Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_100_288">
              <rect
                width="38.4"
                height="38.4"
                fill="white"
                transform="translate(20.8 20.8)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="scrollTop" onClick={scrollToTop}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_100_283)">
            <path
              d="M40 80C50.6087 80 60.7828 75.7857 68.2843 68.2843C75.7857 60.7828 80 50.6087 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0C29.3913 0 19.2172 4.21427 11.7157 11.7157C4.21427 19.2172 0 29.3913 0 40C0 50.6087 4.21427 60.7828 11.7157 68.2843C19.2172 75.7857 29.3913 80 40 80ZM58.9062 42.3438C60.375 43.8125 60.375 46.1875 58.9062 47.6406C57.4375 49.0938 55.0625 49.1094 53.6094 47.6406L40.0156 34.0469L26.4219 47.6406C24.9531 49.1094 22.5781 49.1094 21.125 47.6406C19.6719 46.1719 19.6562 43.7969 21.125 42.3438L37.3438 26.0938C38.8125 24.625 41.1875 24.625 42.6406 26.0938L58.9062 42.3438Z"
              fill="#FEE274"
            />
          </g>
          <defs>
            <clipPath id="clip0_100_283">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default QuickMenu;
