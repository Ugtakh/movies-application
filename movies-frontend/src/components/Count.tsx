import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };
  setCount;
  const subCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>+</button>
      <button onClick={subCount}>-</button>
    </div>
  );
};

export default Count;
