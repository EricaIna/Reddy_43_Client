import React from "react";
import { motion } from "framer-motion";

export const HamburgerIcon = () => (
  <motion.svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: 0 }}
    animate={{ rotate: 180 }}
    transition={{ duration: 0.5 }}
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
  </motion.svg>
);

export const CloseIcon = () => (
  <motion.svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ rotate: 0 }}
    animate={{ rotate: 180, scale: 1.2, x: "-15vw", y: "15vh" }}
    transition={{ duration: 0.5 }}
    exit={{ rotate: 0, scale: 1 }}
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
  </motion.svg>
);
