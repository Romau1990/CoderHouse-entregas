
export async function getResponse() {
  let promise = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?&startdate=2000-01-01&enddate=2002-08-23&dateregion=tcg');
  let toJson = await promise.json();
  return toJson
}


export async function showCards(container) {

  let res = await getResponse();
  res.data.forEach(item => {
    let card = document.createElement('img');
    card.style.width = "6rem";
    card.style.height = "9rem";
    card.style.margin = ".5rem";
    card.setAttribute('src', item.card_images[0].image_url);


    container.appendChild(card);
    //emulador de comportamiento hover
    card.addEventListener('mouseenter', (e) => {
      e.target.classList.add('card', 'animate__animated', 'animate__flipInY');
      document.querySelector('.info-container').innerHTML = 
      `
      <p>name: ${item.name}</p>
      <br>
      <p>type: ${item.type}</p>
      <br>
      <p>description: ${item.desc}</p>
      `
    })
    card.addEventListener('mouseleave', (e) => {
      setTimeout(() => {
        e.target.classList.remove('animate__flipInY')
      }, 600)
    })
  })

}

// export async function addToDeck(card, container){
//   card.addEventListener('click', (e) => {
//     container.appendChild(card)
//   })
// }

export async function addToDeck(card, container) {
  container.appendChild(card)
}


export async function removeFromDeck(card) {
  card.remove();
}


