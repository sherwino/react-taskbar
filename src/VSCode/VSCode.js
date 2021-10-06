import React from "react";
import { Rnd } from "react-rnd";

const style = {
  background: "url(https://i.gyazo.com/9c73502f78d3e1f810d79cab6ec2464a.png)",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  margin: 0,
  borderLeft: "2px",
  borderRight: "2px",
  borderColor: "#ddd",
  borderStyle: "solid",
  width: "100%",
  color: "#fff",
  height: 25,
};

class VSCode extends React.Component {
  constructor() {
    super();
    this.state = {
      width: "830",
      height: "690",
      x: "100",
      y: "40",
    };
  }

  render() {
    const position = { x: this.state.x, y: this.state.y };
    const width = this.state.width;
    const height = this.state.height;

    return (
      <>
        <Rnd
          id="window"
          bounds="window"
          size={{ width, height }}
          position={position}
          onDrag={(e, d) => {
            this.setState({ x: d.x, y: d.y });
          }}
          // onDragStop={(e, d) => {
          //   this.setState({ x: d.x, y: d.y });
          // }}
          onResize={(e, direction, ref, delta, position) => {
            this.setState({
              width: ref.style.width,
              height: ref.style.height,
              ...position,
            });
          }}
        >
          <div style={style} />
          {/* https://winodoescors.sherwino.repl.co/ */}
          <iframe
            src="https://codesandbox.io/s/infallible-bell-cgxgz"
            title="code"
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
