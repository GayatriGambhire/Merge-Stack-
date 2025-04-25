import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
        <Route path="/edit-book/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
}

export default App;
