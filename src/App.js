import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path='/checkout'>
                        <Checkout />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
