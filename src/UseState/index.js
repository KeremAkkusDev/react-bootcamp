import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={() => {setCounter((prev) => prev - 1);}}>
        Counter -1
      </button>
      <button onClick={() => {setCounter((prev) => prev + 1);}}>
        Counter +1
      </button>
    </>
  );
}

export default UseState;
