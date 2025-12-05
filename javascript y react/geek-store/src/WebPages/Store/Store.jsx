import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../../usefetch/UseFetch'
import Filter from '../Components/Filter/Filter';
import "./Store.css"
import Card from '../Components/Card/Card';
import Loader from '../Components/Loader/Loader';
import CartWidget from '../Components/CartWidget/CartWidget';



export function Store() {

  const [filterData, setFilterData] = useState([])
  const [term, setTerm] = useState('');
  const [total, setTotal] = useState(0);
  const [cardsInCart, setCardsInCart] = useState([])
  let { data, err, loading } = useFetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0");


  let searchTerm = (e) => {
    setTerm(e.target.value)

    if (e.target.value == "") {
      setFilterData(data)
    }
  }

  let toFilter = () => {
    let filteredData = data.filter(card => {
      return card.name.toLowerCase().includes(term.toLowerCase().trim());
    })
    setFilterData(filteredData)
  }
  
  let addToCart = (card) => {
    setCardsInCart([...cardsInCart, card])
  }
  
  useEffect(() => {
    localStorage.setItem('cardsInCart', JSON.stringify(cardsInCart));
  },[cardsInCart])

  if (err) {
    return <p>there's been a problem loading the data. Try again</p>
  }

  if (loading) {
    return <Loader />
  }

  if (filterData.length == 0) {
    setFilterData(data);
  }

  if (searchTerm == "") {
    setFilterData(data)
  }


  return (
    <>
      <Filter action={toFilter} search={searchTerm} />
      <CartWidget total={total.toFixed(2)} />
      <div className="card-container">
        {filterData.map(card => {

          return <Card
            className="card"
            addToCart={() => addToCart(card)}
            key={card.id}
            cardName={card.name}
            cardImg={card.card_images[0].image_url}
            cardDesc={card.desc}
            cardPrice={card.card_prices[0].cardmarket_price}
            total={total}
            setTotal={setTotal}
          ></Card>
        })}

      </div>
    </>
  )
}
