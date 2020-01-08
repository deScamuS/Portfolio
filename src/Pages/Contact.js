import React from "react";
import "./Contact.css";
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div className="container">
      <div className="contact">
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me!</span>
          </h1>
          <div className="sm-heading">
          <div className="boxes">
            <div>
              <h3>
                <span className="text-secondary">Email: </span>
              </h3>
              <h3>desanmichael1@gmail.com</h3>
            </div>
            <div>
              <h3>
                <span className="text-secondary">Phone: </span>
              </h3>
              <h3>(310)650-3265</h3>
            <div>
              <h3>
                <span className="text-secondary">Address: </span>
              </h3>
              <h3>401 N 2nd St Minneapolis, MN 55401</h3>
            </div>
              </div>
            </div>
            </div>
        </main>
        <div>
        <Fade right big>
            <h1 style={textStyle}>Contact Me</h1>
            <h4>Resume</h4>
            <img src="https://img.icons8.com/plasticine/100/000000/resume.png" alt="/"/>

        </Fade>
      </div>
      </div>
    </div>
  );
};
const textStyle= {
  color: '#a73737'
};

export default Contact;
