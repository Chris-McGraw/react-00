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
      transform: "translateY(0%)"
    }
    if(this.props.power === "off") {
      switchSlide = {
        transform: "translateY(100%)"
      }
    }

    return (
      <div>
        <div id="power-container">
          <div id="power-switch" style={switchSlide} onClick={this.props.togglePower}>
            <div id="power-switch-indicator"></div>
          </div>

          <div id="slider-path"></div>

          <div id="power-on-line">
            <p>ON</p>
          </div>

          <div id="power-off-line">
            <p>OFF</p>
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
    console.log(this.props.power);
  }

  render() {
    let padPowered = {}
    if(this.props.power === "off") {
      padPowered = {
        backgroundImage: "none",
        backgroundColor: "#898F90"
      }
    }

    return (
      <div>
        <div id="pad-container">
          <div className="drum-pad" id="pad-q" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-w" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-e" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-a" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-s" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-d" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-z" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-x" style={padPowered} onClick={this.padPress}></div>
          <div className="drum-pad" id="pad-c" style={padPowered} onClick={this.padPress}></div>
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
