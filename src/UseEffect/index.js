import React, { useState } from "react";
import Test from "./Test";

function UseEffect() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Invisible" : "Show"}
      </button>
      {show && <Test />}
    </>
  );
}

export default UseEffect;
