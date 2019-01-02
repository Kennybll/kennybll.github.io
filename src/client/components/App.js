import React, { Component } from 'react';
import Header from './Header';
import Splash from './Splash';
import Portfolio from './Portfolio';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Splash />
                <Portfolio />
                <Contact />
            </div>
        );
    }
}

export default App;