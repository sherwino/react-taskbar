import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time } from "./Taskbar.styles";

import {
  VSCode,
  ReactStart,
  Task,
  Explorer,
  Firefox,
  Chrome,
  Outlook,
} from "./Icons";

// TODO - probably don't need this anymore, use styled
import "./Taskbar.css";

const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() });
  const { time } = dataTime;

  const currentTime = () => setTime({ time: new Date() });

  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  }, []);

  // TODO: now the svgs don't accept className
  return (
    <MainContainer>
      <ReactStart />
      <div id="taskbar-apps">
        {/*
         * TODO: find out how to add alt, docs said they had title
         * Linter says otherwise
         * https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
         */}
        <Task />
        <Explorer />
        <Firefox />
        <Chrome />
        <VSCode />
        <Outlook />
      </div>
      <Clock>
        <Time>{time.toLocaleTimeString()}</Time>
      </Clock>
    </MainContainer>
  );
};

export default App;
