/* eslint-disable no-unused-vars */
import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";
import NavBar from "../Navbar";


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
          Hey, I'm Michael and I currenty reside in Minneapolis; I've lived and
          worked as a teacher in Nepal, Seattle, LA & Peru and during that time
          I developed an interest programming. I have a vociferous appetite
          for developing my skill-sets and capabilities so I may positively
          contribute to teams in both a creative and technological manner.
          Thanks for taking the time to have a look!
          <br />
        </p>

        <br />
      </div>
      <div class="contact-title">
        <h1>I'd love to hear from you</h1>
      </div>
      <Fade left big>
        <div class="contact-form">
          <form
            id="contact-form"
            method="POST"
            action="https://formspree.io/desanmichael1@gmail.com"
          >
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="Full Name"
              required
            />
            <br />

            <input
              type="email"
              name="_replyto"
              class="form-control"
              placeholder="Email"
              required
            />
            <br />

            <textarea
              name="message"
              class="form-control"
              placeholder="Message"
              rows="4"
              required=""
            ></textarea>
            <br />
            <input type="submit" class="form-control submit" value="Send" />
          </form>
        </div>
      </Fade>
      <main id="contact">
        <Fade left big>
          <h3 style={textStyle}>
            <center>contact...</center>
          </h3>
        </Fade>
        <div id="contact">
          <div className="sm-heading"></div>
          <div className="boxes">
            <div>
              <h4>
                <span className="text-secondary"></span>
              </h4>
              <h4>
                <span className="text-secondary">Email: </span>
              </h4>
              <h4>desanmichael1@gmail.com</h4>
            </div>
            <div>
              <h4>
                <span className="text-secondary">Phone: </span>
              </h4>
              <h4>(310)650-3265</h4>
            </div>
            <div>
              <h4>
                <span className="text-secondary">Address: </span>
              </h4>
              <h4>401 N 2nd St Minneapolis, MN 55401</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const textStyle = {
  color: "#EB4D4D",
  fontFamily: "Lato, sans serif",
  fontWeight: "300",
  paddingTop: "60px"
};
export default Contact;
