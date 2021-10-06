import React from "react";
import { Rnd } from "react-rnd";
import Iframe from "react-iframe";

const style = {
  background: "#000",
  paddingLeft: "15px",
  width: "100%",
  color: "#fff",
  boxSizing: "border-box"
};

class VSCode extends React.Component {
  constructor() {
    super();
    this.state = {
      width: "830",
      height: "690",
      x: "100",
      y: "40"
    };
  }


  
  render() {
  const position = JSON.stringify({ x: this.state.x, y: this.state.y });
  const width = this.state.width.toString();
  const height = this.state.height.toString();

    return (
      <>
    <Rnd
      id="window"
      bounds="window"
      size={{ width, height }}
      position={position}
      onDragStop={(e, d) => {
        this.setState({ x: d.x, y: d.y });
      }}
      onResize={(e, direction, ref, delta, position) => {
        this.setState({
          width: ref.style.width,
          height: ref.style.height,
          ...position
        });
      }}
    >
    <div style={style}>Visual Studio Code</div>
    {/* https://winodoescors.sherwino.repl.co/ */}
    <Iframe url="https://vscode-web-test-playground.azurewebsites.net/"
      width={width}
      height={height}
      position={position}
      id="vscode-iframe"
      className="iframe"
      display="initial"
      allowFullScreen
      />
    </Rnd>
      </>
    );
  }
}

export default VSCode;