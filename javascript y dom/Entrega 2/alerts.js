

export async function warning(url) {
  //await espera a la api de sweet alert 2 y lo pasa por variable.
  const resp = await Swal.fire({
    title: "Seguro que quieres quitar esta carta de tu mazo?",
    text: "You won't be able to revert this!",
    icon: "warning",
    theme: "dark",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    imageUrl: url,
    imageWidth: "10rem",
    imageHeight: "15rem",
    background: "url(./images/imagenAlerta2.webp)",
    confirmButtonText: "quitar!"
  })

  //el manejador de la respuesta es pasado por la estructura de control.
  if (resp.isConfirmed) {
    Swal.fire({
      title: "Carta removida del mazo!",
      icon: "success",
      theme: "dark",
      background: "url(./images/imagenAlerta2.webp)",
    });
    return true;
  }
  return false;
}




export function deckLimitReached() {

  Swal.fire({
    icon: "warning",
    title: "You can't add more cards",
    text: "you've reached the limit. Try removing cards from deck first",
    footer: '<a href="#">Why do I have this issue?</a>'
  });

}