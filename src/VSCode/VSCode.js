import React from "react";
import { Rnd } from "react-rnd";
import Iframe from "react-iframe";

const style = {

};

class VSCode extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 830,
      height: 690,
      x: 100,
      y: 40
    };
  }

  render() {
    return (
      <Rnd
        id="window"
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
      <Iframe url="http://ec2-34-238-162-153.compute-1.amazonaws.com"
        width={this.state.width}
        height={this.state.height}
        position={{ x: this.state.x, y: this.state.y }}
        id="vscode-iframe"
        className="iframe"
        display="initial"
        // position="relative"
        allowFullScreen/>
      </Rnd>
    );
  }
}

export default VSCode;