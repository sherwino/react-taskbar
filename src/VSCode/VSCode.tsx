import React from "react";
import { Rnd } from "react-rnd";

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
    cursor: "default"
  },
};

class VSCode extends React.Component<any, any>{
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
      !closed && (
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
              ...position,
            });
          }}
        >
          <div style={styles.topBar} onClick={(e) => e.preventDefault()}>
            <div
              className="invisible-close-btn"
              style={styles.closeBtn}
              onClick={() => this.setState({ closed: true })}
            />
          </div>
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
        </Rnd>
     )
    );
  }
}

export default VSCode;
