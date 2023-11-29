import styled from "@emotion/styled";
import "./styles/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const Contents = styled.main`
    width: 100%;
    min-height: 500px;
  `;

  return (
    <div className="layout">
      <div className="wrap">
        <Header />
        <Contents>중심 컨텐츠</Contents>
        <Footer>홍길동</Footer>
      </div>
    </div>
  );
}

export default App;
