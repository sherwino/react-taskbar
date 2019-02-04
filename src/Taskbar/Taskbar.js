import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time } from './Taskbar.styles';
import logo from './logo.svg';
import task from './task.svg';
import explorer from './explorer.svg';
import firefox from './firefox.svg';
import chrome from './chrome.svg';
import vscode from './vscode.svg';
import outlook from './outlook.svg';

import './Taskbar.css';


const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() })
  const { time } = dataTime

  const currentTime = () => setTime({ time: new Date() });

  useEffect(() => {
    setInterval(() => currentTime(), 1000);

  }, []);

  return (
    <MainContainer>
        <img src={logo} className="App-logo" alt="logo" />
      <div id="taskbar-apps">
        <img src={task} className="icon" alt="logo" />
        <img src={explorer} className="icon" alt="logo" />
        <img src={outlook} className="icon" alt="logo" />
        <img src={firefox} className="icon" alt="logo" />
        <img src={chrome} className="icon" alt="logo" />
        <img src={vscode} className="icon" alt="logo" />
      </div>
      <Clock>
        <Time>{time.toLocaleTimeString()}</Time>
      </Clock>
    </MainContainer>
  )
}

export default App;
