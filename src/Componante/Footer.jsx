import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
      <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>RezFood</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <address>
              1234 Street Name<br />
              City, State ZIP Code<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </address>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;