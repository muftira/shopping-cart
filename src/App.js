import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Product from './component/product';
import Cart from './component/cart';
import Checkout from './component/checkout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
