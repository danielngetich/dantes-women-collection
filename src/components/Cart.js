import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function Cart({cart}) {
  console.log(cart)
  return (
    <div>
    {/* <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Product Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{cart.id}</th>
        <td>{cart.image}</td>
        <td>{cart.title}</td>
        <td>{cart.price}</td>
      </tr>
    </tbody>
  </table> */}
  </div>
  );
}
export default Cart;