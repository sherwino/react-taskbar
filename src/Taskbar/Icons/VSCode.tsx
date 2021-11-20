import React from "react";

function VSCode() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      clipRule="evenodd"
      viewBox="0 0 261 260"
    >
      <path
        fill="#007acc"
        d="M195.47-.006v223.3L.49 194.335l194.98 65.654 65-27.039V31.06l.021-.01-.021-.043v-3.976l-65-27.041z"
      ></path>
      <path
        fill="#007acc"
        d="M127.24 38.037L67.519 97.07 31.564 69.992l-14.818 4.95 36.58 36.16-36.58 36.157 14.818 4.951 35.955-27.08h.002l59.717 59.03 35.768-15.198V53.232L127.24 38.035zm-.002 42.121v61.879l-41.086-30.939 41.086-30.939z"
      ></path>
    </svg>
  );
}

export default React.memo(VSCode);
