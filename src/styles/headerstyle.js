import styled from "@emotion/styled";

export const TopBar = styled.header`
  display: flex;
  width: 100%;
  height: 64px;
  padding: 8px 4px;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  flex-shrink: 0;

  h2 {
    font-weight: 400;
  }
  button {
    display: flex;
    width: 48px;
    height: 48px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
