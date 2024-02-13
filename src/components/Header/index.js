import React from "react";
import { useHistory } from "react-router-dom";

import { Container } from "./styles";

export default function Header({ onToggleTheme, selectedTheme }) {
  const history = useHistory();

  const handleNavigate = () => {
    history.push("/");
  };

  return (
    <Container>
      <h1>Duca Blog</h1>
      <button type="button" onClick={onToggleTheme}>
        {selectedTheme === "dark" ? "🌙" : "🌞"}
      </button>
      <button onClick={handleNavigate} style={{ color: "#fff" }}>
        Back Home
      </button>
    </Container>
  );
}
