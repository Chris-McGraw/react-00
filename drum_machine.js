'use strict';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on",
      currentKit: "kit-1"
    };
    this.togglePower = this.togglePower.bind(this);
    this.setCurrentKit = this.setCurrentKit.bind(this);
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

  setCurrentKit(event) {
    if(this.state.power === "on") {
      console.log(event.currentTarget.id);

      if(event.currentTarget.id === "kit-btn-1") {
        this.setState({
          currentKit: "kit-1"
        });
      }
      else if(event.currentTarget.id === "kit-btn-2") {
        this.setState({
          currentKit: "kit-2"
        });
      }

      var btns = document.getElementsByClassName("kit-choice-btn");

      for(let n = 0; n < btns.length; n++) {
        btns[n].style.backgroundColor = "#c0c7ca";
        btns[n].style.backgroundImage = "radial-gradient(#b6b4be, #c0c7ca)";
      }

      document.querySelector("#" + event.currentTarget.id).style.backgroundColor = "#E9E8EB";
      document.querySelector("#" + event.currentTarget.id).style.backgroundImage = "radial-gradient(#E9E8EB, #dad9de)";
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <KitChoiceContainer power={this.state.power} setCurrentKit={this.setCurrentKit} currentKit={this.state.currentKit} />
          <PadContainer power={this.state.power} currentKit={this.state.currentKit} />
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

class KitChoiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.kitBtnDown = this.kitBtnDown.bind(this);
    this.kitBtnUp = this.kitBtnUp.bind(this);
  }

  kitBtnDown(event) {
    event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
  }

  kitBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0), inset none";
  }

  render() {
    let btnPowered = {};
    let btnGlowPowered = {};

    if(this.props.power === "off") {
      btnPowered = {
        backgroundImage: "none",
        backgroundColor: "#898F90"
      }
      btnGlowPowered = {
        boxShadow: "none",
        backgroundColor: "rgba(255,255,255, 0.0)"
      }
    }

    return (
      <div>
        <div id="kit-choice-container">
          <div className="kit-choice-btn" id="kit-btn-1"
          style={btnPowered} onClick={this.props.setCurrentKit}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>1</p>
          </div>

          <div className="kit-choice-btn" id="kit-btn-2"
          style={btnPowered} onClick={this.props.setCurrentKit}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>2</p>
          </div>

          <div className="kit-choice-btn" id="kit-btn-3" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>3</p>
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
    this.padLift = this.padLift.bind(this);
  }

  padPress(event) {
    // console.log(this.props.power);

    if(this.props.power === "on") {
      if(this.props.currentKit === "kit-1") {
        event.currentTarget.children[0].src = "audio/808s/loaded.wav";
      }
      else if(this.props.currentKit === "kit-2") {
        event.currentTarget.children[0].src = "audio/808s/chirp.wav";
      }

      event.currentTarget.style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";

      let audio = event.currentTarget.children[0];

      audio.pause();
      audio.currentTime = 0
      audio.play();
    }
  }

  padLift(event) {
    event.currentTarget.style.boxShadow = "8px 8px 8px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
  }

  handleKeyPress(event) {
    if(event.keyCode === 13) {
      this.padPress();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    let padPowered = {};
    let padGlowPowered = {};

    if(this.props.power === "off") {
      padPowered = {
        backgroundImage: "none",
        backgroundColor: "#898F90"
      }
      padGlowPowered = {
        boxShadow: "none",
        backgroundColor: "rgba(255,255,255, 0.0)"
      }
    }

    return (
      <div>
        <div id="pad-container">
          <div className="drum-pad" id="pad-q" style={padPowered} onMouseDown={this.padPress} onMouseUp={this.padLift}>
            <audio preload="auto" src="audio/808s/loaded.wav" className="clip" id="Q"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Q</p>
          </div>

          <div className="drum-pad" id="pad-w" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>W</p>
          </div>

          <div className="drum-pad" id="pad-e" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>E</p>
          </div>

          <div className="drum-pad" id="pad-a" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>A</p>
          </div>

          <div className="drum-pad" id="pad-s" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>S</p>
          </div>

          <div className="drum-pad" id="pad-d" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>D</p>
          </div>

          <div className="drum-pad" id="pad-z" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Z</p>
          </div>

          <div className="drum-pad" id="pad-x" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>X</p>
          </div>

          <div className="drum-pad" id="pad-c" style={padPowered} onClick={this.padPress}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>C</p>
          </div>
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
