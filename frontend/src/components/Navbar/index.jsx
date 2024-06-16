import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import diagram from "@assets/images/diagram.svg";
import logo from "@assets/images/logo.png";
import { navbarItems } from "@constants";

import {
  NavbarWrapper,
  LogoWrapper,
  ListWrapper,
  ToggleWrapper,
  ToggleInput,
  ToggleSlider,
  ExitButton,
} from "./styled";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    navigate("/login");
  };

  return (
    <NavbarWrapper data-cy="navbar">
      <LogoWrapper>
        <img src={logo} alt="diagram" />
      </LogoWrapper>
      <ListWrapper>
        {navbarItems.map((item) => {
          const { id, name, path } = item;
          return (
            <li key={id}>
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ListWrapper>
      <ExitButton onClick={handleLogout}>Выйти</ExitButton>
    </NavbarWrapper>
  );
};

export default Navbar;
