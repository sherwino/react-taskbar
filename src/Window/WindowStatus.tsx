import * as React from "react";
import { Rnd } from "react-rnd";
import { WINDOW_DEFAULTS } from "../utils/const";

export const Window = (props: WindowProps) => {
    const [windowDimensions, setWindowDimensions] = React.useState({width: 230, height: 230})
const [position, setPosition] = React.useState({x: 100, y: 100});
const [focusedInput, setInputFocus] = React.useState(false);

const onResize = (e: any, direction: any, ref: any, delta: any, position: any) => {
    setWindowDimensions({
        width: Number(ref.style.width),
        height: Number(ref.style.height),
      });

      setPosition(position);

};

const onDragStop = (e: any, d: any) => {
    setPosition({ x: d.x, y: d.y })
}

    const { width, height} = windowDimensions;
    return       !closed ? (
        <Rnd
          id="window"
          bounds="window"
          size={{ width, height }}
          position={position}
          disableDragging={focusedInput}
          onDragStop={onDragStop}
          onResize={onResize}
        >
            <div style={{width: 500, height: 500, background: "red"}}>TESTING</div>
            {props.children || null}
        </Rnd>) : null;
}