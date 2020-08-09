'use strict';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on"
    };
    this.togglePower = this.togglePower.bind(this);
  }

  togglePower() {
    if(this.state.power === "on") {
      this.setState({
        power: "off"
      });
    }
    else {
      this.setState({
        power: "on"
      });
    }

    console.log(this.state.power);
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <PadContainer power={this.state.power} />
        </div>
      </div>
    );
  }
}

class PowerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let switchSlide = {
      transform: "translateY(0%)";
    }
    if(this.props.power === "off") {
      switchSlide = {
        transform: "translateY(100%)";
      }
    }

    return (
      <div>
        <div id="power-container">
          <div id="slider-path"></div>

          <div id="power-switch" style={switchSlide} onClick={this.props.togglePower}>
            <div id="power-switch-indicator"></div>
          </div>
        </div>
      </div>
    );
  }
}

class PadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.padPress = this.padPress.bind(this);
  }

  padPress() {
    console.log("local match?");
    console.log(this.props.power);
  }

  render() {
    return (
      <div>
        <div id="pad-container">
          <div className="drum-pad" id="pad-q" onClick={this.padPress}></div>
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
