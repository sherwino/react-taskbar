import React, { Component } from 'react';
import Taskbar from './Taskbar/Taskbar';
import Window from './Windows/Window';
import './App.css';
import VSCode from './VSCode/VSCode';

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
        <VSCode/>
        <Taskbar/>
      </div>
    );
  }
}

export default App;
