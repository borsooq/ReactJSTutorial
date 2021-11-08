import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const [buttonText, setButtonText] = React.useState("Clear Items");
  const handleClick = () => {
    if (people.length !== 0) {
      console.log("people is null");
      setPeople([]);
      setButtonText("Reset List");
    } else {
      setPeople(data);
      setButtonText("Clear Items");
    }
  };

  const removeItem = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      ,
      <button
        className="btn"
        onClick={() => {
          handleClick();
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

export default UseStateArray;
