import React, { Component } from 'react';
import './index.less';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <span className="Splash__sub_one">Building sites</span>
        <span className="Splash__sub_two">that build you</span>
        <button className="Splash__cta" onClick={() => window.location.hash = "contact"}>
          Get Started
        </button>
      </div>
    );
  }
}

export default Splash;