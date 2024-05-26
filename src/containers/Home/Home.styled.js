import styled from "styled-components";

export const StyledMainDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const StyledTimerDiv = styled.div`
  display: flex;
  gap: 15px;
`;

export const StyledButtonsDiv = styled.div`
  display: flex;
  width: 347px;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  height: 35px;
  width: 168px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #32cd32;
  cursor: pointer;
  border-radius: 3px;
  color: white;
`;
