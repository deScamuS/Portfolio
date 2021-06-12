import React, { Component } from "react";
import Navbar from "./Navbar";
import Backdrop from "./Backdrop/Backdrop";
import "./App.css";

export default class Home extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navbar />
        {backdrop}
        <div style={{ height: "100%", marginTop: "-65px" }}>
          <main className="Home" style={{ marginTop: "59px" }}>
            <br />
            <div
              style={{ fontFamily: "Lato, sans serif", fontWeight: "200" }}
              className="intro"
            >
              Hello, I'm Michael
            </div>
            <div className="tagline"> </div>
            <div className="icons-social">
              <a href="https://github.com/deScamuS/">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.facebook.com/michael.desantis.338211">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </main>
        </div>
      </div>
    );
  }
}
