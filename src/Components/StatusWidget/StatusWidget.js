import React from "react";
import "./status-widget.css";

export default function StatusWidget(props) {
  const { header, message } = props;

  return (
    <div>
      <div className="status-widget__container">
        <div className="status-widget__header">
          <h1>{header}</h1>
        </div>
        <div className="status-widget__body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
