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
      console.log(this.state.power);

      this.setState({
        power: "off"
      });

      setTimeout(function() {
        console.log(this.state.power);
      }, 50);
    }
    else {
      this.setState({
        power: "on"
      });

      // console.log(this.state.power);
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer togglePower={this.togglePower} />
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
    return (
      <div>
        <div id="power-container">
          <div id="slider-path"></div>

          <div id="power-switch" onClick={this.props.togglePower}>
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
