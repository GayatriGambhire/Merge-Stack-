import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3002/get")
      .then(res => setBooks(res.data))
      .catch(err => alert("Error fetching books"));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3002/delete/${id}`)
      .then(() => {
        setBooks(books.filter(book => book._id !== id));
        alert("Book deleted");
      })
      .catch(err => alert("Error deleting book"));
  };

  return (
    <div>
      <h2>All Books</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} ({book.category}, {book.publishedYear})
            <button onClick={() => navigate(`/edit-book/${book._id}`)}>Edit</button>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
