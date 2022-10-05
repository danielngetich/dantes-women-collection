import { useEffect, useState } from "react";
import Product from "./Product";

function Categories() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((product) => setProducts(product));
  }, []);
  console.log(products)
  return (
    <div>
      <div>
        <h2>Products</h2>
        {products.map((prod)=>{
          return(<Product prod={prod} />)
        })
          }
      </div>
    </div>
  );
}

export default Categories;
