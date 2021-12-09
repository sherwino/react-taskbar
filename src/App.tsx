import React from "react";
import "./App.css";
import { WindowContext } from "./Contexts/WindowContext";
import Explorer from "./Explorer/Explorer";
import "./messenger.css";
import "./T8EASER7VGFWA1B124";
import Taskbar from "./Taskbar/Taskbar";
import Todo from "./Todo/Todo";
import { mergeConfigFn, storage } from "./utils";
import { APPS, CONFIGS, STORAGE_KEYS, WINDOW_DEFAULTS } from "./utils/const";
import VSCode from "./VSCode/VSCode";

const APP_CONFIG = {
  code: false,
  todo: true,
  windowsExplorer: false,
};

const loadLastKnownFromStorage = async (setLastKnown: any) => {
  const lastKnownApps: App[] = await storage.get(STORAGE_KEYS.appConfigs);
  if (lastKnownApps && lastKnownApps.length > 0) {
    lastKnownApps.forEach(app =>
      setLastKnown(app.name, app.config as WindowConfig)
    );
  }
};

const App = (props: any) => {
  // const context = React.useContext(WindowContext);
  const initialApps: any = Object.keys(APPS).map(app => ({
    name: app,
    defaultCfg: WINDOW_DEFAULTS,
  }));
  const [apps, setApps] = React.useState<App[]>(initialApps);
  // This should probably be part of setConfig in future
  const [disabledWindow, setDisabledWindow] = React.useState<any>();

  // TODO: really need to optimize taskbar so that everything is not re-rendering
  // The clock is fudging things up

  const setConfig: SetConfig = (appName, config, type) => {
    const updatedAppsList = apps.map(app => {
      if (app.name === appName) {
        // Update apps config
        // @ts-ignore
        app[type] = config;
        app.config = mergeConfigFn(
          app.defaultCfg,
          app.lastKnownCfg,
          app.currentCfg
        );
        return app;
      }

      return app;
    });

    console.log("setconfig", appName, config, type);
    storage.set(STORAGE_KEYS.appConfigs, updatedAppsList);
    setApps(updatedAppsList);
  };

  const setLastKnown: SetConfigType = (appName, config) => {
    setConfig(appName, config, CONFIGS.lastKnown);
  };
  const setCurrent: SetConfigType = (appName, config) => {
    setConfig(appName, config, CONFIGS.current);
  };
  const setDefault: SetConfigType = (appName, config) => {
    setConfig(appName, config, CONFIGS.default);
  };

  const openApp: SetAction = appName => {
    apps.forEach(app => {
      if (app.name === appName) {
        // Should be app.config
        const newConfig = { ...app.defaultCfg, open: true };

        setCurrent(appName, newConfig);

        return;
      }
    });
  };
  const minimizeApp: SetAction = appName => {};
  const disable: SetAction = appName => setDisabledWindow(appName);

  const closeApp: SetAction = appName => {
    apps.forEach(app => {
      if (app.name === appName) {
        // Should be app.config
        const newConfig = { ...app.defaultCfg, open: false };

        setCurrent(appName, newConfig);

        return;
      }
    });
  };

  const addApp: SetApps = (appName, config = WINDOW_DEFAULTS) => {
    const newAppList = [...apps, { name: appName, defaultCfg: config }];

    console.log("adding app", { appName, apps });
    setApps(newAppList);
  };

  React.useLayoutEffect(() => {
    loadLastKnownFromStorage(setLastKnown);
  }, []);

  return (
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
        disable,
        disabledWindow,
      }}
    >
      <div>
        <header id="header" className="App-header">
          <h1 className="App">React Taskbar</h1>
        </header>
        {<Explorer />}
        {<VSCode />}
        {<Todo />}
        <Taskbar />
      </div>
    </WindowContext.Provider>
  );
};

export default App;
