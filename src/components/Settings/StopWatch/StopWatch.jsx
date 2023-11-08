import { Stack } from "@mui/material";
import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId;

    const startTimer = () => {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    };
    startTimer();
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <Stack sx={{ color: "#dbdee1", fontSize: "14px" }}>
      {formattedTime()} elapsed
    </Stack>
  );
};

export default Stopwatch;
