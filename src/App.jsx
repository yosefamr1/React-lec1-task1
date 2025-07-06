import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav className="nav" />
      <ProductList className="product-list" />
      <Footer className="footer"/>

    </>
  )
}

export default App
