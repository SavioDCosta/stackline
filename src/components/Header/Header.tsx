import React from "react";
import logo from "../../assets/stackline-logo.svg";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Stackline Logo" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;
