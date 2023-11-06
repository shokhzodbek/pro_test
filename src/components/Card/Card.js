import React from "react";
import "./Card.css";
function Card({ image, title, price }) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{price}$</p>
    </div>
  );
}

export default Card;
