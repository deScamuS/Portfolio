import React, { Component } from 'react';
import './App.css'
import Topnav from './Topnav/Topnav';
import Sidedrawer from './Sidedrawer/Sidedrawer';
import Backdrop from './Backdrop/Backdrop';

export default class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{height: '100%'}}>
        <Topnav drawerClickHandler={this.drawerToggleClickHandler} />
        <Sidedrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main className='Home' style={{marginTop: '64px'}}>
       
    
        <div className="intro">Hello, I'm Michael</div>
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
    );
  }
}
