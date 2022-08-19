import Button from "../Button/Button";
import React from "react";
import StatusWidget from "../StatusWidget/StatusWidget";
import TaskWidget from "../TaskWidget/TaskWidget";
import "./row.css";

export default function Row() {
  const title = "Hello, this is my title.";
  const header = "Header";
  const message = "Hello, I am the message.";

  return (
    <React.Fragment>
      <div className="row--container">
        <h1>{title}</h1>
        <StatusWidget header={header} message={message} />
        <TaskWidget header={header} message={message} />
      </div>
    </React.Fragment>
  );
}
