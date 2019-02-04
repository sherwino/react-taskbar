import React, { Component } from 'react';
import Taskbar from './Taskbar/Taskbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App">
            React Taskbar
          </h1>
        </header>
        <Taskbar/>
      </div>
    );
  }
}

export default App;
