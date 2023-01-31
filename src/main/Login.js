import React from "react";

function Login() {
  return (
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
  );
}

export default Login;
