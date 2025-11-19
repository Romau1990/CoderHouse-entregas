import React, { useEffect } from 'react'

import "./Promesas.css"

// Ejemplo básico de promesa sin fetch ni api

export default function Promesas() {

    let promesa = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let random = Math.round(Math.random() * 10);

                if (random > 5) {
                    resolve(random)
                }
                else {
                    reject("no has alcanzando el minimo necesario")
                }
            }, 1500)
        })
    }

    useEffect(() => {
        promesa()
            .then(success => { console.log("tu nota final es " + success) })
            .catch(err => { console.error("has reprobado con " + err) })
            .finally(res => { console.log('gracias por participar') })
    }, [])


    return (
        <div>Promesas</div>
    )
}
