import React from "react";
import "./card.css";
export default function Card(props) {
  const { inset = false, clickable } = props;

  return (
    <div className={ `${inset ? "card inset " : "card"} ${clickable?'card-click':''}`} {...props}>
      {props.children}
    </div>
  );
}
