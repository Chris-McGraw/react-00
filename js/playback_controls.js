"use strict";

class PlaybackControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      undoBtnDown: false
    };
    this.undoBtnPress = this.undoBtnPress.bind(this);
    this.undoBtnLift = this.undoBtnLift.bind(this);
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

  undoBtnPress() {
    if(this.props.power === "on" && this.props.nowRecording === false
    && this.props.nowPlaying === false && this.props.playbackArr.length > 0) {
      if( JSON.stringify(this.props.playbackArr) !== JSON.stringify(this.props.playbackArrUndone) ) {
        this.setState({
          undoBtnDown: true
        });

        this.props.undo();
      }
    }
  }

  undoBtnLift() {
    if(this.props.power === "on" && this.props.nowRecording === false
    && this.props.nowPlaying === false) {
      this.setState({
        undoBtnDown: false
      });
    }
  }

  undoBtnStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      if(JSON.stringify(this.props.playbackArr) !== JSON.stringify(this.props.playbackArrUndone)) {
        if(this.state.undoBtnDown === true) {
          return "ctrl-btn ctrl-btn-pressed ctrl-btn-active";
        }
        else {
          return "ctrl-btn ctrl-btn-on";
        }
      }
      else {
        if(this.state.undoBtnDown === true) {
          return "ctrl-btn ctrl-btn-pressed ctrl-btn-active";
        }
        else {
          return "ctrl-btn ctrl-btn-off";
        }
      }
    }
    else {
      return "ctrl-btn ctrl-btn-off";
    }
  }

  undoGlowStyle() {
    if(this.props.power === "on" && this.props.nowRecording === false && this.props.nowPlaying === false) {
      if(JSON.stringify(this.props.playbackArr) !== JSON.stringify(this.props.playbackArrUndone)) {
        return "ctrl-glow ctrl-glow-on";
      }
      else {
        if(this.state.undoBtnDown === true) {
          return "ctrl-glow ctrl-glow-on";
        }
        else {
          return "ctrl-glow ctrl-glow-off";
        }
      }
    }
    else {
      return "ctrl-glow ctrl-glow-off";
    }
  }

  render() {
    return (
      <div id="playback-controls">
        <div id="record-button" className={this.recordBtnStyle()}
        onMouseDown={this.props.startRecording} onMouseUp={this.ctrlBtnUp} onMouseLeave={this.ctrlBtnUp}>
          <div className={this.recordGlowStyle()}>
            <i className="fas fa-circle"></i>
          </div>
        </div>

        <div id="stop-button" className={this.stopBtnStyle()}
        onMouseDown={this.props.stop} onMouseUp={this.ctrlBtnUp} onMouseLeave={this.ctrlBtnUp}>
          <div className={this.stopGlowStyle()}>
            <i className="fas fa-stop"></i>
          </div>
        </div>

        <div id="play-button" className={this.playBtnStyle()}
        onMouseDown={this.props.startPlayback} onMouseUp={this.ctrlBtnUp} onMouseLeave={this.ctrlBtnUp}>
          <div className={this.playGlowStyle()}>
            <i className="fas fa-play"></i>
          </div>
        </div>

        <div id="undo-button" className={this.undoBtnStyle()}
        onMouseDown={this.undoBtnPress} onMouseUp={this.undoBtnLift} onMouseLeave={this.undoBtnLift}>
          <div className={this.undoGlowStyle()}>
            <i className="fas fa-undo"></i>
          </div>
        </div>
      </div>
    );
  }
}
