import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: '0',
    };
  }

  handleClick = () => {

  }

  render() {
    const { currentValue } = this.state;

    return (
      <div id="calculator">
        <Screen id="display" currentValue={currentValue} />
        <Button id="clear" name="AC" handleClick={this.handleClick} />
        <Button id="delete" name="+/-" handleClick={this.handleClick} />
        <Button id="delete" name="%" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="multiply" name="x" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Calculator;
