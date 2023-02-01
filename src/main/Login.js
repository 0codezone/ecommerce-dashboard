import Header from "../Header";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });

  async function onLogin() {
    let item = { email, password };
    console.warn(item);

    let result = await fetch("http://localhost:3000/Login", {
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
        <h1>Login Page</h1>
        <br />
        <div className="col-sm-6 offset-sm-3 ">
          <input
            type="text"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <br />

          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <br />
          <button className="btn btn-primary" onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
