class NoteGainControl extends React.Component {
  constructor(props) {
    super(props);
    this.getGainSliderValue = this.getGainSliderValue.bind(this);
  }

  getGainSliderValue() {
    let value = document.getElementById("gain-slider").value / 10;
    // console.log(value);

    this.props.setCurrentGain(value);
  }

  render() {
    return (
      <div id="note-gain-control-section">
        <p className="range-header">Gain</p>

        <input name="gain-slider" id="gain-slider" className="slider" type="range" min="0" max="10" step="1"
        defaultValue="10" onChange={this.getGainSliderValue} />

        <div className="range-tick-container">
          <div className="range-tick">0</div>
          <div className="range-tick">1</div>
          <div className="range-tick">2</div>
          <div className="range-tick">3</div>
          <div className="range-tick">4</div>
          <div className="range-tick">5</div>
          <div className="range-tick">6</div>
          <div className="range-tick">7</div>
          <div className="range-tick">8</div>
          <div className="range-tick">9</div>
          <div className="range-tick">10</div>
        </div>
      </div>
    );
  }
}
