import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import Cartlist from './Components/Cartlist/Cartlist'
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

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
