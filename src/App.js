import React, { Component } from 'react';
import Products from './components/products';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Products />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
