import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import DropdownMenu from "../DropdownMenu";

export const Header = () => {
  return (
    <main>
      <header>
        <nav>
          <DropdownMenu />
        </nav>
      </header>
      <Outlet />
    </main>
  );
};

export default Header;
