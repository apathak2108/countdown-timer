import React, { useState } from "react";
import {
  StyledMainDiv,
  StyledTimerDiv,
  StyledButtonsDiv,
  StyledButton,
} from "./Home.styled";
import TimerBox from "../../components/TimerBox";
import { useSelector } from "react-redux";

const Home = () => {
  const values = useSelector((state) => state?.countdown);
  const [hours, setHours] = useState(values?.hours);
  const [minutes, setMinutes] = useState(values?.minutes);
  const [seconds, setSeconds] = useState(values?.seconds);

  return (
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
        <StyledButton style={{ backgroundColor: "#47478d" }}>
          SET TIMER
        </StyledButton>
      </StyledButtonsDiv>
    </StyledMainDiv>
  );
};

export default Home;
