import React from 'react';
import Form from '../Components/Form/Form';
import './Contact.css';

export function Contact() {
  return (
    <div className="contact-container">
      
      <header>
        <h1>Contáctanos</h1>
        <p>¿Tienes alguna duda sobre nuestro desarrollo Fullstack? ¡Escríbenos!</p>
      </header>
      <Form/>

    </div>
  );
}