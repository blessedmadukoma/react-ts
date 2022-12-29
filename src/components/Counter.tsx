import { useState } from "react"

const Counter = () => {
  // I could allow TS infer the type for the state (because there is a number - 0 - there), but I chose to set the type to Number.
  const [count, setCount] = useState<number>(0);
  
  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(value => value + 1)}>+</button>
      <button onClick={() => setCount(value => value - 1)}>-</button>
    </>
  )
}

export default Counter