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
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
    backgroundImage:
      'url("https://i.gyazo.com/45c49d7f4e7f09238f485d5a9bc82a19.png")',
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
    return (
      <Window name={APPS.explorer}>
        <div style={styles.window} />
      </Window>
    );
  }
}

export default Exporer;
