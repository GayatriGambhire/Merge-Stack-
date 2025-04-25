import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    publishedYear: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/add", form)
      .then(() => {
        alert("Book added successfully");
        navigate("/book-list");
      })
      .catch((err) => alert("Error adding book"));
  };cd 

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <input name="author" placeholder="Author" onChange={handleChange} />
        <input name="category" placeholder="Category" onChange={handleChange} />
        <input name="publishedYear" placeholder="Published Year" onChange={handleChange} />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
