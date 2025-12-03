import React, { useEffect } from 'react';
import './Checkout.css';
import { useLocation } from 'react-router-dom';


export function Checkout() {
    const location = useLocation();
    const total = location.state ? location.state.totalPurchase : 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Procesando pago de $${total}...`);
    };

    return (
        <div className="checkout-container">


            <div className="summary-section section">
                <h2>Resumen del Pedido</h2>

                <p className="final-total">
                    Total a Pagar: <span>${total}</span>
                </p>
                <small>Impuestos y envío ya incluidos</small>
            </div>


            <section className="payment-section section">
                <h3>Datos de Pago</h3>

                <form className="payment-form" onSubmit={handleSubmit}>


                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Nombre completo" required />


                    <div className="card-fields">
                        <input type="text" placeholder="Número de Tarjeta" maxLength="16" required />
                        <input type="text" placeholder="MM/AA" maxLength="5" required />
                        <input type="text" placeholder="CVV" maxLength="4" required />
                    </div>


                    <button type="submit" className="pay-button primary-button">
                        Pagar Ahora (${total})
                    </button>
                </form>
            </section>
        </div>
    );
}