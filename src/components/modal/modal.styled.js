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
  height: 229px;
  width: 257px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;

export const StyledButton = styled.button`
  background-color: black;
  border: none;
  height: 23px;
  border-radius: 2px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
