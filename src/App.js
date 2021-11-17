import React, { Component } from 'react';
import Taskbar from './Taskbar/Taskbar';
import Window from './Windows/Window';
import './App.css';
import VSCode from './VSCode/VSCode';
import './messenger.css';
import './T8EASER7VGFWA1B124'
import Todo from "./Todo/Todo";

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
        {/* <VSCode/> */}
        <Todo/>
        <Taskbar/>
      </div>
    );
  }
}

export default App;
