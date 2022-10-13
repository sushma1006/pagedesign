import React, { Component } from 'react';
import Contents from './content';
import './App.css';
import Header from './header';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appScreen">
            <Header/>
            <Contents/>
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
