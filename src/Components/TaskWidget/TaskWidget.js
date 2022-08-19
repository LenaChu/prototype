import React from "react";
import "./task-widget.css";

export default function TaskWidget(props) {
  const { header, message } = props;

  return (
    <div>
      <div className="task-widget__container">
        <div className="task-widget__header">
          <h1>{header}</h1>
        </div>
        <div className="task-widget__body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}
