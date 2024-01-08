import React, { useContext } from "react";
import PropTypes from "prop-types";

import { ThemeContext } from "./ThemeContext";

export default function Button(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{
        color: theme === "dark" ? "#000" : "#fff",
        backgroud: theme === "light" ? "##fff" : "#000",
      }}
    >
      {props.children}
    </button>
  );
}

Button.protoType = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
