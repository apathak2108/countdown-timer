import React, { useRef, useState } from "react";
import {
  StyledMainDiv,
  StyledTimerDiv,
  StyledButtonsDiv,
  StyledButton,
} from "./Home.styled";
import TimerBox from "../../components/TimerBox";
import { isModalOpen } from "../../redux/actions";
import Modal from "../../components/modal";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const values = useSelector((state) => state?.countdown);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isTimerStop, setIsTimerStop] = useState(false);
  const intervalRef = useRef(null);
  const [hours, setHours] = useState(1);
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(15);

  const handleStartTimer = () => {
    setIsTimerStart(true);
    setIsTimerStop(false);
    let totalSeconds = hours * 3600 + min * 60 + sec;
    intervalRef.current = setInterval(() => {
      totalSeconds--;
      console.log(totalSeconds, "totalSeconds");
      setHours(Math.floor(totalSeconds / 3600));
      setMin(Math.floor((totalSeconds % 3600) / 60));
      setSec(totalSeconds % 60);

      if (totalSeconds === 0) {
        clearInterval(intervalRef.current);
        setIsTimerStart(false);
        alert("Countdown complete !");
      }
    }, 1000);
  };

  const handleStopTimer = () => {
    setIsTimerStop(true);
    clearInterval(intervalRef.current);
    setIsTimerStart(false);
  };

  return (
    <>
      {!values.isModal && (
        <StyledMainDiv>
          <StyledTimerDiv>
            <TimerBox value={hours} />
            <h1>:</h1>
            <TimerBox value={min} />
            <h1>:</h1>
            <TimerBox value={sec} />
          </StyledTimerDiv>
          <StyledButtonsDiv>
            {!isTimerStart && (
              <StyledButton onClick={handleStartTimer}>
                {isTimerStop ? "RESUME" : "START"}
              </StyledButton>
            )}
            <StyledButton
              style={{ backgroundColor: "#47478d" }}
              onClick={() => dispatch(isModalOpen())}
            >
              SET TIMER
            </StyledButton>
            {isTimerStart && (
              <StyledButton
                style={{ backgroundColor: "#de2046" }}
                onClick={handleStopTimer}
              >
                STOP
              </StyledButton>
            )}
          </StyledButtonsDiv>
        </StyledMainDiv>
      )}
      {values.isModal && <Modal />}
    </>
  );
};

export default Home;
