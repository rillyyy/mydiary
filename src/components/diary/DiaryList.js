import React from "react";
import {
  DiaryCardList,
  DiaryCardListBody,
  DiaryCardListFooter,
  DiaryCardListHeader,
  DiaryCardListImg,
  DiaryCardListOpt,
  DiaryCardListWrap,
} from "../../styles/diarycardlist";
import { Link } from "react-router-dom";

const DiaryList = props => {
  const item = props.item;
  const pk = props.pk;
  const handleClick = props.handleClick;
  return (
    <DiaryCardList>
      <DiaryCardListImg>
        <img src={item.detail.pics[0]} alt={item.title} />
      </DiaryCardListImg>
      <DiaryCardListWrap>
        <DiaryCardListHeader>
          <h4>{item.title}</h4>
          <i className="card-list-open">{item.open ? "사적" : "공적"}</i>
          <i className="card-list-mood">{item.mood}</i>
        </DiaryCardListHeader>
        <DiaryCardListBody>{item.memo}</DiaryCardListBody>
        <DiaryCardListFooter>
          {`${item.year}년 ${item.month}월 ${item.date}일 ${item.day}요일`}
          <i className="card-list-weather">{item.weather}</i>
        </DiaryCardListFooter>
      </DiaryCardListWrap>
      <DiaryCardListOpt>
        <input type="checkbox" name="" />
        <button
          onClick={() => {
            handleClick(pk);
          }}
        >
          삭제하기
        </button>

        <Link to={`/diary/edit/${pk}`}>수정하기</Link>
      </DiaryCardListOpt>
    </DiaryCardList>
  );
};

export default DiaryList;
