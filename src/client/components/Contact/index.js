import React, { Component } from 'react';
import './index.less';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="Contact">
        <h1>Contact</h1>
        <a href='sms://+15172252556'>Cell Phone</a>
        <hr />
        <a href='mailto:kennybll@outlook.com'>Email</a>
        <hr />
        <a href='https://discordapp.com'>kennybll#3044</a>
        <hr />
        <a href='https://telegram.org/'>kennybll</a>
        <hr />
        <a href='https://whaleshares.io/@kennybll'>@kennybll</a>
      </div>
    );
  }
}

export default Contact;