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
  },
};

// TODO: see what methods could be easily sent to utils
// TODO: start setting defaults
export const Window = (props: WindowProps) => {
  const context = React.useContext<WindowCtx>(WindowContext);
  const apps: App[] = context.apps;

  const contextValues = React.useMemo(() => {
    const values = apps.find(app => props.name === app.name);
    return values?.config || values?.defaultCfg;
  }, [props.name, apps]);

  const { width, height, x, y } = contextValues as WindowConfig;
  const [focusedInput, setInputFocus] = React.useState(false);
  const [foreground, setForeground] = React.useState("");
  console.log("context bb", { context, props });

  const onResize = (
    e: any,
    direction: any,
    ref: any,
    delta: any,
    position: any
  ) => {
    context.setCurrent(props.name, {
      ...contextValues,
      width: Number(ref.offsetWidth),
      height: Number(ref.offsetHeight),
      x: position.x,
      y: position.y,
    });
  };

  const onDragStop = (e: any, d: any) => {
    context.setCurrent(props.name, {
      ...contextValues,
      x: d.x,
      y: d.y,
    });

    setForeground(props.name);
  };

  const windowOpen = contextValues && contextValues.open;
  const size =
    width && height ? { width, height } : { width: 600, height: 400 };
  const position = x && y ? { x, y } : { x: 100, y: 100 };

  React.useEffect(() => {
    if (context.disabledWindow === props.name) {
      setInputFocus(true);
    }

  }, [context.disabledWindow, props.name]);

  console.log("who is in the forground", { foreground, name: props.name });
  return windowOpen ? (
    <Rnd
      id={props.name}
      bounds="window"
      size={size}
      position={position}
      disableDragging={focusedInput}
      onDragStop={onDragStop}
      onResize={onResize}
      // this is a rudimentary way to do this but it kinda works first time
      style={{ zIndex: foreground === props.name ? 200 : 10 }}
    >
      <div style={styles.topBar} onClick={e => e.preventDefault()}>
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
