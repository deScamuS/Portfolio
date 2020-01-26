/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import NavBar from "../Navbar";
import logo0 from "../img/react2.png";
import logo1 from "../img/jslogo.png";
import logo2 from "../img/node.png";

const Contact = () => {
  return (
    <div
      style={{
        backgroundColor: "#e2d1c3",
        marginTop: "5vhm",
        position: "center"
      }}
    >
      <NavBar />
      <div className="contact1">
        <div className="contact"></div>
        <Fade left big>
          <h3 style={textStyle}>me...</h3>
        </Fade>
        <p className="bio">
        Hey, I'm Michael and I currenty reside in Minneapolis. I've
              lived and worked as a teachr in Peru, Nepal, Seattle, & LA, and during that time I developed a
              passion for programming , and have a vociferous appetite for developing my
              skill-sets and capabilities to positively contribute to teams in
              both a creative and technological manner. Thanks for taking the
              time to have a look!
          <br />

        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Fade left big>
            <img src={logo0} alt="" />
          </Fade>
          <Fade bottom big>
            <img src={logo1} alt="" />
          </Fade>
          <Fade right big>
            <img src={logo2} alt="" />
          </Fade>
        </div>
        <br />
        <Fade left big>
          <h3 style={textStyle}>university</h3>
        </Fade>
        <p className="college">
          University of San Diego | Kansas University | Seattle Pacific
          University
        </p>
      </div>
      <main id="contact">
        <Fade left big>
          <h3 style={textStyle}>
            <center>contact</center>
          </h3>
        </Fade>
        <div id="contact">
          <div className="sm-heading"></div>
          <div className="boxes">
            <div>
              <h3>
                <span className="text-secondary"></span>
              </h3>
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
            </div>
            <div>
              <h3>
                <span className="text-secondary">Address: </span>
              </h3>
              <h3>401 N 2nd St Minneapolis, MN 55401</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const textStyle = {
  color: "#EB4D4D",
  fontFamily: "Alcubierre, sans serif",
  paddingTop: "60px"
};
export default Contact;
