"use strict";

class TrackControls extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="track-controls">
        <div className="ctrl-btn">
          <div className="ctrl-glow">
            <p>I</p>
          </div>
        </div>

        <div className="ctrl-btn">
          <div className="ctrl-glow">
            <p>II</p>
          </div>
        </div>

        <div className="ctrl-btn">
          <div className="ctrl-glow">
            <p>III</p>
          </div>
        </div>

        <div id="delete-button" className="ctrl-btn">
          <div className="ctrl-glow">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    );
  }
}
