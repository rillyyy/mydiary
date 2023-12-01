import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const DiaryEdit = () => {
  const param = useParams();
  console.log(param);

  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary - Edit
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정 화면 : {param.pk} 수정
        </h2>
      </Main>
      <Footer>
        <div style={{ textAlign: "center", color: "hotpink" }}>
          Copyright 2023, 다이어리 수정
        </div>
      </Footer>
    </>
  );
};

export default DiaryEdit;
