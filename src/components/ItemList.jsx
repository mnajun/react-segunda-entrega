import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items }) => {
  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card product-card">
              <img src={item.Image} alt={item.name} className="card-img-top img-fluid" />
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <p className="card-text">${item.price}</p>
                <Link to={`/item/${item.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
