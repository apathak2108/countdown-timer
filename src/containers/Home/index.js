import React, { useState } from "react";
import {
  StyledMainDiv,
  StyledTimerDiv,
  StyledButtonsDiv,
  StyledButton,
} from "./Home.styled";
import TimerBox from "../../components/TimerBox";
import { useDispatch, useSelector } from "react-redux";
import { isModalOpen } from "../../redux/actions";
import Modal from "../../components/modal";

const Home = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state?.countdown);
  const [hours, setHours] = useState(values?.hours);
  const [minutes, setMinutes] = useState(values?.minutes);
  const [seconds, setSeconds] = useState(values?.seconds);

  return (
    <>
      {!values.isModal && (
        <StyledMainDiv>
          <StyledTimerDiv>
            <TimerBox value={hours} />
            <h1>:</h1>
            <TimerBox value={minutes} />
            <h1>:</h1>
            <TimerBox value={seconds} />
          </StyledTimerDiv>
          <StyledButtonsDiv>
            <StyledButton>START</StyledButton>
            <StyledButton
              style={{ backgroundColor: "#47478d" }}
              onClick={() => dispatch(isModalOpen())}
            >
              SET TIMER
            </StyledButton>
          </StyledButtonsDiv>
        </StyledMainDiv>
      )}
      {values.isModal && <Modal />}
    </>
  );
};

export default Home;
