import React from "react";
import { Rnd } from "react-rnd";
import Background from "./explorer.png";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0",
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

class Window extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 730,
      height: 590,
      x: 10,
      y: 10
    };
  }

  render() {
    return (
      <Rnd
        id="explorer"
        bounds="window"
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
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
      </Rnd>
    );
  }
}

export default Window;