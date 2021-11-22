import * as React from "react";
import { Rnd } from "react-rnd";
import { APPS, CONFIGS, WINDOW_DEFAULTS } from "../utils/const";
import { WindowContext } from "../Contexts/WindowContext";

export const Window = (props: WindowProps) => {
  const context = React.useContext(WindowContext);
  const [windowDimensions, setWindowDimensions] = React.useState({
    width: 230,
    height: 230,
  });
  const [position, setPosition] = React.useState({ x: 100, y: 100 });
  const [focusedInput, setInputFocus] = React.useState(false);
  const [apps, setApps] = React.useState([{name: APPS.task, defaultCfg: WINDOW_DEFAULTS}]);

  console.log("context bb", { context });

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

  const setConfig: SetConfig = (appName, config, type) => {};

  const setLastKnown: SetConfig = (appName, config) => {
    setConfig(appName, config, CONFIGS.lastKnown);
  };
  const setCurrent: SetConfig = (appName, config) => {
    setConfig(appName, config, CONFIGS.lastKnown);
  };
  const setDefault: SetConfig = (appName, config) => {
    setConfig(appName, config, CONFIGS.default);
  };

  const openApp: SetAction = (appName) => {};
  const minimizeApp: SetAction = (appName) => {};
  const closeApp: SetAction = (appName) => {};
  const addApp: SetApps = (appName, config = WINDOW_DEFAULTS) => {};

  const { width, height } = windowDimensions;
  return !closed ? (
    <WindowContext.Provider
      value={{
          apps,
          addApp,
        openApp,
        minimizeApp,
        closeApp,
        setLastKnown,
        setCurrent,
        setDefault,
      }}
    >
      <Rnd
        id="window"
        bounds="window"
        size={{ width, height }}
        position={position}
        disableDragging={focusedInput}
        onDragStop={onDragStop}
        onResize={onResize}
      >
        {props.children || null}
      </Rnd>
    </WindowContext.Provider>
  ) : null;
};
