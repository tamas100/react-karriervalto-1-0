import React, { useState } from "react";
import "./FlashCards.css";

function Card({ frontSide, backSide }) {
  const [isFront, changeFace] = useState(true);
  function handleClick() {
    changeFace((oldState) => !oldState);
  }
  const text = isFront ? frontSide : backSide;
  const sideClass = isFront ? "front" : "back";
  const classList = `flash-card ${sideClass}`;
  return (
    <div>
      <div className={classList} onClick={handleClick}>
        {text}
      </div>
    </div>
  );
}

export default function FlashCards() {
  return (
    <div>
      <h1>Flash Cards</h1>
      <h2>Click on a card to reveal the secret solution!</h2>
      <Card frontSide="9 * 6" backSide="54" />
      <Card frontSide="2 ** 8" backSide="256" />
      <Card frontSide="rabbit * 8" backSide="rabbyte" />
    </div>
  );
}
