import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time } from "./Taskbar.styles";

import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Task } from "./task.svg";
import { ReactComponent as Explorer } from "./explorer.svg";
import { ReactComponent as Firefox } from "./firefox.svg";
import { ReactComponent as Chrome } from "./chrome.svg";
import { ReactComponent as Vscode } from "./vscode.svg";
import { ReactComponent as Outlook } from "./outlook.svg";

// TODO - probably don't need this anymore, use styled
import "./Taskbar.css";

const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() });
  const { time } = dataTime;

  const currentTime = () => setTime({ time: new Date() });

  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  }, []);

  return (
    <MainContainer>
      <Logo className="App-logo" />
      <div id="taskbar-apps">
        {/* 
        * TODO: find out how to add alt, docs said they had title 
        * Linter says otherwise
        * https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
        */}
        <Task className="icon" />
        <Explorer className="icon" />
        <Firefox className="icon" />
        <Chrome className="icon" />
        <Vscode className="icon" />
        <Outlook className="icon" />
      </div>
      <Clock>
        <Time>{time.toLocaleTimeString()}</Time>
      </Clock>
    </MainContainer>
  );
};

export default App;
