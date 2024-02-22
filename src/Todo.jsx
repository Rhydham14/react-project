import React, { useState } from "react";

const Todo = () => {
  const [getItems, setItems] = useState("");
  const [showItems, updateItems] = useState([]);
  const [getClick, setClick] = useState("");
  const submitList = (event) => {
    event.preventDefault();
    const newItems = getItems.split(",").map((value) => value.trim());
    updateItems([...showItems, ...newItems]);
    setItems("");
  };
  const addItems = (event) => {
    setItems(event.target.value);
  };
  const doneItems = (indexValue) => {
    // const newItems = showItems.filter((_, index) => index !== indexValue);
    // updateItems(newItems);
    setClick(indexValue === getClick ? null : indexValue);
  };
  const itemsStyle = (itemIndex) => ({
    textDecoration: getClick === itemIndex ? "line-through" : "none",
  });

  return (
    <>
      <div className="container=box">
        <div className="box">
          <div className="head">
            <h1>Add your Todo here</h1>
          </div>
          <div>
            <form onSubmit={submitList}>
              <input
                placeholder="Add items"
                value={getItems}
                onChange={addItems}
              />
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <ul>
              {showItems.map((value, index) => (
                <li key={index} style={itemsStyle(index)}>
                  {value}
                  <button onClick={() => doneItems(index)}>Task done</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;