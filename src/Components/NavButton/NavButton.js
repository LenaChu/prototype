import React from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import "./nav-button.css";

// interface NavButtonProps {
//   checked: boolean;
//   name: string;
//   icon: JSX.Element;
// }

const linkStyle = {
  textDecoration: "none",
};

export default function NavButton({ checked, name, Icon }) {
  const foldedButton = checked ? "" : "folded-button";
  const buttonClasses = `nav-button__container ${foldedButton}`;
  const iconMargin = checked ? "" : "mr-0";
  const iconClasses = `nav-button__icon ${iconMargin}`;
  const hideSpan = checked ? {} : { display: "none" };

  return (
    <Link to={"/"} style={linkStyle}>
      <div className={buttonClasses}>
        <IconContext.Provider
          value={{ size: "1.5rem", className: iconClasses }}
        >
          {Icon}
        </IconContext.Provider>
        <span style={hideSpan}>{name}</span>
      </div>
    </Link>
  );
}
