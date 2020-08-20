"use strict";

class TrackControls extends React.Component {
  constructor(props) {
    super(props)
  }

  trackBtnStyle() {
    if(this.props.power === "on") {
      return "ctrl-btn ctrl-btn-on";
    }
    else {
      return "ctrl-btn ctrl-btn-off"
    }
  }

  trackGlowStyle() {
    if(this.props.power === "on") {
      return "ctrl-glow ctrl-glow-on";
    }
    else {
      return "ctrl-glow ctrl-glow-off"
    }
  }

  render() {
    return (
      <div id="track-controls">
        <div className={this.trackBtnStyle()}>
          <div className={this.trackGlowStyle()}>
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
