import React from 'react'
import './HelloReact'

export default function HelloReact(props) {
  return (
    <h2 className="hello-react">
      Hello, {props.name}
    </h2>
  );
}
