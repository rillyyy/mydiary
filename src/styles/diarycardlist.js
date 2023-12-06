import styled from "@emotion/styled";

// emotion 작업해 보기
export const DiaryCardList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 20px;

  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  background: #eaeaea;
  border: 1px solid #d6d6d6;
`;

export const DiaryCardListImg = styled.div`
  max-width: 56px;
`;

export const DiaryCardListWrap = styled.div`
  width: 100%;
`;
export const DiaryCardListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  margin-bottom: 5px;
  h4 {
    width: 100%;
  }
`;

export const DiaryCardListBody = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 5px;
`;

export const DiaryCardListFooter = styled.div``;
export const DiaryCardListOpt = styled.div``;
