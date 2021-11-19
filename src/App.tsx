import React, { Component } from "react";
import Taskbar from "./Taskbar/Taskbar";
import Explorer from "./Explorer/Explorer";
import "./App.css";
import VSCode from "./VSCode/VSCode";
import "./messenger.css";
import "./T8EASER7VGFWA1B124";
import Todo from "./Todo/Todo";

// TODO: a little manifest to manage the state of all of the installed apps
// Pull last known config from storage
const APP_CONFIG = {
  code: false,
  todo: true,
  windowsExplorer: false,
};

class App extends Component {
  render() {
    return (
      <div>
        <header id="header" className="App-header">
          <h1 className="App">React Taskbar</h1>
        </header>
        {APP_CONFIG.windowsExplorer && <Explorer />}
        {APP_CONFIG.code && <VSCode />}
        {APP_CONFIG.todo && <Todo />}
        <Taskbar />
      </div>
    );
  }
}

export default App;
