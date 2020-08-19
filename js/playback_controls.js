"use strict";

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props)
    this.ctrlBtnUp = this.ctrlBtnUp.bind(this);
  }

  ctrlBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
  }

  recordBtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-btn ctrl-btn-on";
    }
    else if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === true) {
      return "ctrl-btn ctrl-btn-off";
    }
    else if(this.props.power === "on" && this.props.nowRecording === true) {
      return "ctrl-btn ctrl-btn-active";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  recordGlowStyle() {
    if(this.props.power === "on" && this.props.nowPlaying === false) {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  stopBtnStyle() {
    if(this.props.power === "on") {
      return "ctrl-btn ctrl-btn-on";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  stopGlowStyle() {
    if(this.props.power === "on") {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  playBtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-btn ctrl-btn-on";
    }
    else if(this.props.power === "on" && this.props.nowRecording === true && this.props.nowPlaying === true) {
      return "ctrl-btn ctrl-btn-off";
    }
    else if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === true) {
      return "ctrl-btn ctrl-btn-active";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  playGlowStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false) {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  undoBtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-btn ctrl-btn-on";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  undoGlowStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  render() {
    // let btnPowered = {};
    // let btnGlowPowered = {};
    //
    // if(this.props.power === "off") {
    //   btnPowered = {
    //     backgroundImage: "none",
    //     backgroundColor: "#898F90"
    //   }
    //   btnGlowPowered = {
    //     boxShadow: "none",
    //     backgroundColor: "rgba(255,255,255, 0.0)"
    //   }
    // }

    return (
      <div id="playback-controls">
        <div id="record-button" className={this.recordBtnStyle()}
        onMouseDown={this.props.startRecording} onMouseUp={this.ctrlBtnUp}>
          <div className={this.recordGlowStyle()}>
            <i className="fas fa-circle"></i>
          </div>
        </div>

        <div id="stop-button" className={this.stopBtnStyle()}
        onMouseDown={this.props.stop} onMouseUp={this.ctrlBtnUp}>
          <div className={this.stopGlowStyle()}>
            <i className="fas fa-stop"></i>
          </div>
        </div>

        <div id="play-button" className={this.playBtnStyle()}
        onMouseDown={this.props.startPlayback} onMouseUp={this.ctrlBtnUp}>
          <div className={this.playGlowStyle()}>
            <i className="fas fa-play"></i>
          </div>
        </div>

        <div id="undo-button" className={this.undoBtnStyle()}>
          <div className={this.undoGlowStyle()}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    );
  }
}
