import React, { useState } from "react";
import "./main-nav.css";

export default function MainNav() {
  const [checked, setChecked] = useState(true);

  const handleToggle = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <nav
      className={checked ? "main-nav__container" : "main-nav__container folded"}
    >
      <div className="hamburger-menu">
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={checked}
        ></input>
        <span className="first-child"></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
