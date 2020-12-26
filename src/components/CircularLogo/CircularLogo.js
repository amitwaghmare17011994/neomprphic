import React from "react";
import Clickable from "../Clickable/Clickable";
import "./circularlogo.css";
export default function CircularLogo(props) {
  const {isPlay=false}=props
  return (
    <Clickable isPlay={isPlay}>
      <div className="logo">
        <img {...props} />
      </div>
    </Clickable>
  );
}
