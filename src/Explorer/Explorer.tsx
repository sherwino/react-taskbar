import React from "react";
import { Rnd } from "react-rnd";
import { APPS } from "../utils/const";
import Background from "./explorer.png";
import { Window } from "../Window/Window";

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

class Exporer extends React.Component<ExplorerProps, ExplorerState> {
  constructor(props: ExplorerProps) {
    super(props);
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
      <Window name={APPS.explorer}>
        <div style={styles.window} />
      </Window>
    );
  }
}

export default Exporer;
