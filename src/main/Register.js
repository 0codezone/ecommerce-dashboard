import React from "react";
import Header from "../Header";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function SignUp() {
    let item = { name, email, password };

    let result = await fetch("http://localhost:3000/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/add");
  }

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center flex-column height"
        style={{ height: "90vh" }}
      >
        <h1>Sign Up</h1>
        <br />
        <div className="col-sm-6 offset-sm-3 ">
          <input
            value={name}
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            value={password}
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />

          <button className="btn btn-primary" onClick={SignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Register;
