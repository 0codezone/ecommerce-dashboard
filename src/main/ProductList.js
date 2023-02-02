import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

function ProductList() {
  let [data, setdata] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    let result = await fetch("http://localhost:3005/users");
    result = await result.json();
    setdata(result);
  }

  async function deleteProd(id) {
    let result = await fetch(`http://localhost:3005/users/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getList();
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
                <th>PName</th>
                <th>Pprice</th>
                <th>Pcode</th>
                <th colSpan={2}>Operation</th>
              </tr>
              {data.map((item, k) => (
                <tr key={k}>
                  <td>{item.id}</td>
                  <td>{item.Pname}</td>
                  <td>{item.Pprice}</td>
                  <td>{item.Pcode}</td>
                  <td>
                    <button onClick={() => deleteProd(item.id)}>Delete</button>
                  </td>
                  <td>
                    <Link to={"/update/" + item.id}>
                      <span className="update">Update</span>
                    </Link>
                  </td>
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
