import CartWidget from './CartWidget';

// El nombre de los hooks siempre en mayusucula cual si fueran clases en Java o Javascript
function NavBar() {
    return (
        <nav>
            <ul>
                <li>home</li>
                <li>store</li>
                <li>about us</li>
                <li>contact</li>
            </ul>

            <div>
                <CartWidget/>
            </div>
        </nav>
    )   
}

export default NavBar;