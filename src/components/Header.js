function Header() {
  return (
    <nav className="navbar bg-dark text-white">
      <div className="container-fluid">
      <div>
      <span><a>Dante's Women Collection</a></span>
      </div>
      <div>
      <form>
      <input placeholder="search"></input>
      <button>search</button>
      </form>
      </div>
      <div>
      <span><a>login</a></span>
      </div>
      <div>
      <span><a>Cart</a></span>
      </div>
      </div>
    </nav>
  );
}
export default Header;
