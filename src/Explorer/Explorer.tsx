import React from "react";
import { Rnd } from "react-rnd";
import Background from "./explorer.png";

const styles = {
  topBar: {
    margin: 0,
    borderLeft: "2px",
    borderRight: "2px",
    borderColor: "#ddd",
    borderStyle: "solid",
    width: "100%",
    height: "100%",
    color: "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  closeBtn: {
    height: 25,
    width: 30,
    cursor: "default",
  },
  window: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
};

class Window extends React.Component<WindowProps, WindowState> {
  constructor() {
    super();
    this.state = {
      closed: false,
      width: 730,
      height: 590,
      x: 10,
      y: 10,
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
          id="explorer"
          bounds="window"
          size={{ width, height }}
          position={position}
          style={styles.window}
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
          <div style={styles.topBar}>
            <div
              className="invisible-close-btn"
              style={styles.closeBtn}
              onClick={() => this.setState({ closed: true })}
            />
          </div>
        </Rnd>
      )
    );
  }
}

export default Window;
