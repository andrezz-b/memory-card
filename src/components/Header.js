import React from "react";
import "../styles/Header.scss";
import { b99Logo } from "../img";

function Header() {
  return (
    <header>
      <img src={b99Logo} alt="" className="logo-img" />
      <h1 className="header-title">MEMORY GAME</h1>
    </header>
  );
}

export default Header;
