import React from 'react';
import Cart from "./Cart";
function NavBar() {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid">
        <div>
          <span>
            <a className="text-decoration-none" href="/">Dante's Collection</a>
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
            <a className="text-decoration-none" href="/">SELL</a>
          </span>
        </div>
        <div>
          <span>
            <a className="text-decoration-none" href="/"><Cart/></a>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
