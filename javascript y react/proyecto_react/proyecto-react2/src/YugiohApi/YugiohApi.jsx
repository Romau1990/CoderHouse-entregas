import React, { useEffect, useRef, useState } from 'react'
import "./YugiohApi.css";



async function apiRes() {
    let res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=14&offset=0");
    let formatedRes = await res.json()
    return formatedRes.data;
}




export default function YugiohApi() {

    const [cards, setCards] = useState([])
    const [showContainer, setShowContainer] = useState(false)
    const [cardDesc, setCardDesc] = useState('')

    useEffect(() => {

        console.log("cargando datos... ")

        setTimeout(() => {

            let resp = async () => {
                let fetchedData = await apiRes();
                setCards(fetchedData)
                console.log('datos cargados correctamente');
                setShowContainer(true)
            }

            resp();
        }, 2500)

    }, [])

    function displayInfo(info){
        setCardDesc(info);
    }

    function clearInfo(){
        setCardDesc("")
    }

    return (
        <section className="main-container" style={{ display: showContainer ? "flex" : "none" }}>
            <div className="card-container" >
                {cards.map(card => {
                    return <img onMouseLeave={clearInfo} onMouseEnter={() => displayInfo(card.name)} key={card.id} style={{ width: "8rem", height: "12rem"}} src={card.card_images[0].image_url} alt="" />
                })}

            </div>
            <div className="infoDisplay">
                {cardDesc}
            </div>
        </section>

    )
}


