import React from "react";
import { Rnd } from "react-rnd";
import App from "../App";
import { APPS } from "../utils/const";
import { Window } from "../Window/Window";

const styles = {
  topBar: {
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
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  closeBtn: {
    height: 25,
    width: 30,
    cursor: "default",
  },
};

class VSCode extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      closed: null,
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
    const closed = this.state.closed;

    return (
      <Window name={APPS.vscode}>
        <iframe
          src="https://codesandbox.io/s/infallible-bell-cgxgz"
          title="code"
          width={width}
          height={height}
          // position={position}
          id="vscode-iframe"
          className="iframe"
          // display="initial"
          allowFullScreen
        />
      </Window>
    );
  }
}

export default VSCode;
