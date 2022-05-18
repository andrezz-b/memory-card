/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
import CardBoard from "./components/CardBoard";
import "./styles/reset.css";
import "./App.scss";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  return (
    <>
      <div className="header-container">
        <Header />
        <Scoreboard score={score} highScore={highScore} />
      </div>
      <main>
        <CardBoard
          setScore={setScore}
          setHighScore={setHighScore}
          highScore={highScore}
          score={score}
        />
      </main>
    </>
  );
}

export default App;
