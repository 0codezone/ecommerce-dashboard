import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./main/Login";
import Register from "./main/Register";
import AddProduct from "./main/AddProduct";
import UpdateProduct from "./main/UpdateProduct";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Register />} />

          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
