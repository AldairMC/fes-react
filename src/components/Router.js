import React, { Component } from 'react';
import { BrowserRouter as Ruta, Switch , Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Error from './Error';
import Name from './Name';
import Header from './Header'

class Router extends Component {
    render() {
        return (
            <div>
                <Header />
            
                <Ruta>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/yo" component={Name} />
                        <Route component={Error}/>
                    </Switch>
                </Ruta>
            </div>

            
        );
    }
}

export default Router;