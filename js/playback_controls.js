"use strict";

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
