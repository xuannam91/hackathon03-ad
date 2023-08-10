import React from "react";


function Cart({cartProduct, updateQuantity, deleteProduct, totalMoney}) {
  return (
    <div>
      {/* START SECTION BREADCRUMB */}
      <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="page-title">
                <h1> Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END SECTION BREADCRUMB */}

      {/* START MAIN CONTENT */}
      <div className="main_content">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive shop_cart_table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Stt</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>

                        {cartProduct.map((e, i) => (

                            <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.title}</td>
                                    <td>
                                    <img
                                        style={{ width: "300px", height: "130px" }}
                                        src={e.image}
                                        alt=""
                                    />
                                    </td>
                                    <td>
                                        <button onClick={() => updateQuantity(e.id, e.quantity - 1)}>-</button>
                                        {e.quantity}
                                        <button onClick={() => updateQuantity(e.id, e.quantity + 1)}>+</button>
                                    </td>
                                    <td>{e.price}</td>
                                    <td>{(e.price) * (e.quantity)}</td>
                                    <td>
                                        <button className="btn-delete" onClick={() => deleteProduct(e.id)}>Delete</button>
                                    </td>
                            </tr>

                     ))}



                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="total-money">
              <h3>Tổng tiền phải thanh toán: {totalMoney}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
