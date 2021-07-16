import React, { useState, useEffect } from "react";

function TimerThree() {
  const [count, setCount] = useState(0);

  // 1. We will create TimerThree with code from TimerTwo, to see how to fix the previous Warning: "Can't perform a React state update on an unmounted component".

  // 2. To address this scenario, useEffect allows you to specify the "cleanup effect".
  //   Cleanup effect is an action you specify to be done
  // before component is removed from the UI(gets unmounted)"
  //  To do this, the function passed to useEffect may return a clean-up function.
  useEffect(() => {
    console.log("useEffect - initial render");
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Cleanup - Component Unmounting");
      clearInterval(id);
    };
  }, []);

  return (
    <div className="Timer">
      <h2>Timer Three</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerThree;
