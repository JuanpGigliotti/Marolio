import React from 'react'
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3>nombre: {nombre}</h3>
        <p>ID:{id}</p>
        <p>precio: {precio}</p>
        <Link to={`/Item/${id}`}>VER DETALLES</Link>
        
    </div>
  )
}

export default Item