import React, { Component } from 'react';
import './index.less';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <span className="Header__title">Kennybll Media</span>
        <div className="Header__right">
          <button className="Header__right__contact" onClick={() => window.location.hash = "contact"}>
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default Header;