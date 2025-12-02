import React from 'react';
import './Contact.css';

export function Contact() {
  return (
    <div className="contact-container">
      
      <header>
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna duda sobre nuestro desarrollo Fullstack? ¡Escríbenos!</p>
      </header>
      
      <section className="contact-form-section">
        <h3>Envíanos un Mensaje</h3>

        <form className="contact-form">
          <input type="text" placeholder="Tu Nombre" required />
          <input type="email" placeholder="Tu Email" required />
          <textarea placeholder="Escribe tu mensaje aquí..." required></textarea>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h3>Información Directa</h3>
        <ul>
          <li>Email:</li>
          <li>LinkedIn:</li>
          <li>GitHub:</li>
        </ul>
      </section>
      
    </div>
  );
}