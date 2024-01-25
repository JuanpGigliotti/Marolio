import React from 'react'
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Marolio</h1>
      </Link>

      
        <nav>
            <ul>
                <li>
                  <NavLink to="/Categoria/2">
                    autopartes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Categoria/3">
                    almacen
                  </NavLink>
                </li>
            </ul>

        </nav>
        <CartWidget/>

    </header>
  )
}

export default NavBar