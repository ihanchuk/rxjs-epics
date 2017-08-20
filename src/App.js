import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Main from './components/main';
import Products from './components/products';
import ProductForm from './components/product-form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <ul className=" nav nav-pills">
            <li role="presentation"><Link to="/">Main Page</Link></li>
            <li role="presentation"><Link to="/products"> Products </Link></li>
            <li role="presentation"><Link to="/newproduct"> New Product </Link></li>
          </ul>
        </div>
        <MuiThemeProvider>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/products" component={Products} />
            <Route path="/newproduct" component={ProductForm} />
          </Switch>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
