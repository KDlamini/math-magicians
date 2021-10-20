/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class Screen extends Component {
  render() {
    const { id, currentValue } = this.props;

    return (
      <div id={id}>{currentValue}</div>
    );
  }
}

export default Screen;
