import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("aa");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const toggleErrorHandler = () => {
    console.log(isError);
    if (isError) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1> */}
      <h1>{text || "firstValue"}</h1>
      <button className="btn" onClick={() => toggleErrorHandler()}>
        toggle error
      </button>
      <div>{isError && <h1>hello world</h1>}</div>
      <div>
        {isError ? (
          <h1>error is true</h1>
        ) : (
          <h1 style={{ backgroundColor: "red", color: "white" }}>
            error is false
          </h1>
        )}
      </div>
    </>
  );
};

export default ShortCircuit;
