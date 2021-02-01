"use strict";

class TrackControls extends React.Component {
  constructor(props) {
    super(props);
    this.ctrlBtnUp = this.ctrlBtnUp.bind(this);
  }

  ctrlBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
  }

  trackBtnStyle(trackbtn) {
    if(this.props.power === "on") {
      if(trackbtn === "track-btn-1" && this.props.currentTrack === "track1") {
        return "ctrl-btn ctrl-btn-active";
      }
      else if(trackbtn === "track-btn-2" && this.props.currentTrack === "track2") {
        return "ctrl-btn ctrl-btn-active";
      }
      else if(trackbtn === "track-btn-3" && this.props.currentTrack === "track3") {
        return "ctrl-btn ctrl-btn-active";
      }
      else if(this.props.nowRecording === false && this.props.nowPlaying === false) {
        return "ctrl-btn ctrl-btn-on";
      }
      else {
        return "ctrl-btn ctrl-btn-off";
      }
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  trackGlowStyle(trackbtn) {
    if(this.props.power === "on") {
      if(trackbtn === "track-btn-1" && this.props.currentTrack === "track1") {
        return "ctrl-glow ctrl-glow-on";
      }
      else if(trackbtn === "track-btn-2" && this.props.currentTrack === "track2") {
        return "ctrl-glow ctrl-glow-on";
      }
      else if(trackbtn === "track-btn-3" && this.props.currentTrack === "track3") {
        return "ctrl-glow ctrl-glow-on";
      }
      else if(this.props.nowRecording === false && this.props.nowPlaying === false) {
        return "ctrl-glow ctrl-glow-on";
      }
      else {
        return "ctrl-glow ctrl-glow-off"
      }
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  render() {
    return (
      <div id="track-controls-section">
        <div id="track-controls">
          <div className={this.trackBtnStyle("track-btn-1")}
          onTouchStart={(event) => this.props.setCurrentTrack("track1", event)} onTouchEnd={this.ctrlBtnUp}
          onMouseDown={(event) => this.props.setCurrentTrack("track1", event)} onMouseUp={this.ctrlBtnUp}
          onMouseLeave={this.ctrlBtnUp}>
            <div className={this.trackGlowStyle("track-btn-1")}>
              <p>I</p>
            </div>
          </div>

          <div className={this.trackBtnStyle("track-btn-2")}
          onTouchStart={(event) => this.props.setCurrentTrack("track2", event)} onTouchEnd={this.ctrlBtnUp}
          onMouseDown={(event) => this.props.setCurrentTrack("track2", event)} onMouseUp={this.ctrlBtnUp}
          onMouseLeave={this.ctrlBtnUp}>
            <div className={this.trackGlowStyle("track-btn-2")}>
              <p>II</p>
            </div>
          </div>

          <div className={this.trackBtnStyle("track-btn-3")}
          onTouchStart={(event) => this.props.setCurrentTrack("track3", event)} onTouchEnd={this.ctrlBtnUp}
          onMouseDown={(event) => this.props.setCurrentTrack("track3", event)} onMouseUp={this.ctrlBtnUp}
          onMouseLeave={this.ctrlBtnUp}>
            <div className={this.trackGlowStyle("track-btn-3")}>
              <p>III</p>
            </div>
          </div>

          <div id="delete-button" className={this.trackBtnStyle()}
          onTouchStart={this.props.deleteRecording} onTouchEnd={this.ctrlBtnUp}
          onMouseDown={this.props.deleteRecording} onMouseUp={this.ctrlBtnUp}
          onMouseLeave={this.ctrlBtnUp}>
            <div className={this.trackGlowStyle()}>
              <i className="fas fa-trash"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
