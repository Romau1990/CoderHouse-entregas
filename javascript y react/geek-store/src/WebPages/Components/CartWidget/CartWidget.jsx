import React, { useState } from 'react'
import "./CartWidget.css"


export default function CartWidget(props) {
  let { total} = props;



  return (
    <>
      <div className="cart-widget">
        <span>total: {total}</span>
        <button>ir al carrito</button>
      </div>

    </>

  )
}
