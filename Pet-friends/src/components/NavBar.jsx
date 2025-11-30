import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h2>Pet Friends</h2>

      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
