import React, { useState } from 'react'
import "./Filter.css"

export default function Filter(props) {
    let {action, search} = props;


    return (
        <div className="filter">
            <input type="text" onChange ={search} />
            <select name="" id="">
                <option value="name">name</option>
                <option value="type">type</option>
                <option value="level">level</option>
                <option value="race">race</option>
            </select>
            <button onClick={action}>buscar carta</button>
        </div>
    )
}
