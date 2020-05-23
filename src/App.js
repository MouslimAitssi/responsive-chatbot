import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
             <NavbarBrand href="/">Bonjour, je suis votre chatbot!!</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
