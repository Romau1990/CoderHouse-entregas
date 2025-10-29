function Container(props){
    console.log("Props de container: " + props);
    return(
        // llamo a la propiedad saludo e imprimo el mensaje en un <p>
        // el parametro será el iniciador de todas las propiedades que vayamos almacenando 
        <div>
            <p>{props.saludo}</p>
            <p>{props.dia}</p>
        </div>
    )
}



export default Container;