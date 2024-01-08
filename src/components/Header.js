import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import { ThemeContext } from "./ThemeContext";

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>{props.title}</h1>
      <Button onClick={onToggleTheme}>Mudar Tema</Button>
      {props.children}
    </>
  );
}

Header.prototype = {
  title: PropTypes.string.isRequired,
  cildren: PropTypes.node,
};

/*Pegando a props (propiedade do title do header e renderizando no h1)*/
/*Existe uma forma de desestruturação da prop que é usando {title} e renderizando no h1*/
