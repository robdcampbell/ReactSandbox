import React, { useState, useEffect, useRef } from "react";

const PracticeUseRef = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");
  // const [renderCount, setRenderCount] = useState(0);
  //const renderCount = useRef(1);
  //const inputRef = useRef();
  // { current: 0 }
  /*
  useEffect(() => {
    return (renderCount.current = renderCount.current + 1);
  }, []);

  const focus = () => {
    console.log(inputRef.current.focus());
    console.log(inputRef.current.value);
  };

*/

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <div>
        My Name is {name} it used to be {prevName.current}
      </div>
      {/* <div>I rendered {renderCount.current} times</div> */}
    </>
  );
};

export default PracticeUseRef;

/* 
NOTES:

useRef()
- You can use a ref to prevent going into an infinite loop when updating a useState state via a useEffect hook. 

- main benefit is persisting state between DOM renders. 

- useRef will persist between renders of your component.

- a ref does not cause your component to re-update when it is changed.

- Can store the previous value of the state using useRef()


*/
