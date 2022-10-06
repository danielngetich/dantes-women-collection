import Cart from "./Cart";
function NavBar() {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid">
        <div>
          <span>
            <a href="/">Dante's Collection</a>
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
            <a href="/">Add Collection</a>
          </span>
        </div>
        <div>
          <span>
            <a href="#Categories"><Cart/></a>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
