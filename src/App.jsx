
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Cartlist from './Components/Cartlist/Cartlist'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Nav className="nav" />
      < Routes >
        <Route path="/cart" element={<Cartlist />} />
        <Route path="/productlist" element={<ProductList />} />

      </Routes >
      {/* <ProductList className="product-list" /> */}
      <Footer className="footer" />

    </>
  )
}

export default App
