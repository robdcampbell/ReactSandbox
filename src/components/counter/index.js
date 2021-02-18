import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((currCount) => currCount + 1);
  };
  const decrementCount = () => {
    setCount((currCount) => currCount - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}> + </button>
      <button onClick={decrementCount}> - </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number,
};

export default Counter;

/* resources: 
  - https://www.youtube.com/watch?v=0yzoAbrjV6k (webDevSimplified)
  - 
*/

/*



notes: setState.
  - use this syntax: setState( currentValue => currentValue +1 ). 
    we do this because it useState is an asynchronous function by default, and referencing the current value in the callback will make sure it is always getting the current value. 

  - TakeAways: 
    - how to set state, change state using useState() hook
    - how setState works asynchronously
    - PropTypes when a prop is being passed in to verify the dataType

*/

/*
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Counter = ({ initialCount }) => {
  
  const [count, setCount] = useState(initialCount);
  setCount((currCount) => currCount + 1);
  const incrementCount = () => {
  };
  const decrementCount = () => {
    setCount((currCount) => currCount - 1);
  };

  useEffect(()=>{
    console.log(count);
  },[count])

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}> + </button>
      <button onClick={decrementCount}> - </button>
      <button onClick={() => setCount(0)}> Reset </button>
    </div>
  );
};

Counter.propTypes = {
  initialCount: PropTypes.number,
};

export default Counter;

*/
