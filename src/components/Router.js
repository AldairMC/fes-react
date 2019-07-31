import React, { Component } from 'react';
import { BrowserRouter as Ruta, Switch , Route} from 'react-router-dom'
import Error from './Error';
import Header from './Header';
import infoProduct from '../data/data.json';
import Products from './Products';
import SingleProduct from './SingleProduct'
import Nav from './Nav/Navigation';
import We from './we/We';
import Contact from './contact/Contact';

class Router extends Component {
    
    state = {
        productos : [],
        keywordSearch : ''
    }

    componentWillMount() {
        this.setState({
            productos : infoProduct 
        })
    }

    handlerSearch = (keyword) => {
        if(keyword.length > 3){
            this.setState({
                keywordSearch: keyword
            });
        }else{
            this.setState({
                keywordSearch: ''
            });
        }
    }


    render() {

        let product = [...this.state.productos];
        let search = this.state.keywordSearch
        let result;
        
        if(search !== ''){
            result = product.filter(index => (
                index.nombre.toLowerCase().indexOf( search.toLowerCase()) !== -1 
            ))
        }else{
            result = product
        }

        return (
            <React.Fragment>
                <Ruta>
                    <Header />

                    <Nav />

                    <Switch>
                        <Route exact path="/" render={ () => (
                            <Products 
                                productos={result}
                                handlerSearch={this.handlerSearch}
                            />
                        )}
                        />
                        <Route exact path="/product/:productId" render={ (props) => {
                            let productId = props.location.pathname.replace('/product/', '')
                            return(
                                <SingleProduct
                                    data={this.state.productos[productId]}
                                />        
                            )
                        }}
                        />
                        <Route exact path="/product" render={ () => (
                            <Products 
                                productos={result}
                                handlerSearch={this.handlerSearch}
                            />
                        )}
                        />
                        <Route exact path="/we" component={We}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </Ruta>
            </React.Fragment>

            
        );
    }
}

export default Router;