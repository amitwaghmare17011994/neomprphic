import React from "react";
import "./input.css";

export default function Input(props) {
  return (
    <div className="field">
      <input className="input_field" {...props} />
    </div>
  );
}
