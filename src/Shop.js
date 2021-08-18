import React, { Component } from 'react';
import ProductCard from './ProductCard';

export default class Shop extends Component {
  render() {
    const card = [];
    this.props.products.forEach((product) => {
      card.push(
        <ProductCard
          name={product.name}
          img={product.img}
          price={product.price}
          id={product.id}
        />
      )
    })
    return (

      <section className="mt-5">
        <div className="container-md" >
          <div div className="row row-cols-3 justify-content-center" >
            {card}
          </div >
        </div>
      </section>
    )
  }
}
