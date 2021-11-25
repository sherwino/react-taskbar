import * as React from "react";
import { Rnd } from "react-rnd";
import { WindowContext } from "../Contexts/WindowContext";


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
    backgroundColor: "green"
  },
};

// TODO: see what methods could be easily sent to utils
// TODO: start setting defaults
export const Window = (props: WindowProps) => {
  const context = React.useContext<any>(WindowContext);
  const apps: App[] = context.apps;
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: 230,
    height: 230,
  });
  const [position, setPosition] = React.useState({ x: 100, y: 100 });
  const [focusedInput, setInputFocus] = React.useState(false);

  console.log("context bb", { context, props });

  const onResize = (
    e: any,
    direction: any,
    ref: any,
    delta: any,
    position: any
  ) => {
    setWindowDimensions({
      width: Number(ref.style.width),
      height: Number(ref.style.height),
    });

    setPosition(position);
  };

  const onDragStop = (e: any, d: any) => {
    setPosition({ x: d.x, y: d.y });
  };

  const config = React.useMemo(() => {
    return apps.find((app) => props.name === app.name && app.config);
  }, [props.name, apps]);

  const { width, height } = windowDimensions;
  const windowOpen = config && config.currentCfg && config.currentCfg.open;

  return windowOpen ? (
    <Rnd
      id={props.name}
      bounds="window"
      size={{ width, height }}
      position={position}
      disableDragging={focusedInput}
      onDragStop={onDragStop}
      onResize={onResize}
    >
      <div style={styles.topBar} onClick={(e) => e.preventDefault()}>
        <div
          className="invisible-close-btn"
          style={styles.closeBtn}
          onClick={() => context.closeApp(props.name)}
        />
      </div>
      {props.children}
    </Rnd>
  ) : null;
};
