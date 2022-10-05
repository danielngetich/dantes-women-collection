import { useEffect, useState } from "react";
import Product from "./Product";

function Categories() {

  useEffect(() => {

  }, []);
  return (
    <div>
      <div>
        <h2>Products</h2>
        {<Product />}
      </div>
    </div>
  );
}

export default Categories;
