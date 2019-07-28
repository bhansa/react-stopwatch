import React from "react";
import ReactDOM from "react-dom";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  padding: 15,
  margin: 5,
  width: 200,
  cursor: "pointer"
};

class Stopwatch extends React.Component {
  state = { lapse: 0, running: false };
  handleRunClick = () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.lapse;
        this.timer = setInterval(() => {
          this.setState({ lapse: Date.now() - startTime });
        });
      }
      return { running: !state.running };
    });
  };
  handleClearClick = () => {
    clearInterval(this.timer);
    this.setState({ lapse: 0, running: false });
  };
  render() {
    const { lapse, running } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        <label style={{ fontSize: "5em", display: "block" }}>{lapse}ms</label>
        <button onClick={this.handleRunClick} style={buttonStyles}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleClearClick} style={buttonStyles}>
          Clear
        </button>
      </div>
    );
  }
}

const element = <Stopwatch />;

const rootElement = document.getElementById("root");
ReactDOM.render(element, rootElement);
