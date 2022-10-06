import { useEffect, useState } from "react";
import Product from "./Product";
function Categories({handleClick}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dantes-women-app.herokuapp.com/products")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row ">
          <h3>Our Products</h3>
          {products.map((prod) => {
            return <Product prod={prod} key={prod.id} handleClick={handleClick} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
