"use strict";

class PassFilter extends React.Component {
  constructor(props) {
    super(props)
    this.getHighPassSliderValue = this.getHighPassSliderValue.bind(this);
    this.getLowPassSliderValue = this.getLowPassSliderValue.bind(this);
  }

  getHighPassSliderValue() {
    let sliderValue = document.getElementById("high-pass-slider").value;
    let highPassFreq = "";

    switch(sliderValue) {
      case "0":
        highPassFreq = 0;
        break;
      case "1":
        highPassFreq = 500;
        break;
      case "2":
        highPassFreq = 1000;
        break;
      case "3":
        highPassFreq = 1500;
        break;
      case "4":
        highPassFreq = 2000;
        break;
      case "5":
        highPassFreq = 2500;
        break;
      default:
        break;
    }

    this.props.setCurrentHighPass(highPassFreq);
  }

  getLowPassSliderValue() {
    let sliderValue = document.getElementById("low-pass-slider").value;
    let lowPassFreq = "";

    switch(sliderValue) {
      case "0":
        lowPassFreq = 0;
        break;
      case "1":
        lowPassFreq = 5000;
        break;
      case "2":
        lowPassFreq = 4000;
        break;
      case "3":
        lowPassFreq = 3000;
        break;
      case "4":
        lowPassFreq = 2000;
        break;
      case "5":
        lowPassFreq = 1000;
        break;
      default:
        break;
    }

    this.props.setCurrentLowPass(lowPassFreq);
  }

  render() {
    return (
      <div id="pass-filter-section">
        <div id="high-pass-container">
          <p className="range-header">High Pass (kHz)</p>

          <input name="high-pass-slider" id="high-pass-slider" className="slider" type="range" min="0" max="5" step="1"
          defaultValue="0" onChange={this.getHighPassSliderValue} />

          <div className="range-tick-container">
            <div className="range-tick">0</div>
            <div className="range-tick">0.5</div>
            <div className="range-tick">1</div>
            <div className="range-tick">1.5</div>
            <div className="range-tick">2</div>
            <div className="range-tick">2.5</div>
          </div>
        </div>

        <div id="low-pass-container">
          <p className="range-header">Low Pass (kHz)</p>

          <input name="low-pass-slider" id="low-pass-slider" className="slider" type="range" min="0" max="5" step="1"
          defaultValue="0" onChange={this.getLowPassSliderValue} />

          <div className="range-tick-container">
            <div className="range-tick">0</div>
            <div className="range-tick">5</div>
            <div className="range-tick">4</div>
            <div className="range-tick">3</div>
            <div className="range-tick">2</div>
            <div className="range-tick">1</div>
          </div>
        </div>
      </div>
    );
  }
}
