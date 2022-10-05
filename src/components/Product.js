import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
function Product({ prod }) {
  console.log(prod);
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={prod.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{prod.title}</h5>
          <p className="card-text">US$ {prod.price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
      </div>
  );
}
export default Product;
