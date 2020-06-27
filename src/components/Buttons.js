import React from "react";
import { connect } from "react-redux";
import {
  selectNumber,
  selectClear,
  selectDecimal,
  selectOperator,
  selectEqual
} from "../actions";

class Buttons extends React.Component {
  onClickGetNum = e => {
    const { value } = e.target;

    this.props.selectNumber(value);
  };

  onClickGetDecimal = e => {
    this.props.selectDecimal();
  };

  onClickClear = () => {
    this.props.selectClear();
  };

  onClickGetOperator = e => {
    const { value } = e.target;
    this.props.selectOperator(value);
  };

  onClickEquals = () => {
    this.props.selectEqual();
  };

  render() {
    return (
      <div className="buttons">
        <button
          value="9"
          onClick={this.onClickGetNum}
          id="nine"
          className="button"
        >
          9
        </button>
        <button
          value="8"
          onClick={this.onClickGetNum}
          id="eight"
          className="button"
        >
          8
        </button>
        <button
          value="7"
          onClick={this.onClickGetNum}
          id="seven"
          className="button"
        >
          7
        </button>
        <button
          value="6"
          onClick={this.onClickGetNum}
          id="six"
          className="button"
        >
          6
        </button>
        <button
          value="5"
          onClick={this.onClickGetNum}
          id="five"
          className="button"
        >
          5
        </button>
        <button
          value="4"
          onClick={this.onClickGetNum}
          id="four"
          className="button"
        >
          4
        </button>
        <button
          value="3"
          onClick={this.onClickGetNum}
          id="three"
          className="button"
        >
          3
        </button>
        <button
          value="2"
          onClick={this.onClickGetNum}
          id="two"
          className="button"
        >
          2
        </button>
        <button
          value="1"
          onClick={this.onClickGetNum}
          id="one"
          className="button"
        >
          1
        </button>
        <button
          value="0"
          onClick={this.onClickGetNum}
          id="zero"
          className="button"
        >
          0
        </button>
        <button
          onClick={this.onClickGetDecimal}
          value="."
          id="decimal"
          className="button"
        >
          .
        </button>
        <button onClick={this.onClickEquals} id="equals" className="button">
          =
        </button>
        <button
          onClick={this.onClickGetOperator}
          value="+"
          id="add"
          className="button"
        >
          +
        </button>
        <button
          onClick={this.onClickGetOperator}
          value="-"
          id="subtract"
          className="button"
        >
          -
        </button>
        <button
          onClick={this.onClickGetOperator}
          value="/"
          id="divide"
          className="button"
        >
          /
        </button>
        <button
          onClick={this.onClickGetOperator}
          value="*"
          id="multiply"
          className="button"
        >
          *
        </button>
        <button
          value="clear"
          onClick={this.onClickClear}
          id="clear"
          className="button"
        >
          C
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { selectNumber, selectClear, selectDecimal, selectOperator, selectEqual }
)(Buttons);

//3 + 5 * 6 - 2 / 4
