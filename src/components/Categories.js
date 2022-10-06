import { useEffect, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
function Categories() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <h3>Our Products</h3>
          {products.map((prod) => {
            return <Product prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
