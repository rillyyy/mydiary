import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>My Diary</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 첫 화면 Main
        </h2>
      </Main>
      <Footer>
        <div style={{ textAlign: "center", color: "hotpink" }}>
          Copyright 2023
        </div>
      </Footer>
    </>
  );
};

export default Index;
