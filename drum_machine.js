'use strict';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on"
    };
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PadContainer />
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
    console.log(this.state.power);
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
