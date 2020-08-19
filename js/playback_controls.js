"use strict";

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props)
    this.ctrlBtnDown = this.ctrlBtnDown.bind(this);
    this.ctrlBtnUp = this.ctrlBtnUp.bind(this);
  }

  ctrlBtnDown(event) {
    if(this.props.power === "on") {
      var ctrlBtns = document.getElementsByClassName("control-btn");

      for(let n = 0; n < ctrlBtns.length; n++) {
        if(ctrlBtns[n].id === "record-button" || ctrlBtns[n].id === "stop-button") {
          ctrlBtns[n].style.backgroundImage = "radial-gradient(#b6b4be, #c0c7ca)";
          ctrlBtns[n].style.backgroundColor = "#c0c7ca";
        }
        else {
          ctrlBtns[n].style.backgroundImage = "none";
          ctrlBtns[n].style.backgroundColor = "#898f90";
        }
      }

      event.currentTarget.style.backgroundImage = "radial-gradient(#E9E8EB, #dad9de)";
      event.currentTarget.style.backgroundColor = "#dad9de";
      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
    }
  }

  ctrlBtnUp(event) {
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
      <div id="playback-controls">
        <div className="control-btn" id="record-button" style={btnPowered} onMouseDown={(event) => {
          this.ctrlBtnDown(event);
          this.props.startRecording();
        }} onMouseUp={(event) => {
          this.ctrlBtnUp(event);
        }}>
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
