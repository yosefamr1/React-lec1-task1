import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx";
import { Provider } from 'react-redux';
import { store } from "./store";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </Provider>

  </StrictMode>,
)
