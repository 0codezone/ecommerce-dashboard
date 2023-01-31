import React from "react";
import Header from "../Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  });

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center flex-column height"
        style={{ height: "90vh" }}
      >
        <h1>Login</h1>
        <br />
        <form className="col-sm-6 offset-sm-3 ">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />

          <br />

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />

          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
