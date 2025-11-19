import React from 'react'
import "./Map.css"
// Crear items con el método map()

export default function Map() {

    let users = [
        {id: 1, name: "Juan", age: 35, occupation: "Carpenter", pic:"../../images/7.jpg"},
        {id: 2, name: "Felipe", age: 32, occupation: "Engineer", pic:"../../images/57.jpg"},
        {id: 3,name: "Jessica", age: 31, occupation: "Teacher", pic:"../../images/72.jpg"},
        {id: 4, name: "Manuel", age: 28, occupation: "Plumber", pic:"../../images/76.jpg"},
        {id: 5, name: "Manuela", age: 28, occupation: "Developer", pic:"../../images/79.jpg"},
        {id: 6, name: "Ricardo", age: 28, occupation: "Marketing", pic:"../../images/84.jpg"},
        
    ]
    //map a diferencia de forEach permite retornar y renderizar en pantalla.  
  return (
    <section className="card-container">
    {users.map((user) => {
        return <div key={user.id} className="user-card">
            <img src={user.pic} alt="" />
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.occupation}</p>
        </div>
    })}
    
    </section>
  )
}
