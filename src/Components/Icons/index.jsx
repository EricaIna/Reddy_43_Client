import React from "react";
import { motion } from "framer-motion";

export const HamburgerIcon = () => (
  <div role="ham">
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
        r="34"
        stroke="#EEFF04"
        strokeWidth="2"
        fill="#393838"
      />
      <rect x="20" y="30" width="40" height="3" fill="#EEFF04" />

      <rect x="10" y="40" width="40" height="3" fill="#EEFF04" />
    </motion.svg>
  </div>
);

export const CloseIcon = () => (
  <div role="close">
    <motion.svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0 }}
      animate={{ rotate: 180, scale: 1.2, x: "-20vw" }}
      transition={{ duration: 0.5 }}
      exit={{ rotate: 0, scale: 1 }}
    >
      <circle
        cx="35"
        cy="35"
        r="34"
        stroke="#EEFF04"
        strokeWidth="2"
        fill="#393838"
      />
      <path d="M25 25 L45 45" stroke="#EEFF04" strokeWidth="2" />

      <path d="M45 25 L25 45" stroke="#EEFF04" strokeWidth="2" />
    </motion.svg>
  </div>
);
