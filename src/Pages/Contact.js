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
    <div style={{ backgroundColor: "#e2d1c3" }}>
      <NavBar />
      <div className="contact1">
        <div className="contact">
          <Fade left big>
           <h3>me...</h3>
          </Fade>
          <p className="bio">
            Hey! I'm Mike DeSantis and i'm originally from Minneapolis, MN where
            my family owned and operated a marina on Lake Minntonka, MN, I was
            lucky to have lived and worked on the water and in the marina
            industry which taught me many things about community, communication,
            and above all else, the importance of solid teamwork and a mutual
            respect for others. I eventually moved to Seattle, where I graduated
            from Seattle Pacific University and then began traveling and
            teaching in Nepal, Indonesia, Peru and Egypt.
            <br />
            <br />I developed a passion for programming and eventually decided
            to take make a change - so here we are. As a teacher I was
            constantly learning new things while experiencing diverse cultures
            around the world and I'm confident that through hardwork, my love of
            learning and fascination with programming, I could be an asset on
            any team... And I like making stuff with...
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
          <hr />
          <Fade left big>
            <h3>university</h3>
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
    </div>
  );
};

const textStyle = {
  color: "#EB4D4D",
  fontFamily: "Alcubierre, sans serif",
  paddingTop: "60px"
};
export default Contact;
