import React, { Component } from 'react';
import Taskbar from './Taskbar/Taskbar';
import Window from './Windows/Window';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header id="header" className="App-header">
          <h1 className="App">
            React Taskbar
          </h1>
        </header>
        <Window/>
        <Taskbar/>
      </div>
    );
  }
}

export default App;
