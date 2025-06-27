import { useEffect } from "react";
import Home from "./Pages/Home";
import "./styles/index.scss";

function App() {
   useEffect(() => {
    document.title = "가능성을 이어주는 기획자";
  }, []);
  return <Home />;
}

export default App;
