import { useState, useEffect } from "react";

//styles
import "./Timer.scss";

const Timer = () => {
  const [time, setTime] = useState();

  useEffect(() => {
    
    setTime(getTime());

    const interval = setInterval(() => {
      const updateTime = getTime();
      updateTime !== time && setTime(updateTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const getTime = () =>
    new Date().toLocaleTimeString([], { timeStyle: "short" });

  return <div className="timer">TIME: {time}</div>;
};

export default Timer;
