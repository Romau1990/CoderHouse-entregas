import React, { useEffect, useRef, useState } from 'react'


export default function ToDoList() {
    let [values, setValues] = useState([]);
    let [inputVal, setInputVal] = useState('')
    
    let changeValue = (e) => {
        setInputVal(e.target.value)
    }

    let agregar = () => {
        let newTask = [...values,inputVal]
        setValues(newTask)
    }

    return (
        <>
            <input value={inputVal} onChange={changeValue}/>
            <button onClick={agregar}>agregar tarea</button>

            <ul className="list-container">
                {values.map((task) => {
                    return <li onClick={(e)=>e.target.remove()}>{task}</li>
                })}
            </ul>
        </>


    )
}
