import React from "react";
import "./HelloMessage.css";

function HelloMessage(props) {
  return <div className="hello-message">Hello, {props.name}</div>;
}

export default HelloMessage;