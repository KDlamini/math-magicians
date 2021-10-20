/* eslint-disable react/prop-types, react/prefer-stateless-function */
import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { id, name } = this.props;

    return (
      <button id={id} type="button">{name}</button>
    );
  }
}

export default Button;
