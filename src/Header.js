import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Ecomm</Navbar.Brand>
        <Nav className="me-auto nav_bar_wrapper">
          <Link to="/add">Add Product</Link>
          <Link to="/update">Update Product</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
