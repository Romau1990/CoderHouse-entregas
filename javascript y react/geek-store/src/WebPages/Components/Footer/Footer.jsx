import React from 'react';
import './Footer.css';

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-links">
                    <a href="#terminos" className="footer-link">Términos</a>
                    <span className="link-separator">|</span>
                    <a href="#privacidad" className="footer-link">Privacidad</a>
                    <span className="link-separator">|</span>
                    <a href="#contacto" className="footer-link">Contacto</a>
                </div>

                <p className="footer-copyright">
                    {currentYear} Rodrigo Alvarez.
                </p>

            </div>
        </footer>
    );
};


