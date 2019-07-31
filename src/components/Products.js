import React, { Component } from 'react';
import Product from './Product';
import './Products.css';
import Search from './search/Search';

class Products extends Component {
    render() {

        const datosProductos = this.props.productos

        return (
            <div className="productos">
                <h2>Nuestros Productos</h2>
                <Search 
                    searcher={this.props.handlerSearch}    
                />
                <ul className="lista-productos">
                    { Object.keys(datosProductos).map( key => ( 
                        <Product 
                            key = {key}
                            datos = {datosProductos[key]}
                        />            
                    ))}
                </ul>
            </div>
        );
    }
}

export default Products;