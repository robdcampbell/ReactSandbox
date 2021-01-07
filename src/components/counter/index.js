import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <div>
      <h2>Another counter</h2>
      <p value={count}>Counter set to: {count}</p>
      <button> + </button>
      <button> - </button>
    </div>
  );
};

export default Counter;
