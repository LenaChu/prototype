import React from "react";
import { Link } from "react-router-dom";
import "./profile.css";

export default function Profile(props) {
  const { initials, username } = props;
  return (
    <div className="profile--container">
      <h5>{username}</h5>
      <Link to="/">
        <div className="profile--image">{initials}</div>
      </Link>
    </div>
  );
}
