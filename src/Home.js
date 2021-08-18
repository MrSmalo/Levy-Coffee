import React, { Component } from 'react';
import Nav from './Nav';
import Shop from './Shop';
import Cart from './Cart';

export default class Home extends Component {

  render() {
    return (
      <>
        <Nav />
        <Shop products={this.props.products} />
        <Cart />
      </>
    )
  }
}
