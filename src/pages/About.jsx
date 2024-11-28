import React from "react";
import { Link } from "react-router-dom";
import { FaKeyboard, FaInfoCircle, FaUser } from "react-icons/fa"; // Import icons from react-icons

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About AlphaTyper</h1>
          <p className="lead">Learn more about our mission and how we help you improve your typing skills.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Mission</h2>
          <div className="row text-center">
            <div className="col-md-6 mb-4">
              <FaInfoCircle size={50} className="text-primary mb-3" />
              <h4>Empowering Users</h4>
              <p>
                Our mission is to provide a comprehensive typing platform that empowers users to develop their skills at their own pace. 
                We believe in learning through practice and continuous improvement.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <FaUser size={50} className="text-primary mb-3" />
              <h4>Personalized Learning</h4>
              <p>
                AlphaTyper offers personalized learning experiences tailored to each individual’s needs, enabling users to measure their progress and improve their typing speed and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Who We Are</h2>
          <p className="text-center">
            At AlphaTyper, we’re dedicated to transforming the way people learn and practice typing. Our platform was developed by a team of experts passionate about education, technology, and user experience. 
            We aim to make typing lessons fun, engaging, and accessible to everyone, regardless of skill level. Our goal is to help users achieve mastery over their typing skills through consistent practice and real-time feedback.
          </p>
          <p className="text-center mt-4">
            Our approach combines simplicity, efficiency, and interactivity to make the learning process effective and enjoyable. We’re committed to helping users build their confidence, speed, and accuracy through a variety of lessons and challenges.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-4">What We Offer</h2>
          <div className="row">
            {/* Feature 1 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Easy-to-Follow Lessons</h4>
                <p>
                  Our interactive lessons are designed to teach typing skills from scratch, with  instructions and real-time feedback.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Track Your Progress</h4>
                <p>
                  AlphaTyper allows users to track their typing speed and accuracy through detailed reports and graphs.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Challenge Mode</h4>
                <p>
                  Challenge yourself with various typing exercises and practice your typing skills at different levels.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Real-Time Feedback</h4>
                <p>
                  Receive instant feedback on your typing speed, accuracy, and performance to identify areas of improvement.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Personalized Lessons</h4>
                <p>
                  Customize your lessons based on your skill level and interests, and practice typing at your own pace.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center bg-light rounded shadow">
                <FaKeyboard size={50} className="text-primary mb-3" />
                <h4>Community Support</h4>
                <p>
                  Join a community of typists who share tips, challenges, and feedback to improve together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta text-center py-5">
        <div className="container">
          <h2 className="display-4 text-white mb-4">Ready to Improve Your Typing Skills?</h2>
          <p className="text-white mb-4">
            Whether you're a beginner or aiming for speed mastery, AlphaTyper helps you every step of the way.
          </p>
          <Link to="/start" className="btn btn-warning btn-lg ">
                Start Typing Now
              </Link>
          
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Users Say</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <p>
                "AlphaTyper has transformed my typing practice! The real-time feedback and challenges have helped me improve significantly."
              </p>
              <strong>- Jane Doe</strong>
            </div>
            <div className="col-md-4 mb-4">
              <p>
                "The personalized lessons and interactive exercises make learning to type enjoyable and effective."
              </p>
              <strong>- John Smith</strong>
            </div>
            <div className="col-md-4 mb-4">
              <p>
                "I've never felt more confident in my typing skills! The reports and tracking features are so helpful."
              </p>
              <strong>- Alice Johnson</strong>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;
