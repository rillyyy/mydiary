import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";

const DiaryAdd = () => {
  return (
    <>
      <Header>My Diary - Add</Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가</h2>
      </Main>
      <Footer>
        <div style={{ textAlign: "center", color: "hotpink" }}>
          Copyright 2023, 다이어리 추가
        </div>
      </Footer>
    </>
  );
};

export default DiaryAdd;
