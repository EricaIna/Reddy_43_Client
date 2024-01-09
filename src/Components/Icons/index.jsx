import React from "react";

export const HamburgerIcon = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="35"
      cy="35"
      r="34" // 半径を調整
      stroke="#EEFF04"
      strokeWidth="2"
      fill="#393838"
    />
    <rect x="20" y="30" width="40" height="3" fill="#EEFF04" /> //
    サイズと位置を調整
    <rect x="10" y="40" width="40" height="3" fill="#EEFF04" /> //
    サイズと位置を調整
  </svg>
);

export const CloseIcon = () => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="35"
      cy="35"
      r="34" // 半径を調整
      stroke="#EEFF04"
      strokeWidth="2"
      fill="#393838"
    />
    <path d="M25 25 L45 45" stroke="#EEFF04" strokeWidth="2" /> // サイズを調整
    <path d="M45 25 L25 45" stroke="#EEFF04" strokeWidth="2" /> // サイズを調整
  </svg>
);
