import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Cartlist from "./Components/Cartlist/Cartlist";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/LoginForm/Login";
import Register from "./Components/RegisterForm/Register";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Wishlist from "./Components/WishList/WishList";
import Fullback from "./Components/fullback/fullback";


function App() {
  return (
    <>
      <div className="app-container">
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="*" element={<Fullback />} />


            <Route path="" element={<ProductList />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/cart" element={
              <PrivateRoute>
                <Cartlist />
              </PrivateRoute>
            }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
