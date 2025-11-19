import React, { useState } from 'react'
import "./RefList.css"

export default function RefListLogica() {
    let [arrTask, setArrTask] = useState([])
    let [task, setTask] = useState('')

    let change = (e) => {
        setTask(e.target.value)
    }

    let agregar = () => {
        let eachTask = [...arrTask, task]
        setArrTask(eachTask)
    }

  return (
    <>
        <myButton algo1= {change} algo2 = {agregar}></myButton>
    </>
  )
}


function myButton(props){
    return (
    <>
        <input onChange={props.algo1} type="text" />
        <button onClick ={props.algo2}>agregar</button>
    </>
  )
}
