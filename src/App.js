import Container from "./Components/Container/Container.js";
import Timer from "./Components/Timer/Timer.js";
import Button from "./Components/Button/Button.js";
import { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState(0);
  const [intervalValue, setIntervalValue] = useState(null);

  const startTimer = () => {
    console.log("Start timer");
    setIntervalValue(setInterval(() => {
      setTime(prevValue => prevValue + 200);
    }, 200));
  };

  const stopTimer = () => {
    clearInterval(intervalValue);
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      if (intervalValue) clearInterval(intervalValue);
    };
  }, []);

  return (
    <Container>
      <Timer milliseconds={time}/> 
      <Button onClick={startTimer}>start</Button>
      <Button onClick={stopTimer}>stop</Button>
      <Button onClick={resetTimer}>reset</Button>
    </Container>
  );
};

export default App;

