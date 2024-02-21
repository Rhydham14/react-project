import React, {useState} from "react";

const Todo = () => {
  const [getItems, setItems] = useState("");
    const [showItems, updateItems] = useState([]);

    const submitList = (event)=>{
        event.preventDefault();
        const newItems = getItems.split(",").map(value => value.trim());
        updateItems([...showItems , ...newItems]);
        setItems("");
        

    };
    const  addItems = (event)=>{
        setItems(event.target.value);
    }; 
    const removeItems = (indexValue)=>{
      const newItems = showItems.filter((_, index)=> index !== indexValue);
      updateItems(newItems);
    };
 
    return (
    <>
      <div className="container=box">
        <div className="box">
          <div className="head">
            <h1>Add your Todo here</h1>
          </div>
          <div>
            <form onSubmit={submitList}>
            <input placeholder="Add items" value={getItems} onChange={addItems}/>
            <button type="submit">Add</button>
            </form>
          </div>
          <div>
              <ul>
                {showItems.map((value, index)=>(
                <li key={index}>{value}
                  <button onClick={()=>removeItems(index)}>Remove</button>
                </li>
               ) )}
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
