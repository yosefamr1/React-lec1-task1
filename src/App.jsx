import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Cartlist from "./Components/Cartlist/Cartlist";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/LoginForm/login";
import Register from "./Components/RegisterForm/Register";

function App() {
  return (
    <>
      <div className="app-container">
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cartlist />} />
            <Route path="/productlist" element={<ProductList />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
