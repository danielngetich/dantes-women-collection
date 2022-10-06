import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './Cart';
function Product({ prod}) {
  const [cart, setCart] = useState([]);
  function addToCart(product){
    console.log("i am cliked")
    setCart([...cart,product])
    return(<Cart cart={cart}/>)
  }
  return (
    <div className="col-sm-4 h-50">
      <div className="card " style={{ width: "18rem" }}>
        <img src={prod.image} className="card-img-top" alt="products" />
        <div className="card-body">
          <h4 className="card-title">{prod.title}</h4>
          <h5 className="card-title">Available size {prod.availableSizes}</h5>
          <p className="card-text">US$ {prod.price}</p>
          <button  className="btn btn-primary" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      </div>
  );
}
export default Product;
