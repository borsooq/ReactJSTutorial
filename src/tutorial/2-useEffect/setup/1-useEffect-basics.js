import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [buttonColor, setButtonColor] = useState("black");

  useEffect(() => {
    console.log("call useEffect");
    if (value > 0) {
      document.title = `New messages(${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("call useEffect");
    let divisionResult = value % 2 > 0;
    console.log(divisionResult);
    if (value % 2 > 0) {
      setButtonColor("white");
    } else {
      setButtonColor("black");
    }
    console.log(buttonColor);
  }, [value]);

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button
        className="btn"
        style={{ color: buttonColor }}
        onClick={() => setValue(value + 1)}
      >
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
