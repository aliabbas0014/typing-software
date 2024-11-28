import React from "react";

const Stats = ({ timeLeft, mistakes, charIndex, currentParagraph }) => {
  const wpm = timeLeft > 0 ? Math.round(((charIndex - mistakes) / 5) / (10 - timeLeft) * 60) : 0;
  const cpm = charIndex - mistakes;

  return (
    <div className="d-flex justify-content-around my-3">
      <div>Time Left: <b>{timeLeft}s</b></div>
      <div>WPM: <b>{wpm}</b></div>
      <div>Mistakes: <b>{mistakes}</b></div>
      <div>CPM: <b>{cpm}</b></div>
    </div>
  );
};

export default Stats;
