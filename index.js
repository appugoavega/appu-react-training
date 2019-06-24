import React, { Component } from 'react';
import { render } from 'react-dom';
import GitUser from './Component/gitusers';
import './style.css';

class App extends Component {
  render() {
    return (
     <GitUser/>
    );
  }
}

render(<App />, document.getElementById('root'));
