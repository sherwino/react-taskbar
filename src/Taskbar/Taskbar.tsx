import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time } from "./Taskbar.styles";

import { ICONS, Icon } from "./Icons";

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
      <div id="taskbar-apps">
      <Icon name={ICONS.start} spin />
        {/*
         * TODO: find out how to add alt, docs said they had title
         * Linter says otherwise
         * https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
         */}
        <Icon name={ICONS.task} />
        <Icon name={ICONS.explorer} />
        <Icon name={ICONS.firefox} />
        <Icon name={ICONS.chrome} />
        <Icon name={ICONS.vscode} />
        <Icon name={ICONS.outlook} />
      </div>
      <Clock>
        <Time>{time.toLocaleTimeString()}</Time>
      </Clock>
    </MainContainer>
  );
};

export default App;
