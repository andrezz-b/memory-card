/* eslint-disable no-unused-vars */
import React from "react";
import uniqid from "uniqid";
import Card from "./Card";
import {
  PeraltaImg,
  SantiagoImg,
  HoltImg,
  DiazImg,
  BoyleImg,
  TerryImg,
  ScullyImg,
  HitchcockImg,
  PimentoImg,
  GinaImg,
} from "../img/index";
import "../styles/CardBoard.scss";

const cards = [
  {
    id: uniqid(),
    title: "Jake Peralta",
    img: PeraltaImg,
  },
  {
    id: uniqid(),
    title: "Amy Santiago",
    img: SantiagoImg,
  },
  {
    id: uniqid(),
    title: "Rosa Diaz",
    img: DiazImg,
  },
  {
    id: uniqid(),
    title: "Raymond Holt",
    img: HoltImg,
  },
  {
    id: uniqid(),
    title: "Charles Boyle",
    img: BoyleImg,
  },
  {
    id: uniqid(),
    title: "Terry Jeffords",
    img: TerryImg,
  },
  {
    id: uniqid(),
    title: "Norm Scully",
    img: ScullyImg,
  },
  {
    id: uniqid(),
    title: "Michael Hitchcock",
    img: HitchcockImg,
  },
  {
    id: uniqid(),
    title: "Adrian Pimento",
    img: PimentoImg,
  },
  {
    id: uniqid(),
    title: "Gina Linetti",
    img: GinaImg,
  },
];

function CardBoard(props) {
  const {
    setHighScore, setScore, highScore, score,
  } = props;

  return (
    <div className="board-container">
      {cards.map((card) => (
        <Card key={card.id} img={card.img} title={card.title} />
      ))}
    </div>
  );
}

export default CardBoard;
