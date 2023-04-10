import { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [shouldReset, setShouldReset] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isRunning) {
        setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
        setMinutes((prevMinutes) => (prevMinutes + (seconds === 59 ? 1 : 0)) % 60);
        setHours(
          (prevHours) => (prevHours + (minutes === 59 && seconds === 59 ? 1 : 0)) % 24
        );
      }
    }, 1000);

    return () => clearTimeout(timeout)
  }, [seconds, isRunning]);

  useEffect(() => {
    if (props.winCondition) {
      const currentTime = `${hours}:${minutes}:${seconds}`
      localStorage.setItem("bestTime", currentTime)
      setBestTime(currentTime)
      setShouldReset(true)
      setIsRunning(false)
    } else {
      setIsRunning(true)
    }

  }, [props.winCondition, seconds])
  useEffect(() => {
    const storedBestTime = localStorage.getItem("bestTime");
    const defaultBestTime = "00:00:00";
    const initialBestTime = bestTime || storedBestTime || defaultBestTime;
    setBestTime(initialBestTime);
  }, []);
  useEffect(() => {
    if (shouldReset) {
      setSeconds(0)
      setMinutes(0)
      setHours(0)
      setShouldReset(false)
    }
  }, [props.winCondition])
  return (
    <>
      <div className="timer">{`timer: ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes
        }:${seconds < 10 ? "0" + seconds : seconds}`}</div>
      <div className="bestTime">{`Your best time is ${bestTime || localStorage.getItem("bestTime") || 0}`}</div>
    </>
  );
}

export default Timer;
