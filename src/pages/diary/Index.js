import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import DiaryList from "../../components/diary/DiaryList";
import { deleteAllData } from "../../api/api_diary/diary";

const Index = props => {
  // 상위 컴포넌트에서 값을 받아온다
  const list = props.list;
  const setList = props.setList;

  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  const handleClickList = index => {
    navigate("/diary/edit" + index);
  };

  const handleClickAllDelete = () => {
    alert("정말 모두 지우시겠습니까?");
    // LS 지우기
    deleteAllData([]);
    // state 초기화
  };

  // 항목 삭제 기능
  const deleteDiary = pk => {
    alert(pk + "삭제");
    // 1. list state 를 복사한 배열을 만든다.
    // 2. 복사한 배열에서 pk 번를 제거한다.
    // 3. list Set 한다.
    // 4. LS 저장한다.
  };

  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary 홈
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫화면</h2>
        <div>
          <h3> 배열의 내용을 출력함 : map 메서드사용 </h3>
          {/* 목록 출력 */}
          {list.map((item, idx) => {
            return (
              <DiaryList
                key={idx}
                item={item}
                pk={idx}
                handleClick={deleteDiary}
              />
            );
          })}
        </div>
        <Link to="/diary/add">다이어리 추가 가기</Link>
        <Link to="/diary/edit/1">다이어리 수정 가기</Link>
        <button
          onClick={() => {
            handleClickAllDelete();
          }}
        >
          전체 목록 삭제하기
        </button>
      </Main>
      <Footer>
        <p>Coprytight 2023. 다이어리 첫화면</p>
      </Footer>
    </>
  );
};

export default Index;
