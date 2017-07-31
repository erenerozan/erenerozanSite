import React, { Component } from 'react';
import './App.css';

class Menu extends Component {
  constructor(props){
    super(props);
    this.changeMenu=this.changeMenu.bind(this);
  }
  changeMenu(e){
    this.props.onMenu(e.target.value);
  }
  render() {
    return (
      <div className="Menu">
        Menu
        <button onClick={this.changeMenu} value="2">Bas</button>
      </div>
    );
  }
}

export default Menu;
