import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { NavWrapper } from "./styles";

import Header from "../Header";
import Footer from "../Footer";

import Routes from "../../Routes";

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <BrowserRouter>
      <Header onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />

      <NavWrapper>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/82723872873823">Posts Id</Link>
      </NavWrapper>

      <Routes />
      {/*<Footer onToggleTheme={onToggleTheme} selectedTheme={selectedTheme} />*/}
    </BrowserRouter>
  );
}
