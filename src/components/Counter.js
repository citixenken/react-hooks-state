import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  // console.log(useState(false));
  function increment() {
    // setCount(count + 1);
    setCount((count) => count + 1); //updates count and re-renders component
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
