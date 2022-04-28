import React from "react";

function Scoreboard(props) {
  const { score, highScore } = props;
  return (
    <div>
      <h2>
        Score:
        {score}
      </h2>
      <h2>
        High Score:
        {highScore}
      </h2>
    </div>
  );
}

export default Scoreboard;
