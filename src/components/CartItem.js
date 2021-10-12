import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="container">
      <div className="cardbox row row-cols-6 my-2 text-capitalize text-center">
        <ProductConsumer>
          {(values) => (
            <div
              className="col mx-auto"
              onClick={() => values.handleDetail(id)}
            >
              <Link to="/details">
                <img
                  src={img}
                  style={{ width: "5rem", height: "5rem" }}
                  className="img-fluid"
                  alt="product"
                />
              </Link>
            </div>
          )}
        </ProductConsumer>
        <ProductConsumer>
          {(values) => (
            <div
              className="col mx-auto my-auto"
              onClick={() => values.handleDetail(id)}
            >
              <Link to="/details" className="text-decoration-none link-dark">
                <span className="d-lg-none">product : </span>
                {title}
              </Link>
            </div>
          )}
        </ProductConsumer>
        <div className="col mx-auto my-auto">
          <span className="d-lg-none">price : </span>${price}
        </div>
        <div className="col mx-auto my-auto">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
            </div>
            <span className="btn btn-black mx-1">{count}</span>
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col mx-auto my-auto">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i className="fas fa-trash" />
          </div>
        </div>
        <div className="col mx-auto my-auto">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    </div>
  );
}
