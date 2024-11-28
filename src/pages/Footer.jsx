import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row justify-content-center">
          {/* Quick Links Section */}
          <div className="col-md-4 mb-3 fler text-center">
            <h5 className="border-bottom pb-2">Quick Links</h5>
            <ul className="list-unstyled d-flex justify-content-center text-center">
              <li>
                <a href="/home" className="text-light text-decoration-none mx-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none mx-2">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-light text-decoration-none mx-2">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none mx-2">
                  Contact
                </a>
              </li>
            </ul>
          </div>

         

          {/* Social Media Section */}
          {/* <div className="col-md-4 mb-2">
            <h5 className="border-bottom pb-2">Follow Us</h5>
            <div className="d-flex gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-none"
              >
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright Section */}
        <div className="text-center border-top pt-3">
          <p className="mb-0">
            © {new Date().getFullYear()} AlphaTyper. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
