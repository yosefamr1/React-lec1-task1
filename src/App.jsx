import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './Components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ProductList/>
    </>
  )
}

export default App
