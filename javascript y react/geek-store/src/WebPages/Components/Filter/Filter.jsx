import React, { useState } from 'react'


export default function Filter(props) {
    let {action, search} = props;


    return (
        <div>
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
