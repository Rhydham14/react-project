import React, { useState } from "react";

const Login = () => {
    const [inputValue, setInputValue] = useState("");
    const [valuesArray, setValuesArray] = useState([]);
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Split the input value by comma and trim each value
      const newValues = inputValue.split(",").map(value => value.trim());
      // Update the array of values
      setValuesArray([...valuesArray, ...newValues]);
      // Clear the input field
      setInputValue("");
    };

    const handleRemove = (indexToRemove) => {
        // Filter out the element to remove
        const newArray = valuesArray.filter((_, index) => index !== indexToRemove);
        // Update the state with the new array
        setValuesArray(newArray);
      };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter values separated by comma"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {valuesArray.map((value, index) => (
            <li key={index}>{value}
                <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Login
