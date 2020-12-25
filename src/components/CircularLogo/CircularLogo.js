import React from "react";
import Clickable from "../Clickable/Clickable";
import "./circularlogo.css";
export default function CircularLogo(props) {
  return (
    <Clickable isPlay={false}>
      <div className="logo">
        <img {...props} />
      </div>
    </Clickable>
  );
}
