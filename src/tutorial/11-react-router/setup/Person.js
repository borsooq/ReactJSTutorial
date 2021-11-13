import React, { useState, useEffect } from "react";
import { data } from "../../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  useEffect(() => {
    const person = data.find((p) => p.id === parseInt(id));
    setName(person.name);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        back to people
      </Link>
    </div>
  );
};

export default Person;
