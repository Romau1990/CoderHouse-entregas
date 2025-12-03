import React from 'react'
import "./NavBar.css"
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navBar">

            <div className="logo-container">
                <img src="https://placehold.co/60x60" alt="" className="logo" />
            </div>

            <div className="navBar-links">
                <Link className="navBar-link" to="/">Home</Link>
                <Link className="navBar-link" to="/store">Store</Link>
                <Link className="navBar-link" to="/contact">Contact</Link>
            </div>

        </div>
    )
}
