import React from "react";
import Container from "../Container/Container";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import "./page-grid.css";

export default function PageGrid() {
  return (
    <div className="page-grid">
      <Header />
      <MainNav />
      <Container />
    </div>
  );
}
