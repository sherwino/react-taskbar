import React, { useEffect, useState } from "react";
import { MainContainer, Clock, Time, AppContainer } from "./Taskbar.styles";

import { Icon, ICONS } from "./Icons";
import { WindowContext } from "../Contexts/WindowContext";

const Taskbar = () => {
  const [dataTime, setTime] = useState({ time: new Date() });
  const { time } = dataTime;
  const context = React.useContext(WindowContext);
  const currentTime = () => setTime({ time: new Date() });

  // TODO: really need to optimize taskbar so that everything is not re-rendering
  // The clock is fudging things up

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

export default Taskbar;
