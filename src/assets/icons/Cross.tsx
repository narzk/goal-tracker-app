import React from "react";
const Cross = ({ width = "32", height = "32" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31 5.2855L26.7145 1L16 11.7145L5.2855 1L1 5.2855L11.7145 16L1 26.7145L5.2855 31L16 20.2855L26.7145 31L31 26.7145L20.2855 16L31 5.2855Z"
      fill="black"
    />
  </svg>
);
export default Cross;
