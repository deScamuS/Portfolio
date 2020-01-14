/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import NavBar from "../Navbar";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="contact1">
        <div className="contact">
          <Fade left big>
            <h3>me...</h3>
          </Fade>
          <p className="bio">
            Originally from Minneapolis, MN where my family owned and operated a
            marina on Lake Minntonka, MN, I was lucky to have lived and worked
            on the water and in the marina industry which taught me many things
            about community, communication, and above all else, the importance
            of solid teamwork and a mutual respect for others. I eventually
            moved to Seattle, where I graduated from Seattle Pacific University
            and then began traveling and teaching in Nepal, Indonesia, Peru and
            Egypt.
            <br />
            <br />I developed a passion for programming and eventually decided
            to take make a career change - so here we are. As a teacher I was
            constantly learning new things while experiencing diverse cultures
            around the world and I'm confident that through hardwork, my love of
            learning and fascination with programming, I could be an asset on
            any team... And I like making stuff.
          </p>
          <br />
          <hr />
          <Fade left big>
            <h3>university</h3>
          </Fade>
          <p class="college">
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
          <p class="sm-heading"></p>
          <div className="info">
            <span class="text-secondary">Email: desanmichael1@gmail.com</span>
          </div>
          <div>
            <span class="text-secondary">Phone: (310)650-3265 </span>
          </div>
          <div>
            <span class="text-secondary">
              Address: 401 N 2nd St Minneapolis, MN 55401{" "}
            </span>
          </div>
        </main>
      </div>
    </>
  );
};

const textStyle = {
  color: "#a73737",
  fontFamily: "Alcubierre, sans serif",
  paddingTop: "60px"
};
export default Contact;
