import React, { useState } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom';

export default function CartWidget(props) {
  let { total} = props;

  return (
    <>
      <div className="cart-widget">
        <span className='total-display'>total: {total}</span>
        <button><Link to='/checkout'>ir al carrito</Link></button>
      </div>

    </>

  )
}
