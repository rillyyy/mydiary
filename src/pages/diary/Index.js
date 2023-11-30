import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";

const Index = () => {
  return (
    <>
      <Header> Welcome to My Diary </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹 서비스 첫 화면</h2>
      </Main>
      <Footer>
        <div style={{ textAlign: "center", color: "hotpink" }}>
          Copyright 2023, 다이어리
        </div>
      </Footer>
    </>
  );
};

export default Index;
