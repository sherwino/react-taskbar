import React from "react";

// TODO: Maybe this will be the icon for todo list
function Task() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="228"
      height="168"
      version="1"
      viewBox="0 0 171 126"
    >
      <g fill="#fff">
        <path
          d="M330 630V10h1050v1240H330V630zm970 0V100H410v1060h890V630zM10 630V120h280v80H90v860h200v80H10V630zM1420 1100v-40h200V200h-200v-80h280v1020h-280v-40z"
          transform="matrix(.1 0 0 -.1 0 126)"
        ></path>
      </g>
    </svg>
  );
}

export default React.memo(Task);
