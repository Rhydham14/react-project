import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();


  useEffect(() => {
    async function getData() {
      if (num) {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
          setName(res.data.name); // Assuming you want to log the data from the API response
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
    getData();
  });

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  return (
    <>
      <h1>{num}</h1>
      <h2>{name}</h2>
      <select
        value={num}
        onChange={handleChange} // Changed from onClick to onChange
      >
        <option>Select Option</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </>
  );
};

export default Api;
