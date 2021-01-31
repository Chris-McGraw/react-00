"use strict";

class PadContainer extends React.Component {
  constructor(props) {
    super(props);
    this.padPress = this.padPress.bind(this);
    this.padLift = this.padLift.bind(this);
    this.padLiftTimeout = null;
    this.playSample = this.playSample.bind(this);
  }

  playSample(audioContext, audioBuffer, time) {
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    sampleSource.connect(audioContext.destination)
    sampleSource.start(time);
    return sampleSource;
  }

  padPress(event) {
    if(this.props.power === "on") {
      let audioID = "";

      // PAD MOUSE DOWN
      if(event.key === undefined) {
        // audioID = event.currentTarget.children[0].id;

        // console.log(event.currentTarget.children[2].innerHTML);
        audioID = event.currentTarget.children[1].innerHTML;
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

      document.getElementById("pad-" + audioID.toLowerCase()).style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";

      // let audio = document.getElementById(audioID).cloneNode(true);

      // audio.src = sampleKits[this.props.currentKit][audioID].src;
      // audio.pause();
      // audio.currentTime = 0;
      // audio.volume = this.props.volume;
      // audio.play();




      // WEB AUDIO PAD TEST
      switch(audioID) {
        case "Q":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[0], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[0], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[0], 0);
          }
          break;
        case "W":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[1], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[1], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[1], 0);
          }
          break;
        case "E":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[2], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[2], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[2], 0);
          }
          break;
        case "A":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[3], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[3], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[3], 0);
          }
          break;
        case "S":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[4], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[4], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[4], 0);
          }
          break;
        case "D":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[5], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[5], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[5], 0);
          }
          break;
        case "Z":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[6], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[6], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[6], 0);
          }
          break;
        case "X":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[7], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[7], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[7], 0);
          }
          break;
        case "C":
          if(this.props.currentKit === "kit1") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit1[8], 0);
          }
          else if(this.props.currentKit === "kit2") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit2[8], 0);
          }
          else if(this.props.currentKit === "kit3") {
            this.playSample(this.props.audioCtx, this.props.audioSampleKit3[8], 0);
          }
          break;
        default:
          break;
      }

    }
  }

  padLift(event) {
    let audioID = "";

    // PAD MOUSE UP
    if(event.key === undefined) {
      audioID = event.currentTarget.children[1].innerHTML;
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

    document.getElementById("pad-" + audioID.toLowerCase()).style.boxShadow = "8px 8px 8px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
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

  drumPadStyle(key) {
    if(this.props.power === "on") {
      return "drum-pad " + sampleKits[this.props.currentKit][key].padStyle;
    }
    else {
      return "drum-pad drum-pad-off"
    }
  }

  render() {
    let padGlowPowered = {};

    if(this.props.power === "off") {
      padGlowPowered = {
        boxShadow: "none",
        backgroundColor: "rgba(255,255,255, 0.0)"
      }
    }

    return (
      <div id="pad-section">
        <div id="pad-container">
          <div className={this.drumPadStyle("Q")} id="pad-q"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/808s/loaded.mp3" className="clip" id="Q"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Q</p>
          </div>

          <div className={this.drumPadStyle("W")} id="pad-w"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/808s/starburst.mp3" className="clip" id="W"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>W</p>
          </div>

          <div className={this.drumPadStyle("E")} id="pad-e"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/808s/lettuce.mp3" className="clip" id="E"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>E</p>
          </div>

          <div className={this.drumPadStyle("A")} id="pad-a"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/kicks/kick5.mp3" className="clip" id="A"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>A</p>
          </div>

          <div className={this.drumPadStyle("S")} id="pad-s"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/snares/dippy.mp3" className="clip" id="S"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>S</p>
          </div>

          <div className={this.drumPadStyle("D")} id="pad-d"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/snares/doo.mp3" className="clip" id="D"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>D</p>
          </div>

          <div className={this.drumPadStyle("Z")} id="pad-z"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/hats/hihat8.mp3" className="clip" id="Z"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>Z</p>
          </div>

          <div className={this.drumPadStyle("X")} id="pad-x"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/hats/openhat1.mp3" className="clip" id="X"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>X</p>
          </div>

          <div className={this.drumPadStyle("C")} id="pad-c"
          onTouchStart={this.padPress} onTouchEnd={this.padLift}
          onMouseDown={this.padPress} onMouseUp={this.padLift} onMouseLeave={this.padLift}>
            {/* <audio preload="auto" src="audio/claps/clap1.mp3" className="clip" id="C"></audio> */}
            <div className="pad-glow" style={padGlowPowered}></div>
            <p>C</p>
          </div>
        </div>
      </div>
    );
  }
}
