import React from "react";
import click from "../../click.mp3";

export default function Clickable(props) {
  const { onClick, isPlay = true } = props;

  const onClickListener = () => {
    isPlay && new Audio(click).play();

    onClick && onClick();
  };
  return <div onClick={onClickListener}>{props.children}</div>;
}
