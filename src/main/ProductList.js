import React, { useState, useEffect } from "react";
import Header from "../Header";

function ProductList(props) {
  let [data, setdata] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  function getList() {
    fetch("http://localhost:3000/users").then((result) => {
      result.json().then((response) => {
        setdata(response);
      });
    });
  }

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center align-items-center flex-column"
        style={{ height: "90vh" }}
      >
        <h1>Product List</h1>
        <br />
        <div>
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
              {data.map((item, k) => (
                <tr key={k}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductList;
