import React from "react";
import Clickable from "../Clickable/Clickable";
import "./button.css";

export default function Button(props) {
  const { text, onClick } = props;

  return (
    <Clickable onClick={onClick}>
      <button className="button">{text}</button>
    </Clickable>
  );
}
