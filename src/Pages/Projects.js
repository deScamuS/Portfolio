import React, { Component } from "react";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import logo from "../img/nasa.png";
import logo0 from "../img/react2.png";
import logo1 from "../img/jslogo.png";
import logo2 from "../img/node.png";
import image from "../img/calc.png";
import image2 from "../img/vwood.jpg";
import image3 from "../img/booklist.jpg";
import Fade from "react-reveal/Fade";
import NavBar from "../Navbar";
import "./Projects.css";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: 0
    };
  }
  handleChange = tabId => {
    this.setState({ activeTab: tabId });
  };

  //TOGGLE FUNCTION FOR TABS DISPLAYING CARDS

  toggleContent = () => {
    if (this.state.activeTab === 0) {
      return (
        <Card
          shadow={6}
          style={{
            minWidth: "450",
            margin: "auto",
            backgroundColor: "#e2d1c3"
          }}
        >
          <a href=" https://descamus.github.io/nasa_api">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(60deg, #29323c 4%, #485563 100%)"
              }}
            >
              <img src={logo} alt="none" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>
            {""}
            Picture of the Day
          </CardText>
          <CardActions border>
            <Button colored>
              <a
                style={{ color: "#E98074" }}
                href="https://github.com/deScamuS/nasa_api"
              >
                code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card
          shadow={6}
          style={{ minWidth: "450", margin: "auto", backgroundColor: "e2d1c3" }}
        >
          <a href="https://descamus.github.io/jscript_calc/">
            <CardTitle
              style={{
                color: "rgb(255, 255, 255)",
                height: "299px",
                backgroundImage:
                  "linear-gradient(60deg, #29323c 4%, #485563 100%)"
              }}
            >
              <img src={image} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>Calculator</CardText>
          <CardActions border>
            <Button colored>
              <a
                style={{ color: "#E98074" }}
                href="https://github.com/deScamuS/jscript_calc"
              >
                code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card
          shadow={6}
          style={{ minWidth: "450", margin: "auto", backgroundColor: "e2d1c3" }}
        >
          <a href="https://descamus.github.io/metronome/">
            <CardTitle
              style={{
                color: "#fff",
                backgroundImage:
                  "linear-gradient(60deg, #29323c 4%, #485563 100%)"
              }}
            >
              <img src={image2} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.3rem" }}>Metronome</CardText>
          <CardActions border>
            <Button onClick={this.handleClick} colored>
              <a
                style={{ color: "#E98074" }}
                href="https://github.com/descamus/metronome/"
              >
                code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card
          shadow={6}
          style={{ minWidth: "450", margin: "auto", backgroundColor: "e2d1c3" }}
        >
          <a href="https://descamus.github.io/canvas/">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(60deg, #29323c 4%, #485563 100%)"
              }}
            >
              <img src={image3} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>Quick Reference</CardText>
          <CardActions border>
            <Button colored>
              <a
                style={{ color: "#E98074 " }}
                href="https://github.com/deScamuS/canvas">
                >
                  code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: "#eae7dc" }}>
        <NavBar />
        <div
          className="project-tabs"
          style={{ marginTop: "15vhm", position: "center" }}
        >
          <Tabs activeTab={this.state.activeTab} onChange={this.handleChange}>
            <Tab>React</Tab>
            <Tab>Javascript</Tab>
            <Tab>React</Tab>
            <Tab>Javascript</Tab>
          </Tabs>
          <Grid className="projects">
            <Cell col={12}>
              <div className="content">{this.toggleContent()}</div>
            </Cell>
          </Grid>
          <div>
            <Fade right big>
              <h1 style={textStyle}>
                <center>Projects</center>
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
              </h1>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
const textStyle = {
  color: "#E98074",
  fontFamily: "Lato, sans serif",
  fontWeight: "300",
  paddingTop: "60px"
};
