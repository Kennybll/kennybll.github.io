import React, { Component } from 'react';
import './index.less';

class PortfolioItem extends Component {
  render() {
    return (
      <div className="PortfolioItem">
        <div className="PortfolioItem__title">{this.props.title}</div>
        <a className="PortfolioItem__link" href={this.props.href}>{this.props.link}</a>
      </div>
    );
  }
}

export default PortfolioItem;