import React, { useState, useEffect, useRef } from "react";
import ParagraphDisplay from "./ParagraphDisplay";

// Shorter paragraphs
const paragraphs = [
  "the sun rises every morning and sets in the evening the sky changes colors throughout the day sometimes clouds cover the sun making it cooler people enjoy the warmth and light the sun provides ",

  "dogs are loyal pets and often make great companions they like to play run and spend time with their owners feeding them at the same time each day helps them feel secure a happy dog is one that receives love and care ",

  "books are a great way to learn new things and escape to different worlds reading helps improve vocabulary and thinking skills some books are about adventures while others teach important lessons everyone ",

  "exercising regularly is important for staying healthy it strengthens muscles improves heart health and boosts mood even a short walk can help people feel better it is essential to make time for physical activity each day ",

  "the ocean is vast and filled with many kinds of creatures its waves crash on the shore creating soothing sounds some people enjoy swimming in the sea while others prefer relaxing on the beach the ocean holds ",

  "a small bird sat on the branch of a tree watching the world below it the wind gently swayed the leaves as the bird chirped happily it had no worries and enjoyed the simple moments of life the tree was its safe place and the sky was its playground ",

  "the sound of raindrops tapping on the window was soothing the air smelled fresh and clean as the storm passed by it was the perfect time to curl up with a good book and a warm cup of tea outside, the world was drenched in a blanket of water ",

  "in a quiet village, a group of children played in the streets their laughter filled the air as they ran around chasing each other they didn’t have fancy toys or gadgets but their imagination was endless they made up games, created adventures ",

  "a gentle breeze blew across the meadow as wildflowers swayed in the wind the sun was setting, painting the sky with shades of orange and pink it was the perfect end to a peaceful day the earth felt alive, and the stars began to appear one by one ",
];

const TypingTest = () => {
  const [currentParagraph, setCurrentParagraph] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [timeLeft, setTimeLeft] = useState(120); // Set to 60 seconds
  const [isTyping, setIsTyping] = useState(false);
  const [timer, setTimer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track current paragraph index
  const [totalCharsTyped, setTotalCharsTyped] = useState(0); // Total characters typed across all paragraphs
  const [totalMistakes, setTotalMistakes] = useState(0); // Total mistakes across all paragraphs
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    loadParagraph(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timer);
      setShowResults(true);
      setIsTyping(false); // Stop typing when time runs out
    }
  }, [timeLeft]);

  const loadParagraph = () => {
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setCurrentParagraph(paragraphs[randomIndex]);
    resetMistakes();
  };

  const resetMistakes = () => {
    setMistakes([]);
    setCharIndex(0);
  };

  const resetTimer = () => {
    clearInterval(timer); // Clear existing timer
    setTimeLeft(120); // Reset time to 60 seconds
  };

  const startTimer = () => {
    setIsTyping(true);
    setTimer(setInterval(() => setTimeLeft((prev) => prev - 1), 1000));
  };

  const handleKeyDown = (e) => {
    if (showResults) {
      if (e.key === "Enter") {
        closePopup(); // Close popup when Enter is pressed
      }
      return; // Prevent further key handling when popup is showing
    }

    // Start timer if not already started
    if (!isTyping && /^[a-zA-Z]$/.test(e.key)) {
      startTimer();
    }

    // Handle backspace
    if (e.key === "Backspace") {
      if (charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      }
      return;
    }

    const currentChar = currentParagraph[charIndex];
    if (e.key === currentChar) {
      // If the character is correct, move to next character and remove any mistake
      setMistakes((prev) =>
        prev.filter((mistakeIndex) => mistakeIndex !== charIndex)
      );
      setCharIndex((prev) => prev + 1);
    } else if (e.key.length === 1) {
      // If the character is incorrect, add to mistakes
      setMistakes((prev) => [...prev, charIndex]);
      setCharIndex((prev) => prev + 1);
      setTotalMistakes((prev) => prev + 1); // Increment total mistakes
    }

    setTotalCharsTyped((prev) => prev + 1);

    if (charIndex === currentParagraph.length - 1) {
      // Move to next paragraph automatically when the current one is completed
      if (currentIndex < paragraphs.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        clearInterval(timer);
        setShowResults(true);
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
    }`;
  };

  // Calculate WPM using total chars typed and time spent
  const calculateWPM = () =>
    Math.round(
      (totalCharsTyped - totalMistakes) / 5 / ((120 - timeLeft) / 60)
    ) || 0;

  const closePopup = () => {
    setShowResults(false); // Close the results popup
    resetTimer(); // Reset the timer
    // setCurrentIndex(0); // Reset paragraph index
    setCharIndex(0); // Reset character index to the start
    resetMistakes(); // Clear mistakes
    setTotalCharsTyped(0); // Reset total chars typed
    setTotalMistakes(0); // Reset total mistakes
    loadParagraph();
  };

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100%",
        padding: "20px",
        outline: "none",
      }}
      tabIndex="0"
      onKeyDown={handleKeyDown} // Use onKeyDown instead of onKeyPress
    >
      <div className="container mt-3">
        <h1 className="text-center mb-4">Typing Speed Test</h1>
      </div>

      <div className="timer-display text-center">
        <h1
          className="display-4"
          style={{
            color: "#007BFF",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Time: {formatTime(timeLeft)} {/* Display time in mm:ss format */}
        </h1>
      </div>
      <div
        className="card mb-3 mx-auto"
        style={{
          maxWidth: "900px",
          height: "350px",
          overflow: "auto",
        }}
      >
        <div className="card-body">
          <ParagraphDisplay
            paragraph={currentParagraph}
            charIndex={charIndex}
            mistakes={mistakes}
          />
        </div>
      </div>

      {showResults && (
        <>
          {/* Backdrop */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 998,
            }}
          ></div>

          {/* Results Popup */}
          <div
            className="results-popup"
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
              zIndex: 999,
              textAlign: "center",
              width: "400px",
            }}
          >
            <h3 className="mb-3" style={{ color: "#007BFF" }}>
              Results
            </h3>
            <p>
              <b>WPM:</b> {calculateWPM()}
            </p>
            <p>
              <b>Mistakes:</b> {totalMistakes}
            </p>
            <button className="btn btn-secondary mt-3" onClick={closePopup}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TypingTest;
