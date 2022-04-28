import React from "react";
import "../styles/Card.scss";

function Card(props) {
  const { title, img } = props;
  return (
    <div className="card-container">
      <img src={img} alt="" className="card-img" />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
