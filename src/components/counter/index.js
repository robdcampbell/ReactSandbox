import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (e) => {
    const counterButton = e.target.id;

    if (counterButton === "inc") {
      setCount((current) => (current += 1));
    } else if (counterButton === "dec") {
      setCount((current) => (current -= 1));
    } else if (counterButton === "reset") {
      setCount(0);
    }
    return;
  };

  return (
    <div>
      <h1>Counter.</h1>
      <p>Current count is: {count}</p>
      <button onClick={handleCount} id="inc">
        +
      </button>
      <button onClick={handleCount} id="dec">
        -
      </button>
      <button onClick={handleCount} id="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
