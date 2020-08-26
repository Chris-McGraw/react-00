"use strict";

class PadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.padPress = this.padPress.bind(this);
    this.padLift = this.padLift.bind(this);
    this.padLiftTimeout = null;
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

      if(this.padLiftTimeout) {
        clearTimeout(this.padLiftTimeout);
        this.padLiftTimeout = null;
      }

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

    if(this.padLiftTimeout) {
      clearTimeout(this.padLiftTimeout);
      this.padLiftTimeout = null;
    }

    this.padLiftTimeout = setTimeout(function() {
      this.props.setCurrentPad("");
    }.bind(this), 750);

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
    // KEY PRESS E
    else if(event.keyCode === 69) {
      this.padPress(event);
    }
    // KEY PRESS A
    else if(event.keyCode === 65) {
      this.padPress(event);
    }
    // KEY PRESS S
    else if(event.keyCode === 83) {
      this.padPress(event);
    }
    // KEY PRESS D
    else if(event.keyCode === 68) {
      this.padPress(event);
    }
    // KEY PRESS Z
    else if(event.keyCode === 90) {
      this.padPress(event);
    }
    // KEY PRESS X
    else if(event.keyCode === 88) {
      this.padPress(event);
    }
    // KEY PRESS C
    else if(event.keyCode === 67) {
      this.padPress(event);
    }
  }

  handleKeyLift(event) {
    // KEY LIFT Q
    if(event.keyCode === 81) {
      this.padLift(event);
    }
    // KEY LIFT W
    else if(event.keyCode === 87) {
      this.padLift(event);
    }
    // KEY LIFT E
    else if(event.keyCode === 69) {
      this.padLift(event);
    }
    // KEY LIFT A
    else if(event.keyCode === 65) {
      this.padLift(event);
    }
    // KEY LIFT S
    else if(event.keyCode === 83) {
      this.padLift(event);
    }
    // KEY LIFT D
    else if(event.keyCode === 68) {
      this.padLift(event);
    }
    // KEY LIFT Z
    else if(event.keyCode === 90) {
      this.padLift(event);
    }
    // KEY LIFT X
    else if(event.keyCode === 88) {
      this.padLift(event);
    }
    // KEY LIFT C
    else if(event.keyCode === 67) {
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
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/808s/loaded.mp3" className="clip" id="Q"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Q</p>
          </div>

          <div className="drum-pad" id="pad-w" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/808s/starburst.mp3" className="clip" id="W"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>W</p>
          </div>

          <div className="drum-pad" id="pad-e" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/808s/lettuce.mp3" className="clip" id="E"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>E</p>
          </div>

          <div className="drum-pad" id="pad-a" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/kicks/kick5.mp3" className="clip" id="A"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>A</p>
          </div>

          <div className="drum-pad" id="pad-s" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/snares/dippy.mp3" className="clip" id="S"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>S</p>
          </div>

          <div className="drum-pad" id="pad-d" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/snares/doo.mp3" className="clip" id="D"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>D</p>
          </div>

          <div className="drum-pad" id="pad-z" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/hats/hihat8.mp3" className="clip" id="Z"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Z</p>
          </div>

          <div className="drum-pad" id="pad-x" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/hats/openhat1.mp3" className="clip" id="X"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>X</p>
          </div>

          <div className="drum-pad" id="pad-c" style={padPowered}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            <audio preload="auto" src="audio/claps/clap1.mp3" className="clip" id="C"></audio>
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>C</p>
          </div>
        </div>
      </div>
    );
  }
}
