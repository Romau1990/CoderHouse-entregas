import './App.css'
import {useState} from 'react'; //fundamental para poder renderizar cualquier cosa en pantalla. Es un recurso que toma de node_modules
import NavBar from './components/navBar';
import Container from './components/container';



// todo lo que querramos renderizar debe estar dentro de la funcion App
function App() {
  // logica del codigo
  let [counter, setCounter] = useState(0); //esto es importado desde node_modules y es una desestructuración. Ponemos el nombre de la variable y luego otra vez el nombre de nuestra variable pero precedido por un 'set' = useState();
  let [nombre, setNombre] = useState('Rodrigo');

  // en el return veremos todo aquello que se renderizará en pantalla
  // las variables se renderizan entre {}
  return(
    // return solo devuelve un unico valor o expresion. Por eso usamos el fragmento <></> y metemos todo dentro. También podría ser una etiqueta <div></div>, <section></section>, etc. 

    <>
      {/* la notacion < nombreFuncion /> es la forma de decir donde se renderizará la informacion  */}
      <NavBar/> 
      {/* container es como un objeto al cual le agrego una propiedad llamada saludo. Solo los strings no llevan {} por eso 21 si va entre corchetes */}
      <p>Counter: {counter}</p>
      <p>Nombre: {nombre}</p>
      <Container saludo = "hola mundo geek" dia = {21}/> 
      {/* los estados se reinician cuando recargo la página */}
      <button onClick= { () => setCounter(counter+1) }>incrementar</button>
      <button onClick ={ () => setNombre(nombre = "Rodolfo") }>cambiar nombre</button> 
    </>
  )
}

export default App

//CUIDADO: vale aclarar que siempre es mejor trabajar en archivos separados. Un archivo por función para que todo quede más claro y prolijo. Podría crar una carpeta components para guardar todos los componentes que voy creando por separado.
// La carpeta App.jsx es la principal y todo debe ser importado a ella para que funcione. Recordar que debo poner la palabra clave export en el componente que quiero exportar. Export siempre va abajo del todo. También puedo hacer una exportacion por default para exportar todo lo que cree ahí y listo. Para eso ponemos export default