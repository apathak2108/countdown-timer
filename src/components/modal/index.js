import React, { useState } from "react";
import {
  ModalMainDiv,
  ModalDiv,
  InputsDiv,
  StyledButton,
} from "./modal.styled";
import InputField from "../InputField";
import { setCountdownValues } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TimerBox from "../TimerBox";

const Modal = () => {
  const dispatch = useDispatch();
  const [hoursValue, setHoursValue] = useState(null);
  const [minutesValue, setMinutesValue] = useState(null);
  const [secondsValue, setSecondsValue] = useState(null);


  const handleSetCountdown = () => {
    dispatch(setCountdownValues(hoursValue, minutesValue, secondsValue));
  };

  return (
    <ModalMainDiv>
      <ModalDiv>
        <h3>Enter Countdown Details</h3>
        <InputsDiv>
          <InputField
            placeholder="Enter Hours in HH"
            value={hoursValue}
            onChange={(e) => setHoursValue(e.target.value)}
            maxLength={2}
          />
          <InputField
            placeholder="Enter Minutes in MM"
            value={minutesValue}
            onChange={(e) => setMinutesValue(e.target.value)}
          />
          <InputField
            placeholder="Enter Seconds in SS"
            value={secondsValue}
            onChange={(e) => setSecondsValue(e.target.value)}
          />
          <StyledButton type="submit" onClick={handleSetCountdown}>
            Submit
          </StyledButton>
        </InputsDiv>
      </ModalDiv>
    </ModalMainDiv>
  );
};

export default Modal;
