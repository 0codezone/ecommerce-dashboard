import Header from "../Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  async function addProd() {
    let data = { name, email, mobile };
    console.warn(data);
    let result = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
        <h1>Add product</h1>
        <br />
        <div className="col-sm-6 offset-sm-3 ">
          <input
            type="text"
            className="form-control"
            value={name}
            placeholder="Product Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form-control"
            value={email}
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form-control"
            value={mobile}
            placeholder="Product No"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
          <br />
          <button className="btn btn-primary" onClick={addProd}>
            save new product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
