import React, { useEffect, useState }  from "react";
import { MainContainer, Clock, Time } from './Taskbar.styles';
import logo from './logo.svg';
import './Taskbar.css';


const App = () => {
  const [dataTime, setTime] = useState({ time: new Date() })
  // const [dataBorder, setBorder] = useState({ border: false })
  // const { border } = dataBorder;
  const { time } = dataTime

  
  const currentTime = () => setTime({ time: new Date() });
  // const toggleDate = () => setBorder({ border: !border });
  
  useEffect(() => {
    setInterval(() => currentTime(), 1000);
  
  }, []);

    return( 
    <MainContainer>
      <img src={logo} className="App-logo" alt="logo" />
      <Clock>
       <Time>{time.toLocaleTimeString()}</Time>
        </Clock>
    </MainContainer>
    )
}

export default App;
