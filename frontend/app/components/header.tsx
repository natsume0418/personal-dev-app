import React from "react";
import "../css/header.css";

const Header: React.FC = () => {
  return (
    <header>
      <img src="/logo.png" alt="サービスロゴ" className="logo-image" />
    </header>
  );
};

export default Header;
