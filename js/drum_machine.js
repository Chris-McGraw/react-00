"use strict";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on",
      currentKit: "kit1",
      currentPad: "",
      nowRecording: false,
      playbackArr: [{key: "Q", time: 496}, {key: "Q", time: 1057}, {key: "Q", time: 1632}, {key: "Q", time: 2400}, {key: "W", time: 2783}],
      nowPlaying: false
    };
    this.togglePower = this.togglePower.bind(this);
    this.setCurrentKit = this.setCurrentKit.bind(this);
    this.setCurrentPad = this.setCurrentPad.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.recordingTimeout = null;
    this.stop = this.stop.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
    this.playbackTimeouts = null;
  }

  togglePower() {
    if(this.state.power === "on") {
      this.setState({
        power: "off",
        currentKit: "kit1",
        nowRecording: false,
        nowPlaying: false
      });

      if(this.state.nowRecording === true) {
        clearTimeout(this.recordingTimeout);

        console.log("RECORDING STOPPED");
      }
      if(this.state.nowPlaying === true) {
        this.playbackTimeouts.forEach(function(i) {
          clearTimeout(i);
        }.bind(this));

        console.log("PLAYBACK STOPPED");
      }
    }
    else {
      this.setState({
        power: "on"
      });
    }
  }

  setCurrentKit(event) {
    if(this.state.power === "on") {
      if(event.currentTarget.id === "kit-btn-1") {
        this.setState({
          currentKit: "kit1"
        });
      }
      else if(event.currentTarget.id === "kit-btn-2") {
        this.setState({
          currentKit: "kit2"
        });
      }
    }
  }

  setCurrentPad(audioID) {
    if(this.state.power === "on") {
      this.setState({
        currentPad: audioID
      });
    }
  }

  startRecording() {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        nowRecording: true
      });

      console.log("RECORDING STARTED");

      this.recordingTimeout = setTimeout(function() {
        this.setState({
          nowRecording: false
        });

        console.log("RECORDING FINISHED");
      }.bind(this), 10000);
    }
  }

  stop() {
    if(this.state.power === "on" && this.state.nowRecording === true) {
      clearTimeout(this.recordingTimeout);

      this.setState({
        nowRecording: false
      });

      console.log("RECORDING STOPPED");
    }

    if(this.state.power === "on" && this.state.nowPlaying === true) {
      this.playbackTimeouts.forEach(function(i) {
        clearTimeout(i);
      }.bind(this));

      this.setState({
        nowPlaying: false
      });

      console.log("PLAYBACK STOPPED");
    }
  }

  startPlayback() {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        nowPlaying: true
      });

      console.log(this.state.playbackArr);

      this.playbackTimeouts = [];

      console.log("PLAYBACK STARTED");

      this.state.playbackArr.forEach( function(i) {
        this.playbackTimeouts.push( setTimeout(function() {
          this.setCurrentPad(i.key);

          let audio = document.getElementById(i.key);

          audio.src = sampleKits[this.state.currentKit][i.key].src;
          audio.parentElement.style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
          audio.pause();
          audio.currentTime = 0;
          audio.play();
        }.bind(this), i.time) );
      }.bind(this) );
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <DisplayLeft power={this.state.power} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} />
          <KitChoiceContainer power={this.state.power} setCurrentKit={this.setCurrentKit} />
          <DisplayRight power={this.state.power} currentKit={this.state.currentKit} currentPad={this.state.currentPad} />
          <PlaybackControls power={this.state.power} startRecording={this.startRecording} stop={this.stop} startPlayback={this.startPlayback} />
          <PadContainer power={this.state.power} currentKit={this.state.currentKit} setCurrentPad={this.setCurrentPad} />
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
    if(this.props.power === "on") {
      var kitBtns = document.getElementsByClassName("kit-choice-btn");

      for(let n = 0; n < kitBtns.length; n++) {
        kitBtns[n].style.backgroundColor = "#c0c7ca";
        kitBtns[n].style.backgroundImage = "radial-gradient(#b6b4be, #c0c7ca)";
      }

      event.currentTarget.style.backgroundColor = "#dad9de";
      event.currentTarget.style.backgroundImage = "radial-gradient(#E9E8EB, #dad9de)";
      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";

      this.props.setCurrentKit(event);
    }
  }

  kitBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
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
          <div className="kit-choice-btn" id="kit-btn-1" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>1</p>
          </div>

          <div className="kit-choice-btn" id="kit-btn-2" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp}>
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

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props)
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
      <div id="playback-controls">
        <div className="control-btn" id="record-button" style={btnPowered} onMouseDown={this.props.startRecording}>
          <div className="control-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-circle"></i>
          </div>
        </div>

        <div className="control-btn" id="stop-button" style={btnPowered} onMouseDown={this.props.stop}>
          <div className="control-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-stop"></i>
          </div>
        </div>

        <div className="control-btn" id="play-button" style={btnPowered} onMouseDown={this.props.startPlayback}>
          <div className="control-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-play"></i>
          </div>
        </div>

        <div className="control-btn" id="undo-button" style={btnPowered}>
          <div className="control-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-undo"></i>
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

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
