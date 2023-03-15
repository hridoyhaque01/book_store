import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/edit/:bookId" element={<EditBook />} />
      </Routes>
    </Router>
  );
}
