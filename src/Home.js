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
      <>
        <Navbar />
        {backdrop}
        <div style={{ height: "100%", marginTop: "-65px" }}>
          <main className="Home" style={{ marginTop: "59px" }}>
            <br />
            <div
              style={{ fontFamily: "Alcubierre, sans serif" }}
              className="intro"
            >
              Hello, I'm Michael
            </div>
            <div className="tagline"> </div>
            <div className="icons-social">
              <a href="https://github.com/deScamuS/">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/descamusmichael/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </main>
        </div>
      </>
    );
  }
}
