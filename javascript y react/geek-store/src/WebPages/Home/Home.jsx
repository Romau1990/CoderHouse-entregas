import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import bannerImage from "../../images/yugioh-banner.webp"

export function Home() {
  return (
    <>
    <img
          src={bannerImage}
          alt="Banner Principal Yu-Gi-Oh!"
          className="hero-image"
    />
    <main className="home-container">
      <section className="hero-section">
        
        <div className="hero-content section">
          <h1>¡Bienvenido al Mundo del Duelo!</h1>
          <p>Descubre nuevas cartas, construye tus mazos y conéctate con la comunidad de Yu-Gi-Oh! TCG.</p>
          <div className="hero-button">
            <Link to="/store" className="button primary-button">Explora la Tienda</Link>
          </div>
        </div>
      </section>

      <section className="featured-section section">
        <h2>Últimos Lanzamientos y Destacados</h2>
        <div className="featured-cards-grid">
          <div className="featured-card">
            <img src="https://placehold.co/150x200/61DAFB/282C34?text=Drag%C3%B3n+Blanco" alt="Carta Destacada 1" />
            <h3>Dragón Blanco de Ojos Azules</h3>
            <p>Una leyenda nunca muere.</p>
          </div>
          <div className="featured-card">
            <img src="https://placehold.co/150x200/61DAFB/282C34?text=Mago+Oscuro" alt="Carta Destacada 2" />
            <h3>Mago Oscuro</h3>
            <p>El mago definitivo en ataque y defensa.</p>
          </div>
          <div className="featured-card">
            <img src="https://placehold.co/150x200/61DAFB/282C34?text=Exodia" alt="Carta Destacada 3" />
            <h3>Exodia el Prohibido</h3>
            <p>La victoria instantánea.</p>
          </div>
        </div>
        <Link to="/store" className="button primary-button">Ver todas las cartas</Link>
      </section>

      <section className="about-section section">
        <h2>¿Qué es Yu-Gi-Oh! TCG?</h2>
        <p>
          Yu-Gi-Oh! Trading Card Game es un popular juego de cartas coleccionables donde dos jugadores se enfrentan en un duelo, invocando monstruos, lanzando hechizos y activando trampas para reducir los puntos de vida de su oponente a cero. Basado en el manga de Kazuki Takahashi, este juego estratégico ha cautivado a millones de duelistas en todo el mundo por décadas.
        </p>
        <p>
          Nuestra página es tu portal para mantenerte actualizado con las últimas expansiones, encontrar las cartas más poderosas para tu mazo y unirte a una comunidad apasionada. ¡Prepara tu mazo y que comience el duelo!
        </p>
      </section>
    </main>
    </>
  )
}
