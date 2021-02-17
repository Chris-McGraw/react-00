"use strict";

class VolumeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.getVolumeSliderValue = this.getVolumeSliderValue.bind(this);
  }

  getVolumeSliderValue() {
    let value = document.getElementById("volume-slider").value / 100;
    // console.log(value);

    this.props.setMasterVolume(value);
  }

  render() {
    return (
      <div id="volume-section">
        <div id="volume-container">
          <p className="range-header">Master Volume</p>

          <input name="volume-slider" id="volume-slider" className="slider" type="range" min="0" max="100" step="1"
          defaultValue="100" onChange={this.getVolumeSliderValue} />

          <div className="range-tick-container">
            <div className="range-tick">0</div>
            <div className="range-tick">100</div>
          </div>
        </div>
      </div>
    );
  }
}
