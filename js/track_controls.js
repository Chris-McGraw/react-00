"use strict";

class TrackControls extends React.Component {
  constructor(props) {
    super(props)
  }

  track1BtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false && this.props.currentTrack === "track1") {
      return "ctrl-btn ctrl-btn-active";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  track1GlowStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false && this.props.currentTrack === "track1") {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  trackBtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-btn ctrl-btn-on";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  trackGlowStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  render() {
    return (
      <div id="track-controls">
        <div className={this.track1BtnStyle()}>
          <div className={this.track1GlowStyle()}>
            <p>I</p>
          </div>
        </div>

        <div className={this.trackBtnStyle()}>
          <div className={this.trackGlowStyle()}>
            <p>II</p>
          </div>
        </div>

        <div className={this.trackBtnStyle()}>
          <div className={this.trackGlowStyle()}>
            <p>III</p>
          </div>
        </div>

        <div id="delete-button" className={this.trackBtnStyle()}>
          <div className={this.trackGlowStyle()}>
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    );
  }
}
