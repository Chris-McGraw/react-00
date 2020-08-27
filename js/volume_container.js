"use strict";

class VolumeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div id="volume-container">
          <div id="volume-knob">
            <div id="volume-indicator"></div>
          </div>

          <div id="volume-knob-shadow"></div>

          <p id="volume-0-text">0</p>
          <p id="volume-100-text">100</p>
        </div>
      </div>
    );
  }
}
