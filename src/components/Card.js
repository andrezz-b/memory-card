import React from "react";

function Card(props) {
  const { title, img } = props;
  return (
    <div>
      <img src={img} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
