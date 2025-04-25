import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    publishedYear: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3002/get")
      .then(res => {
        const book = res.data.find(b => b._id === id);
        if (book) setForm(book);
        else alert("Book not found");
      })
      .catch(err => alert("Error loading book"));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3002/update/${id}`, form)
      .then(() => {
        alert("Book updated");
        navigate("/book-list");
      })
      .catch(err => alert("Error updating book"));
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} />
        <input name="author" value={form.author} onChange={handleChange} />
        <input name="category" value={form.category} onChange={handleChange} />
        <input name="publishedYear" value={form.publishedYear} onChange={handleChange} />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
