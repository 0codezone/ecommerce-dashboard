import Header from "../Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [Pname, setPName] = useState("");
  const [Pprice, setPprice] = useState("");
  const [Pcode, setPcode] = useState("");

  async function addProd() {
    let data = { Pname, Pprice, Pcode };
    console.warn(data);
    let result = await fetch("http://localhost:3005/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    navigate("/PList");
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
            value={Pname}
            placeholder="Product Name"
            onChange={(e) => {
              setPName(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form-control"
            value={Pprice}
            placeholder="Product Price"
            onChange={(e) => {
              setPprice(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            className="form-control"
            value={Pcode}
            placeholder="Product No"
            onChange={(e) => {
              setPcode(e.target.value);
            }}
          />
          <br />
          <button className="btn btn-primary" onClick={addProd}>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
