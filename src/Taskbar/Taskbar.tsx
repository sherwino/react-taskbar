import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time, AppContainer } from "./Taskbar.styles";

import { ICONS, Icon } from "./Icons";

const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() });
  const { time } = dataTime;

  const currentTime = () => setTime({ time: new Date() });

  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  }, []);

  return (
    <MainContainer>
      <AppContainer>
      <Icon name={ICONS.start} spin />
        <Icon name={ICONS.task} />
        <Icon name={ICONS.explorer} />
        <Icon name={ICONS.firefox} />
        <Icon name={ICONS.chrome} />
        <Icon name={ICONS.vscode} />
        <Icon name={ICONS.outlook} />
      </AppContainer>
      <Clock>
        <Time>{time.toLocaleTimeString()}</Time>
      </Clock>
    </MainContainer>
  );
};

export default App;
