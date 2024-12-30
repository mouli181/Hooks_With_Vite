import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("useeffect");

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 100);

    return () => clearInterval(interval);
  },[]);
  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
}
export default Timer;
// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);  

//   useEffect(() => {
//     let interval;

//     if (isRunning) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => prevSeconds + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const handleStart = () => {
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   return (
//     <div>
//       <h1>Timer: {seconds} seconds</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }

// export default Timer;
