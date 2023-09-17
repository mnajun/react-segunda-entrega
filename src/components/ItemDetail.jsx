import PropTypes from "prop-types";

const ItemDetail = ( {item, isLoading}) => {

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (!item) {
        return null;
    }


  return <div className="item-detail">
     <h1>{item.name}</h1>
     <p>${item.price}</p>
     <p>{item.category}</p>
     <img src = {item.Image} alt= {item.name} ></img>
   </div>;
    
  
}

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default ItemDetail;
