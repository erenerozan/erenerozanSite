import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
      document.title = "";
    
  }
    componentDidMount(){

      document.title="Baby EROZAN";
    }
  render() {
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
