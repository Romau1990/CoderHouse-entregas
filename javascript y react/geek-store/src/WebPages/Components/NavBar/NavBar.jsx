import React from 'react'
import "./NavBar.css"

export default function NavBar() {
    return (
        <div className="navBar">

            <div className="logo-container">
                <img src="https://placehold.co/60x60" alt="" className="logo" />
            </div>

            <div className="navBar-links">
                <a className="navBar-link" href="">Home</a>
                <a className="navBar-link" href="">Store</a>
                <a className="navBar-link" href="">Contact</a>
            </div>

        </div>
    )
}
