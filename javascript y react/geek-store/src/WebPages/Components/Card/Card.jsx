import React, { useEffect, useState } from 'react'
import "./Card.css"
import SeeMore from '../SeeMore/SeeMore';
import useMessage from '../../../CustomHooks/useMessage';



export default function Card(props) {
    const { cardName, cardImg, cardDesc, cardPrice,total, setTotal} = props;
    let [counter, setCounter] = useState(0);
    let [updatePrice, setUpdatePrice] = useState(cardPrice)
    const priceValue = parseFloat(cardPrice);


    let {trigger, err, loading} = useMessage("add to cart", "Sure you want to add this articles to the cart?", "sure", "added to the cart", "your item is now in the cart");
 
    if(err){
       return <p>{err.message}</p>
    }
    if(loading){
        return <Loader />
    }


    let toDecrase = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            setUpdatePrice(updatePrice - cardPrice)
            setTotal(totalAnterior => totalAnterior - priceValue == 0 ? 0 : totalAnterior - priceValue);
        }
    }

    let toIncrease = () => {
        setCounter(counter + 1)
        if (counter >= 1) {
            setUpdatePrice((cardPrice * counter).toFixed(2))
        }
        setTotal(totalAnterior => totalAnterior + priceValue);
    }

    const totalPrice = (priceValue * counter).toFixed(2);

    return (
        <div className="card">
            <p className="card-name">{cardName}</p>
            <img className="card-img" src={cardImg} alt="" />
            <a href="#" className="card-desc">see card description</a>
            <SeeMore img={cardImg} desc={cardDesc} />
            <div className="price-container">
                <div className="card-number">
                    <button onClick={toDecrase} className="card-btn">-</button><span>{counter}</span><button onClick={toIncrease} className="card-btn">+</button>
                </div>
                <div>
                    <span className="card-price">${counter > 0 ? totalPrice : cardPrice}</span>
                </div>
            </div>
            <button onClick={trigger} className="add-to-cart-btn">agregar al carrito</button>
        </div>
    )
}
