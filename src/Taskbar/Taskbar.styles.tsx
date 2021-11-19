import * as styled from "styled-components";


const MainContainer = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  background: rgba(22, 28, 22, 0.8);
  border: 1px solid #aaa;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-direction: row;
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

  const Clock = styled.div`
    width: 6rem;
    color: #fff;
    margin: 0 1rem 0 0;
   `;

  const Time = styled.p`
    font-size: 15px;
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
      Clock, 
      MainContainer,
      NavBar,
      Time, 
      Button
  }