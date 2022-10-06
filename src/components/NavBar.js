import React from 'react';
import Cart from "./Cart";
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid">
        <div>
          <span>
            <NavLink to='/' className="text-decoration-none" >Dante's Collection</NavLink>
          </span>
        </div>
        <div>
          <form>
            <input placeholder="search"></input>
            <button>search</button>
          </form>
        </div>
        <div>
          <span>
          <NavLink to='/sell' className="text-decoration-none" >SELL</NavLink>
          </span>
        </div>
        <div>
          <span>
          <NavLink to='/cart' className="text-decoration-none" >Cart</NavLink>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
