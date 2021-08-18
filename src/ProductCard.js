import React, { Component } from 'react';
import { useCart } from "react-use-cart";

export default function ProductCard(props) {
  const { addItem, getItem } = useCart();
  let block = '';
  if (!getItem(props.id)) {
    block = <button className="btn btn-success" onClick={() => addItem(props)} >Add to cart
    </button>
  } else {
    block = <button className="btn btn-disable border-danger">Added To Cart</button>
  }
  return (
    <div className="col-md-2">
      <div className="card shadow border-success">
        <img src={props.img} className="grid-img-top mt-2" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Price: {props.price}$ </p>
          {block}
        </div>
      </div>
    </div>
  )

}

