import React from "react";
import { APPS } from "../utils/const";
import { Window } from "../Window/Window";

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
    const width = this.state.width;
    const height = this.state.height;

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
