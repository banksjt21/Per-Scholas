// import "react";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // const handleDecrement = () => {
  //   if (count !== 0) {
  //     setCount(count - 1);
  //   }
  // };

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
    </>
  );
}
