import React, { useState, useEffect } from "react";
import { MainContainer, NavBar, ClockFramework, Time, Button } from './App.styles';

const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() })
  const [dataBorder, setBorder] = useState({ border: false })
  const { border } = dataBorder;
  const { time } = dataTime

  
  const currentTime = () => setTime({ time: new Date() });
  const toggleDate = () => setBorder({ border: !border });
  
  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  
  }, []);

    return( 
    <MainContainer>
      <NavBar>React Clock</NavBar>
      <ClockFramework border={border}>
       <Time>{time.toLocaleTimeString()}</Time>
        </ClockFramework>
      <Button onClick={toggleDate}>Toggle Border</Button>
    </MainContainer>
    )
}

export default App;
