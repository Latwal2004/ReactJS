import { useEffect, useState } from "react";

export const UseEffectCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect: Count updated →", count);

    return () => {
      console.log("Cleanup: Previous effect removed");
    };
  }, [count]);

  return (
    <div>
      <h2>Cleanup Function</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};