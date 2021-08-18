import React, { Component } from 'react';
import Home from "./Home";
import firebase from './firebase';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.unsubscribe = '';
  }

  componentDidMount() {
    const ref = firebase.firestore().collection("shop");
    this.unsubscribe = ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      this.getProducts(items);
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getProducts(products) {
    this.setState({ products: products })
  }

  render() {
    const productsList = this.state.products;
    return (
      <>
        <Home products={productsList} />
      </>
    )
  }
}
