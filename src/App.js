import React from 'react';
import {Component} from 'react';
// import logo from './logo.svg';
import { Navbar,
       NavbarBrand,
       } from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';

class App extends Component  {


  constructor(props){
    super (props);

    this.state = {
    dishes: DISHES,
     
    };

  }

  render(){
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className="heading">Confusion hi confusion hai!!</h1>
      <hr></hr>

      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="/">home</NavbarBrand>
          <NavbarBrand href="/">about</NavbarBrand>
          <NavbarBrand href="/">contact</NavbarBrand>
          <NavbarBrand href="/">help</NavbarBrand>
    
        </div>

      </Navbar>
    
      <Menu dishes={this.state.dishes} />

    </div>
  );
}
}

export default App;
