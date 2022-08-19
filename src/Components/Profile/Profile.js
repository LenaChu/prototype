import React from "react";
import "./profile.css";

export default function Profile(props) {
  const { initials, username } = props;
  return (
    <div className="profile--container">
      <h5>{username}</h5>
      <div className="profile--image">{initials}</div>
    </div>
  );
}
