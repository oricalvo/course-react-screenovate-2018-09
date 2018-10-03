import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <button>Dec</button>
        <span>0</span>
        <button>Inc</button>
      </div>
    );
  }
}

// export default Counter;
