import { useEffect, useState } from "react";

export const UseEffectTimer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer stopped");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};