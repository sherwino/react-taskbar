import styled from "styled-components";

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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
`;

const Clock = styled.div`
  width: 8rem;
  height: 52px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Time = styled.p`
  padding: 1rem 0;
  font-size: 15px;
  height: 100%;
  line-height: 100%;
  color: white;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100px;
  height: 40px;
  border-radius: 18.5px;
  background-color: darkgray;
`;

const AppContainer = styled.div`
  overflow: hidden;
  flex: auto;
  display: flex;
  height: 100%;
  flex-direction: row;
  /* border: 2px red dashed; */
`;

export { Clock, MainContainer, NavBar, Time, Button, AppContainer };
