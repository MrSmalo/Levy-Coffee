import React, { useState, useEffect, Fragment } from 'react';
import firebase from 'firebase';
import { CartProvider, useCart } from "react-use-cart";

export default function SetOrder() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
    getItem
  } = useCart();

  const [orders, setOrders] = useState([]);

  const ref = firebase.firestore().collection("orders");

  //read orders collection
  function getOrders() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setOrders(items);
    });
  }

  //create new order
  function addOrder() {
    ref
      .doc()
      .set({
        items
      })
  }

  useEffect(() => {
    getOrders();
  }, []);
  if (isEmpty) {
    return <></>
  }
  return (
    <>
      <div className="row justify-content-end align-items-center">
        <div className="col-2 h5">Total Price: {cartTotal}$ <span></span></div>
        <button onClick={() => addOrder()} className="btn btn-primary col-1 m-1">Set Order</button>
        <button onClick={emptyCart} className="btn btn-danger col-1 m-1">Clear Cart</button>
      </div>
      <div className="row">
      </div>
    </>
  )
}
