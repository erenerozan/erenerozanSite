import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        {this.props.logo}
        {this.props.menu}
        {this.props.baslik}
      </div>
    );
  }
}

export default Header;
