"use strict";

class PowerContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let switchSlide = {
      transform: "translateY(0%)"
    }
    if(this.props.power === "off") {
      switchSlide = {
        transform: "translateY(100%)"
      }
    }

    return (
      <div id="power-section">
        <p id="power-header">Power</p>

        <div id="power-container">
          <div id="power-switch-container">
            <div id="power-switch" style={switchSlide} onClick={this.props.togglePower}>
              <div id="power-switch-indicator"></div>
            </div>

            <div id="slider-path"></div>
          </div>

          <div id="power-on-line">
            <p>ON</p>
          </div>

          <div id="power-off-line">
            <p>OFF</p>
          </div>
        </div>
      </div>
    );
  }
}
