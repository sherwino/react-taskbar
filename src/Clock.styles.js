import styled from "styled-components";


const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const NavBar = styled.nav`
  width: 100vw;
  background-color: darkgrey;
  height: 80px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  `;

  const ClockFramework = styled.div`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-color: black;
    margin: 50px 0 0 0;
    box-sizing: border-box;
    border: ${({ border }) => border && '2px solid red'};

  `;

  const Time = styled.p`
    font-size: 30px;
    margin: 40% 15%;
    color: white;
    `;

  const Button = styled.button`
    margin-top: 10px;
    width: 100px;
    height: 40px;
    border-radius: 18.5px;
    background-color: darkgray;
  `;


  export {
      ClockFramework, 
      MainContainer,
      NavBar,
      Time, 
      Button
  }