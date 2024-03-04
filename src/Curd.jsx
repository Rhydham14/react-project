import React, { useEffect, useState } from "react";
import axios from "axios";

const Curd = () => {
  const [add, setAdd] = useState({
    name: '', model:'', price:''
  });
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setAdd({...add, [e.target.name]:e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/users", add);
      setAdd({name:'', model:'', price:''});
      fetchData(); // Fetch updated data after adding item
    } catch (error) {
      console.log("Error adding item:", error);
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchData(); // Fetch updated data after deleting item
    } catch (error) {
      console.log("Error deleting item:", error);
    }
  }
  const handleUpdate = async (id) => {
    try {
      await axios.put(`http://localhost:3001/users/${id}`, add); // Assuming the server supports PUT method for updates
      fetchData(); // Fetch updated data after updating item
    } catch (error) {
      console.log("Error updating item:", error);
    }
  }
  return (
    <>
      {data.map((item) => (
        <li key={item.id}>
          {item.name} {item.model} {item.price}
          <button onClick={() => handleUpdate(item.id)}>Update Data</button>
          <button onClick={() => handleDelete(item.id)}>Delete Data</button>
        </li>
      ))}
      
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={add.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={add.model}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={add.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default Curd;
