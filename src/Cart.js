import React, { Component } from 'react'
import CartTable from './CartTable';
import SetOrder from './SetOrder';

export default function Cart() {


  return (
    <>
      <section className="container mt-5">
        <CartTable />
        <SetOrder />
      </section>
    </>
  )
}

