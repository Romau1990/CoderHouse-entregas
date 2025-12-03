import React from 'react'
import "./Form.css"

export default function Form() {

    return (
        <div>
            <section className="contact-form-section">
                <h3>Envíanos un Mensaje</h3>

                <form className="contact-form">
                    <input type="text" placeholder="Tu Nombre" required />
                    <input type="email" placeholder="Tu Email" required />
                    <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
                    <button type="submit">Enviar Mensaje</button>
                </form>
            </section>
        </div>
    )
}
