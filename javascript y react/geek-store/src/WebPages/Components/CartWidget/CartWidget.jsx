import React, { useEffect, useRef, useState } from 'react'
import "./CartWidget.css"
import { Link } from 'react-router-dom';


export default function CartWidget(props) {
  let { total } = props;
  let disabled = useRef(null);

  useEffect(() => {
    if (total == 0) {
      disabled.current.style.opacity = 0
    }
    else{
      disabled.current.style.opacity = 1
    }

  }, [total])


  return (
    <>
      <div  className="cart-widget">
        <span className='total-display'>total: {total}</span>
        <button ref={disabled}><Link state={{ totalPurchase: total }} to='/checkout'>ir al carrito</Link></button>
      </div>

    </>

  )
}
