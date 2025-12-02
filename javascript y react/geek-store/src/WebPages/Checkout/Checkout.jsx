import React from 'react';
import './Checkout.css';


export function Checkout(props) {
    let {cartTotal} = props;
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Procesando pago de $${cartTotal}...`);
    };

    return (
        <div className="checkout-container">
            <h1>Finalizar Compra</h1>


            <div className="summary-box">
                <h2>Resumen del Pedido</h2>

                <p className="final-total">
                    Total a Pagar: <span>${cartTotal}</span>
                </p>
                <small>Impuestos y envío ya incluidos</small>
            </div>


            <section className="payment-section">
                <h3>Datos de Pago</h3>

                <form className="payment-form" onSubmit={handleSubmit}>


                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Nombre completo" required />


                    <div className="card-fields">
                        <input type="text" placeholder="Número de Tarjeta" maxLength="16" required />
                        <input type="text" placeholder="MM/AA" maxLength="5" required />
                        <input type="text" placeholder="CVV" maxLength="4" required />
                    </div>


                    <button type="submit" className="pay-button">
                        Pagar Ahora (${cartTotal})
                    </button>
                </form>
            </section>
        </div>
    );
}