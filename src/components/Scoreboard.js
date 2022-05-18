import React from "react";
import "../styles/Scoreboard.scss";

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div className="score-container">
      <h2 className="score-title">
        Score:
        {` ${score}`}
      </h2>
      <h2 className="score-title">
        High Score:
        {` ${highScore}`}
      </h2>
    </div>
  );
}

export default Scoreboard;
