import React from "react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom if using routing
import { FaKeyboard } from "react-icons/fa"; // Import icon for visual appeal

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to AlphaTyper</h1>
          <p className="lead">Your journey to mastering typing begins here.</p>
          <p>
            Whether you're just starting or looking to improve your typing
            speed, AlphaType is designed to help you practice efficiently and
            effectively.
          </p>
          {/* Call-to-Action Section */}
          <section className=" cta text-center py-5 mt-5 rounded shadow">
            <div className="container">
              <h2 className="display-4 mb-4">Ready to Start Typing?</h2>
              <p className=" mb-4">
                Whether you're looking to improve speed or just practice,
                AlphaType helps you every step of the way.
              </p>
              <Link to="/start" className="btn btn-warning btn-lg ">
                Start Typing Now
              </Link>
            </div>
          </section>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-4">Why AlphaTyper?</h2>
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Easy-to-Follow Lessons</h4>
                <p>
                  With simple and engaging lessons, learn to type from A to Z at
                  your own pace.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Real-Time Feedback</h4>
                <p>
                  Track your progress with immediate feedback to see how you're
                  improving.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Track Your Speed</h4>
                <p>
                  Measure your typing speed in words per minute (WPM) and
                  challenge yourself to improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="instructions bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <h4>Step 1: Start Typing</h4>
              <p>
                Click the "Start Typing" button to begin your practice session.
              </p>
            </div>
            <div className="col-md-4">
              <h4>Step 2: Follow the Text</h4>
              <p>
                Follow the text and try to type each word correctly and quickly.
              </p>
            </div>
            <div className="col-md-4">
              <h4>Step 3: Improve</h4>
              <p>
                Track your progress and strive to beat your previous scores!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
