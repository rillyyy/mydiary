import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { postData } from "../../api/api_diary/diary";

const DiaryEdit = props => {
  const param = useParams();
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  const list = props.list;
  const setList = props.setList;

  const [open, setOpen] = useState(true);
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [day, setDay] = useState("");
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const [category, setCategory] = useState("0");
  const [weather, setWeather] = useState(1);
  const [mood, setMood] = useState(6);
  const [content, setContent] = useState("");
  const [pic1, setPic1] = useState("");
  const [pic2, setPic2] = useState("");
  // 화면에 초기값 셋팅 ( [] 배열은 처음 만 실행하라)
  useEffect(() => {
    const data = list[param.pk];
    console.log(data);
    setOpen();
    setYear();
    setMonth();
    setDate();
    setDay();
    setTitle();
    setMemo();
    setCategory();
    setWeather();
    setMood();
    setContent();
    setPic1();
    setPic2();
  }, []);

  const handleSubmitDiaryForm = e => {
    // 1. 실행시 자동으로 웹브라우저 새로고침 됨
    //    이러면 SPA 가 아니다. 그래서 막아야 합니다.
    e.preventDefault();
    // 2. 추가해 줄 자료를 만든다.
    const item = {
      open: open,
      year: year,
      month: month,
      date: date,
      day: day,
      title: title,
      memo: memo,
      category: category,
      weather: weather,
      mood: mood,
      detail: {
        content: content,
        pics: [pic1, pic2],
      },
    };
    // 3. list 원본을 복사하고 새로운 내용을 추가한다.
    const arr = [...list, item];
    // 4. state 업데이트
    setList(arr);
    // 5. LS 저장합니다.
    postData(arr);
    // 6. 안내창
    alert("항목이 추가되었습니다.");
    // 7. 이전화면
    navigate(-1);
  };
  const handleChangeDiaryInput = e => {
    // console.log(e.target.name, e.target.value);

    const tg = e.target.name;
    const value = e.target.value;

    if (tg === "open") {
      const temp = value === "1" ? true : false;
      setOpen(temp);
    }
    if (tg === "date") {
      const temp = value.split("-");
      // 요일
      const yoil = ["일", "월", "화", "수", "목", "금", "토"];
      const day = yoil[new Date(value).getDay()];
      setYear(temp[0]);
      setMonth(temp[1]);
      setDate(temp[2]);
      setDay(`${day}요일`);
    }
    if (tg === "title") {
      setTitle(value);
    }
    if (tg === "memo") {
      setMemo(value);
    }
    if (tg === "category") {
      const temp = value === "0" ? "사적" : "공적";
      setCategory(temp);
    }
    if (tg === "weather") {
      setWeather(parseInt(value));
    }
    if (tg === "mood") {
      setMood(parseInt(value));
    }
    if (tg === "content") {
      setContent(value);
    }
    if (tg === "pic1") {
      setPic1(value);
    }
    if (tg === "pic2") {
      setPic2(value);
    }
  };
  
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="bt_back.svg">
        My Diary 수정
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 추가화면</h2>

        <div>
          <form
            action=""
            method="get"
            onSubmit={e => {
              handleSubmitDiaryForm(e);
            }}
          >
            <table border="1" width="100%">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>내용</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>제목</td>
                  <td>
                    <input
                      type="text"
                      // minLength={5}
                      maxLength={30}
                      placeholder="제목을 입력하세요."
                      name="title"
                      value={title}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>메모</td>
                  <td>
                    <input
                      type="text"
                      minLength={10}
                      maxLength={100}
                      placeholder="메모를 입력해주세요."
                      name="memo"
                      value={memo}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>카테고리</td>
                  <td>
                    <select
                      name="category"
                      defaultValue={category}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    >
                      <option value="0">공적</option>
                      <option value="1">사적</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>날씨</td>
                  <td>
                    {/* 1 맑음, 2흐림, 3비, 4눈, 5태풍, 6우박, 7안개 */}
                    <input
                      type="radio"
                      value={1}
                      name="weather"
                      defaultChecked={true}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    맑음
                    <input
                      type="radio"
                      value={2}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    흐림
                    <input
                      type="radio"
                      value={3}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    비
                    <input
                      type="radio"
                      value={4}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    눈
                    <input
                      type="radio"
                      value={5}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    태풍
                    <input
                      type="radio"
                      value={6}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    우박
                    <input
                      type="radio"
                      value={7}
                      name="weather"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    안개
                  </td>
                </tr>
                <tr>
                  <td>기분</td>
                  <td>
                    {/* 1 꿀꿀해, 2 좋아, 3 짜증나, 4 화나, 5 슬퍼, 6 기뻐, 7 편안해, 8 그냥그래 */}
                    <input
                      type="radio"
                      value={1}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    꿀꿀해
                    <input
                      type="radio"
                      value={2}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    좋아
                    <input
                      type="radio"
                      value={3}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    짜증나
                    <input
                      type="radio"
                      value={4}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    화나
                    <input
                      type="radio"
                      value={5}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    슬퍼
                    <input
                      type="radio"
                      value={6}
                      name="mood"
                      defaultChecked={true}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    기뻐
                    <input
                      type="radio"
                      value={7}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    편안해
                    <input
                      type="radio"
                      value={8}
                      name="mood"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    그냥그래
                  </td>
                </tr>
                <tr>
                  <td>공개/비공개</td>
                  <td>
                    <input
                      type="radio"
                      value={0}
                      name="open"
                      defaultChecked={true}
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    공개
                    <input
                      type="radio"
                      value={1}
                      name="open"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />{" "}
                    비공개
                  </td>
                </tr>
                <tr>
                  <td>상세내용</td>
                  <td>
                    <textarea
                      name="content"
                      value={content}
                      rows="5"
                      cols="50"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>사진</td>
                  <td>
                    <input
                      type="file"
                      name="pic1"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                    <input
                      type="file"
                      name="pic2"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>날짜</td>
                  <td>
                    <input
                      type="date"
                      name="date"
                      onChange={e => {
                        handleChangeDiaryInput(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} align="center">
                    <input type="reset" value="다시작성" />
                    <input type="submit" value="작성완료" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Main>
      <Footer>
        <p>Coprytight 2023. 다이어리 수정화면</p>
      </Footer>
    </>
  );
};

export default DiaryEdit;
