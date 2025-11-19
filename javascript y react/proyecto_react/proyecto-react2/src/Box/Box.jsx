import { useRef, useState } from 'react';

import './Box.css';
useState
// Solo lo que esta dentro de los componentes se renderiza

export default function Box(props) {
  let { cont } = props;
  // 
  let fixedValue = useRef(10);
  let domValue = useRef(null)
  let [count, setCount] = useState(0)

  let countUp = () => {
    // En el caso de fixedValue no apuntamos a un elemento jsx sino a un número.
    fixedValue.current <= 0 ? alert('listo') : fixedValue.current--;
    // fixedValue.current toma la referencia desde donde se le llama.. En caso de ser un elemento jsx como un <p> entonces se comportará como uno. Debe inicializarse como null ya que es un objeto 
    domValue.current.textContent = `${fixedValue.current}`
    setCount(++count);
  }


  return (
    <section className={cont}>
      <p>{count}</p>
      <p ref={domValue}></p>
      <button onClick={countUp}>incrementar</button>
      {/* props.children es como si fuera un parametro ...rest para los jsx */}
      {/* {children}   */}
    </section>
  )
}
