const Home = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 24 24" // enable-background를 enableBackground로 변경
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
      style={{
        pointerEvents: "none",
        display: "inherit",
        width: "100%",
        height: "100%",
      }} // 객체 형태로 수정
      aria-hidden="true"
      fill={fill}
    >
      <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"></path>
    </svg>
  );
};

export default Home;
