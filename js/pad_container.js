"use strict";

class PadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.padPress = this.padPress.bind(this);
    this.padLift = this.padLift.bind(this);
  }

  padPress(event) {
    if(this.props.power === "on") {
      let audioID = "";

      // PAD MOUSE DOWN
      if(event.key === undefined) {
        audioID = event.currentTarget.children[0].id;
      }
      // PAD KEY DOWN
      else if(event.currentTarget.id === undefined) {
        audioID = event.key.toUpperCase();
      }

      this.props.setCurrentPad(audioID);
      
      if(this.props.nowRecording === true) {
        this.props.recordNote(audioID);
      }

      let audio = document.getElementById(audioID);

      audio.src = sampleKits[this.props.currentKit][audioID].src;
      audio.parentElement.style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    }
  }

  padLift(event) {
    let audioID = "";

    // PAD MOUSE UP
    if(event.key === undefined) {
      audioID = event.currentTarget.children[0].id;
    }
    // PAD KEY UP
    else if(event.currentTarget.id === undefined) {
      audioID = event.key.toUpperCase();
    }

    // setTimeout(function() {
    //   this.props.setCurrentPad("");
    // }.bind(this), 1000);

    let audio = document.getElementById(audioID);

    audio.parentElement.style.boxShadow = "8px 8px 8px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
  }

  handleKeyPress(event) {
    // KEY PRESS Q
    if(event.keyCode === 81) {
      this.padPress(event);
    }
    // KEY PRESS W
    else if(event.keyCode === 87) {
      this.padPress(event);
    }
  }

  handleKeyLift(event) {
    // KEY PRESS Q
    if(event.keyCode === 81) {
      this.padLift(event);
    }
    // KEY PRESS W
    else if(event.keyCode === 87) {
      this.padLift(event);
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    document.addEventListener("keyup", this.handleKeyLift.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
    document.removeEventListener("keyup", this.handleKeyLift.bind(this));
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
          <div className="drum-pad" id="pad-q" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift}>
            <audio preload="auto" src="audio/808s/loaded.wav" className="clip" id="Q"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Q</p>
          </div>

          <div className="drum-pad" id="pad-w" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift}>
            <audio preload="auto" src="audio/808s/starburst.wav" className="clip" id="W"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>W</p>
          </div>

          <div className="drum-pad" id="pad-e" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>E</p>
          </div>

          <div className="drum-pad" id="pad-a" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>A</p>
          </div>

          <div className="drum-pad" id="pad-s" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>S</p>
          </div>

          <div className="drum-pad" id="pad-d" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>D</p>
          </div>

          <div className="drum-pad" id="pad-z" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Z</p>
          </div>

          <div className="drum-pad" id="pad-x" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>X</p>
          </div>

          <div className="drum-pad" id="pad-c" style={padPowered}>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>C</p>
          </div>
        </div>
      </div>
    );
  }
}
