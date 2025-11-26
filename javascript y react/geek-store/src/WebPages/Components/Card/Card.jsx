import React, { useRef, useState } from 'react'
import "./Card.css"


export default function Card(props) {
    const { cardName, cardImg, cardDesc, cardPrice } = props;
    let [counter, setCounter] = useState(0);


    let toDecrase = () => {
        if(counter > 0){
           setCounter(counter -1)
        }
    }

    let toIncrease = () => {
       setCounter(counter +1)
    }

    return (
        <div className="card">
            <p className="card-name">{cardName}</p>
            <img className="card-img" src={cardImg} alt="" />
            <a href="#" className="card-desc">see card description</a>
            <div className="price-container">
                <div className="card-number">
                    <button onClick={toDecrase} className="card-btn">-</button><span>{counter}</span><button onClick={toIncrease} className="card-btn">+</button>
                </div>
                <div>
                    <span className="card-price">{cardPrice}</span>
                </div>
            </div>
            <button className="add-to-cart-btn">agregar al carrito</button>
        </div>
    )
}
