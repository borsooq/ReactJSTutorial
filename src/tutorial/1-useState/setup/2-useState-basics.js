import React, { useState } from "react";

const UseStateBasics = () => {
  //console.log(useState("hello world"));

  // const value = useState(1)[0];
  // const handler = useState(1)[1];

  // console.log(value);
  // console.log(handler);
  const [text, setText] = useState("random title");
  const clickHandler = () => {
    if (text === "random title") {
      setText("new title");
    } else if (text === "new title") {
      setText("kamil miszcz");
    } else {
      setText("random title");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
