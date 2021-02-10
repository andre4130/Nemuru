import React, { useState, useEffect } from "react";

const Testing = ({ characters }) => {
  const [testing, setTesting] = useState([]);
  const [planetArray, setPlanetArray] = useState([]);
  var array = [];
  const addPlanets = async () => {
    for (let i = 0; i < testing.length; i++) {
      const planetData = testing[i].homeworld;
      await fetch(planetData)
        .then((res) => res.json())
        .then(
          (data) => {
            var temp = data.name;
            var obj = { ...testing[i], homeworld: temp };
            array.push(obj);
          },
          (error) => {
            console.log("error!", error);
          }
        );
    }
    setPlanetArray(array);
  };

  useEffect(() => {
    setTesting(characters);
  }, [characters]);

  useEffect(() => {
    addPlanets();
  }, [testing]);

  return <div></div>;
};
export default Testing;
