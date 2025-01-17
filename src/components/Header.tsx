import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/stackline-logo.svg"
          alt="Stackline Logo"
          className="header-logo"
        />
      </div>
    </header>
  );
};

export default Header;
