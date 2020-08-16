import React from 'react';
import '../assets/styles/containers/loginPage.css';
import Line from './line';

const divider = () => (
  <div id="or">
    <Line className="Line" />
    <div id="or_">
      <span>or</span>
    </div>
    <Line className="Line_" />
  </div>
);

export default divider;