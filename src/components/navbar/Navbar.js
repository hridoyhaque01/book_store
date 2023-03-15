import React from "react";
import { Link, useMatch } from "react-router-dom";
import logo from "../../images/logo.svg";
import Search from "./Search";

export default function Navbar() {
  const match = useMatch("/");

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" alt="logo" />
        </Link>
        <ul className="hidden md:flex items-center space-x-6">
          <Link
            className={`${match && "font-semibold"} cursor-pointer`}
            to="/"
            id="lws-bookStore"
          >
            <li>Book Store</li>
          </Link>
          <Link
            className={`${!match && "font-semibold"} cursor-pointer`}
            to="/addbook"
            id="lws-addBook"
          >
            <li>Add Book</li>
          </Link>
        </ul>
        <Search />
      </div>
    </nav>
  );
}
