import styled from "styled-components";

export const ModalMainDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
`;

export const ModalDiv = styled.div`
  height: 390px;
  width: 270px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-flow: column;
  align-items: center;
`;
