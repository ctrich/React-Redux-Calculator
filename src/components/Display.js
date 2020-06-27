import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  showDisplay = () => {
    const { operator, firstNum, secondNum } = this.props.input;
    if (operator === null) {
      return <span id="display">{firstNum}</span>;
    } else if (operator !== null && secondNum === 0) {
      return <span id="display">{operator}</span>;
    } else {
      return <span id="display">{secondNum}</span>;
    }
  };

  render() {
    const display = this.showDisplay();

    return (
      <div id="display-container">
        <span id="display">{display}</span>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    input: state.input
  };
};

export default connect(mapStateToProps)(Display);
