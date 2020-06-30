import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  showDisplay = () => {
    const { operator, firstNum, secondNum } = this.props.input;
    return (
      (!operator && <span id="display">{firstNum}</span>) ||
      (operator && secondNum === 0 && <span id="display">{operator}</span>) || 
      (<span id="display">{secondNum}</span>)
    );
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
