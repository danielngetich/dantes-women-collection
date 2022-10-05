import Categories from "./Categories";
import "bootstrap/dist/css/bootstrap.min.css";
function Product({prod}) {
console.log(prod)
  return (
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={prod.image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{prod.title}</h5>
              <p className="card-text">
                US${prod.price}
              </p>
              <p className="card-text">
                <small className="text-muted">Sku {prod.sku}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Product;
