import React from "react";


function Product({elementProduct, addToCart}) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product">
        <div className="product-upper">
          <img
            src={elementProduct.image}
            alt=""
          />
        </div>
        <div className="infor-item">
          <h4>
            <p>{elementProduct.title}</p>
          </h4>

          <div className="product-carousel-price">
            <p>Giá: {elementProduct.price}</p>
          </div>
        </div>

        <div className="product-option-shop">
          <button className="add_to_cart_button"  onClick={() =>addToCart(elementProduct)}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
