import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Intro from "./pages/Intro";
import DiaryAdd from "./pages/diary/DiaryAdd";
import DiaryEdit from "./pages/diary/DiaryEdit";
import DiaryIndex from "./pages/diary/Index";
import "./styles/App.css";
import { useEffect, useState } from "react";
import { getAllData, initData } from "./api/api_diary/diary";

function App() {
  // 다이어리 데이터 갱신용 state
  const [list, setList] = useState([]);

  // 데이터 초기화
  const getInitData = () => {
    initData();
    // 전체 데이터 출력
    const data = getAllData();
    // 화면이 갱신되기를 원한다.
    // 그래서 state 를 통해서 갱신하겠다.
    setList([...data]);
  };

  // html 이 화면에 보이면 처리
  // [] 의 의미는 1번만 실행한다.
  useEffect(() => {
    // 외부 데이터를 가져오라
    getInitData();
  }, []);

  return (
    <div className="layout">
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Index />}></Route>
          <Route
            path="/diary"
            element={<DiaryIndex list={list} setList={setList} />}></Route>
          <Route
            path="/diary/add"
            element={<DiaryAdd list={list} setList={setList} />}></Route>
          <Route
            path="/diary/edit/:pk"
            element={<DiaryEdit list={list} />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;


