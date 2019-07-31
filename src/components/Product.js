import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom'

const Product = (props) => {
    
    const { nombre, imagen, precio, id } = props.datos
    
    return (
        <li className="">
            <img src={`img/${imagen}.png`} alt={nombre}/>
            <p>{nombre} <span>${precio}</span> </p>
            <BrowserRouter>
                <Link to={`/product/${id}`}>
                    Mas informacion
                </Link>
            </BrowserRouter>
        </li>
    );
};

export default Product;