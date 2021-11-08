import React, { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");

  const handleClick = () => {
    if (title === "random title") {
      setTitle("hello people");
    } else {
      setTitle("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
