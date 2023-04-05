import React, { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

function UseRef() {
  const inputRef = useRef();
  const inputRefComp = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const focusInputComp = () => {
    inputRefComp.current.focus();
  };

  return (
    <>
      <h1>useRef() - forwardRef()</h1>
      <input ref={inputRef} />
      <Input ref={inputRefComp} />
      <button onClick={focusInput}>Focus</button>
      <button onClick={focusInputComp}>Focus Component</button>
    </>
  );
}

export default UseRef;
