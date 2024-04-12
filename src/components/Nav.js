import React from "react";
import Logo from "../logo.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <NavLink to="/">
        <img src={Logo} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Nav;
