"use strict";

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props)
    this.ctrlBtnDown = this.ctrlBtnDown.bind(this);
    this.ctrlBtnUp = this.ctrlBtnUp.bind(this);
  }

  ctrlBtnDown(event) {
    if(this.props.power === "on") {
      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
    }
  }

  ctrlBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0)";
  }

  styleTest() {
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

  glowStyleTest() {
    if(this.props.power === "on" && this.props.nowPlaying === false) {
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
        <div id="record-button" className={this.styleTest()}
        onMouseDown={(event) => {
          this.ctrlBtnDown(event);
          this.props.startRecording();
        }}
        onMouseUp={(event) => {
          this.ctrlBtnUp(event);
        }}>
          <div className={this.glowStyleTest()}>
            <i className="fas fa-circle"></i>
          </div>
        </div>

        <div className="ctrl-btn" id="stop-button" style={btnPowered} onMouseDown={this.props.stop}>
          <div className="ctrl-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-stop"></i>
          </div>
        </div>

        <div className="ctrl-btn" id="play-button" style={btnPowered} onMouseDown={this.props.startPlayback}>
          <div className="ctrl-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-play"></i>
          </div>
        </div>

        <div className="ctrl-btn" id="undo-button" style={btnPowered}>
          <div className="ctrl-btn-glow" style={btnGlowPowered}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    );
  }
}
