import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
function Categories() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  console.log(products);

  function addToCart(product) {
    console.log("tuko ndani");
    setCart([...cart, product]);
  }
  return (
    <div>
      <Cart cart={cart}/>
      <div className="container-fluid">
        <div className="row ">
          <h3>Our Products</h3>
          {products.map((prod) => {
            return <Product prod={prod} key={prod.id} addToCart={addToCart} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
