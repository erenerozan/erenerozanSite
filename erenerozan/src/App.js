import React, { Component } from 'react';
import Header from './Header.js';
import Logo from './Logo.js';
import Menu from './Menu.js';
import Content from './Content.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      header:"Header baby"
    }
    document.title = "";
    this.tikla=this.tikla.bind(this);
  }
    componentDidMount(){
      document.title="Baby EROZAN";
    }
    tikla(e){
      this.setState({header:"Menu ye bastın pislik"});
    }
  render() {
    return (
      <div className="App">
        <Header 
          baslik={this.state.header} 
          logo={<Logo/>} 
          menu={<Menu onMenu={this.tikla}/>}
        />
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
