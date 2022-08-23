import React from "react";
import Profile from "../Profile/Profile";
import "./header.css";

export default function Header(props) {
  return (
    <header className="header__container">
      <Profile initials={"ML"} username={"Michael Lanes"} />
    </header>
  );
}
