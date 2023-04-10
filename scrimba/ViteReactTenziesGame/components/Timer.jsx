import { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds((seconds) => (seconds + 1) % 60);
      setMinutes((minutes) => (minutes + (seconds === 59 ? 1 : 0)) % 60);
      setHours(
        (hours) => (hours + (minutes === 59 && seconds === 59 ? 1 : 0)) % 24
      );
    }, 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  return (
    <div className="timer">{`timer: ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`}</div>
  );
}

export default Timer;
