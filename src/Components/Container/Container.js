import React from "react";
import Row from "../Row/Row";
import WelcomeWidget from "../WelcomeWidget/WelcomeWidget";
import "./container.css";

export default function Container() {
  return (
    <main className="grid--container">
      <WelcomeWidget />
      <Row />
      <Row />
      <Row />
      <Row />
    </main>
  );
}
