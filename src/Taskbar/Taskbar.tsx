import React, { useEffect, useState } from "react";
import { Icon, ICONS } from "./Icons";
import { AppContainer, Clock, MainContainer, Time } from "./Taskbar.styles";




const Taskbar = (props: any) => {
  const [dataTime, setTime] = useState({ time: new Date() });
  const { time } = dataTime;
  // const context = React.useContext(WindowContext);
  const currentTime = () => setTime({ time: new Date() });

 
  useEffect(() => {
    const int = setInterval(() => currentTime(), 1000);

    return () => clearInterval(int);
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
