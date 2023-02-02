import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./main/Login";
import Register from "./main/Register";
import AddProduct from "./main/AddProduct";
import UpdateProduct from "./main/UpdateProduct";
import Protected from "./Protected";
import ProductList from "./main/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />

          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route
            path="/update/:id"
            element={<Protected Cmp={UpdateProduct} />}
          />
          <Route path="/PList" element={<Protected Cmp={ProductList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
