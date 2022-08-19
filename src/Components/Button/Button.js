import React, { useState } from "react";

export default function Button() {
  const bttn = {
    padding: "8px 16px",
    backgroundColor: "#2600ad",
    color: "white",
    border: "none",
    borderRadius: "20px",
  };
  const [state, setState] = useState("Hide Widget");

  return <button style={bttn}>{state}</button>;
}
