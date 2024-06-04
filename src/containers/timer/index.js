// import React, { useState, useEffect } from "react";

// function CountdownTimer() {
//   const [hours, setHours] = useState(0);
//   const [minutes, setMinutes] = useState(1);
//   const [seconds, setSeconds] = useState(10);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let countdown;

//     if (isRunning) {
//       countdown = setInterval(() => {
//         setSeconds((prevSeconds) => {
//           if (prevSeconds > 0) {
//             return prevSeconds - 1;
//           } else {
//             if (minutes > 0) {
//               setMinutes((prevMinutes) => prevMinutes - 1);
//               return 59;
//             } else {
//               if (hours > 0) {
//                 setHours((prevHours) => prevHours - 1);
//                 setMinutes(59);
//                 return 59;
//               } else {
//                 clearInterval(countdown);
//                 setIsRunning(false);
//                 return 0;
//               }
//             }
//           }
//         });
//       }, 1000);
//     }

//     return () => clearInterval(countdown);
//   }, [isRunning, hours, minutes]);

//   const startTimer = () => {
//     setIsRunning(true);
//   };

//   return (
//     <div>
//       <h1>Countdown Timer</h1>
//       <div>
//         {hours < 10 ? "0" + hours : hours}:
//         {minutes < 10 ? "0" + minutes : minutes}:
//         {seconds < 10 ? "0" + seconds : seconds}
//       </div>
//       <button onClick={startTimer}>Start Timer</button>
//     </div>
//   );
// }

// export default CountdownTimer;
