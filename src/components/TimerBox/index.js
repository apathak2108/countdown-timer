import React from "react";
import { StyledTimerBox, StyledTimerText } from "./TimerBox.styled";

const TimerBox = ({ value }) => {
  return (
    <StyledTimerBox>
      <StyledTimerText>{value}</StyledTimerText>
    </StyledTimerBox>
  );
};

export default TimerBox;
