import { addToDeck, removeFromDeck, showCards } from './api.js'
import { warning, deckLimitReached } from './alerts.js';

//variables necesarias ================================================================
let cardContainer = document.querySelector('.cardDisplay-container');
let main = document.querySelector('.main')
let getCardsBtn = document.querySelector('.getCardsBtn');
let cardCounter = document.querySelector('.card-counter');
let cardLimit = document.querySelector('.card-limit');
let count = 0;
let countLimit = 40;
cardCounter.textContent = count;
cardLimit.textContent = 40;
let deckBtn = document.querySelector('.deck-btn')
let deck = document.querySelector('.deck')

const exitDeckBtn = document.querySelector('.exit-deck-btn');
const container = document.querySelector('.container');


//manejador de asincronía que permite obtener las cartas =============================
getCardsBtn.addEventListener('click', async (e) => {
  await showCards(cardContainer);
  let card = e.target.closest('.card');
})





//botones de acceso y salida del deck ================================================
deckBtn.addEventListener('click', (e) => {
  container.style.display = "flex"
})

exitDeckBtn.addEventListener('click', () => {
  container.style.display = "none";
})

//añadimos la carta seleccionada a nuestro deck
cardContainer.addEventListener('click', async (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  /*Estructura de control que establece
  la cantidad de cartas que acepta nuestro mazo. */
  if (count >= countLimit) {
    deckLimitReached();
    return;
  }
  else {
    addToDeck(card, deck);
    count++;
    cardCounter.textContent = count;
  }
});


//quita una carta del deck y maneja el espacio del deck
deck.addEventListener('click', async(e) => {
  const card = e.target.closest('.card');
  if (!card) return;
  let cardImg = card.getAttribute('src');
  let resp = await warning(cardImg);
  if(resp){
    removeFromDeck(card); 
    count--;
    cardCounter.textContent = count; 
  }
});

