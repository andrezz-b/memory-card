/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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

const cardsTemplate = [
  {
    id: uniqid(),
    clicked: false,
    title: "Jake Peralta",
    img: PeraltaImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Amy Santiago",
    img: SantiagoImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Rosa Diaz",
    img: DiazImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Raymond Holt",
    img: HoltImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Charles Boyle",
    img: BoyleImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Terry Jeffords",
    img: TerryImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Norm Scully",
    img: ScullyImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Michael Hitchcock",
    img: HitchcockImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Adrian Pimento",
    img: PimentoImg,
  },
  {
    id: uniqid(),
    clicked: false,
    title: "Gina Linetti",
    img: GinaImg,
  },
];

function shuffle(array) {
  const output = [...array];
  let m = array.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m);
    m -= 1;
    t = output[m];
    output[m] = output[i];
    output[i] = t;
  }

  return output;
}

function CardBoard(props) {
  const {
    setHighScore, setScore, highScore, score,
  } = props;

  const [cards, setCards] = useState(cardsTemplate);

  useEffect(() => {
    setCards(shuffle([...cards]));
  }, []);

  const gameOver = () => {
    if (score > highScore) setHighScore(score);
    const newCards = cards.map((card) => {
    // eslint-disable-next-line no-param-reassign
      card.clicked = false;
      return card;
    });
    setCards(shuffle(newCards));
    setScore(0);
  };

  const clickHandler = (id) => {
    let failed = false;
    let newCards = [...cards];
    newCards = newCards.map((card) => {
      if (card.id === id) {
        if (card.clicked) failed = true;
        // eslint-disable-next-line no-param-reassign
        else card.clicked = true;
      }
      return card;
    });
    if (failed) gameOver();
    else {
      setScore(score + 1);
      setCards(shuffle(newCards));
    }
  };

  return (
    <div className="board-container">
      {cards.map((card) => (
        <Card key={card.id} img={card.img} title={card.title} click={clickHandler} id={card.id} />
      ))}
    </div>
  );
}

export default CardBoard;
