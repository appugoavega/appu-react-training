import React, { Component } from 'react';
import { render } from 'react-dom';
import GitUser from './Component/gitusers';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
      <h2>Online Git users list:</h2>
        <GitUser/>
     </div>
    );
  }
}

render(<App />, document.getElementById('root'));
