import React,{useState} from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Categories from "./components/Categories";
import AddCollection from "./components/AddCollection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
function App() {
const [cart,setCart]=useState([])
function handleClick(prod){
cart.push(prod)
if(cart.indexOf(prod)!==-1)return;
setCart([...cart,prod])
}
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Categories handleClick={handleClick} />} />
          <Route path="/sell" element={<AddCollection />} />
          <Route path="/cart" element={<Cart cart={cart}setCart={setCart}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
