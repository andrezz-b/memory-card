/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "../styles/Card.scss";

function Card(props) {
  const {
    title, img, click, id,
  } = props;

  const clickHandler = (e) => {
    const elementId = e.target.closest("div").getAttribute("id");
    click(elementId);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="card-container" onClick={clickHandler} id={id}>
      <img src={img} alt="" className="card-img" />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
