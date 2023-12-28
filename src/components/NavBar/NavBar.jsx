import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
        <h1>Marolio</h1>
        <nav>
            <ul>
                <li>pate</li>
                <li>yerba</li>
                <li>guardabarro de falcon</li>

            </ul>

        </nav>
        <CartWidget/>

    </header>
  )
}

export default NavBar