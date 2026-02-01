import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2 className="logo">StudentApp</h2>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Students</a>
          <a href="#">Stats</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
