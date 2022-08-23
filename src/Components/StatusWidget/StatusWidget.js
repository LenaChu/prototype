import React from "react";
import { IconContext } from "react-icons/lib";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "./status-widget.css";

export default function StatusWidget(props) {
  const { header, message } = props;

  const linkStyle = {
    fontSize: "1rem",
  };

  return (
    <div>
      <div className="status-widget__container">
        <div className="status-widget__header">
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <div className="status-widget__icon-container">
              <FiGithub />
            </div>
          </IconContext.Provider>
          <h1>{header}</h1>
        </div>
        <div className="status-widget__body">
          <p>{message}</p>
          <div className="status-widget__hyperlink-container">
            <Link to="/">Check it out!🡥</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
