import React, { Component } from 'react';
import '../App.css';
import Navbar from './Navbar'
import Home from './Home'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar /> 
        <Home />
        </div>
    );
  }
}

export default App;
