import React, { Component } from 'react';
import PortfolioItem from './Item';
import json from './portfolio';
import './index.less';

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h1>Portfolio</h1>
        {json.map(item => {
          return <PortfolioItem {...item} />
        })}
      </div>
    );
  }
}

export default Portfolio;