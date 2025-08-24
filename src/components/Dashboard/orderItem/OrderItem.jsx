import React from "react";
import "./OrderItem.css";

const OrderItem = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="orderName">
          <h2 className="orderID">Pedido 4444</h2>
          <p className="tableOrder">Mesa: 2</p>
        </div>
        <div className="orderDetail">
          <span className="description">Hamburguesita anashe</span>
          <span className="amount">x2</span>
        </div>
        <div className="totalOrder">
          <span>Total:</span>
          <span>$29323</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
