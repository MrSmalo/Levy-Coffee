import React from 'react';
import { CartProvider, useCart } from "react-use-cart";

export default function CartTable() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty) {
    return (
      <section className="container mt-5">
        <div className="row justify-content-lg-center">

        </div>
      </section>
    )
  }
  return (
    <div className="row">
      <table className="table table-secondary table-hover">
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td><img src={item.img} style={{ height: '3rem' }} /></td>
                <td>{item.name}</td>
                <td>Price {item.price}$</td>
                <td>Quantity ({item.quantity})</td>
                <td>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className="btn btn-primary m-1">+</button>
                  <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className="btn btn-danger m-1">-</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
