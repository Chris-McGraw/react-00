"use strict";

class KitChoiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kitBtnPressed: ""
    };
    this.kitBtnDown = this.kitBtnDown.bind(this);
    this.kitBtnUp = this.kitBtnUp.bind(this);
  }

  kitBtnDown(event) {
    if(this.props.power === "on") {
      this.props.setCurrentKit(event);

      setTimeout(function() {
        this.setState({
          kitBtnPressed: this.props.currentKit
        });
      }.bind(this), 0);
    }
  }

  kitBtnUp() {
    this.setState({
      kitBtnPressed: ""
    });
  }

  kitBtnStyle(kit) {
    if(this.props.power === "on" && this.props.currentKit === kit) {
      if(this.state.kitBtnPressed === kit) {
        return "kit-choice-btn ctrl-btn-active kit-btn-pressed"
      }
      else {
        return "kit-choice-btn ctrl-btn-active"
      }
    }
    else if(this.props.power === "on" && this.props.currentKit !== kit) {
      return "kit-choice-btn ctrl-btn-on"
    }
    else {
      return "kit-choice-btn ctrl-btn-off"
    }
  }

  handleKeyPress(event) {
    // KEY PRESS 1
    if(event.keyCode === 49) {
      this.kitBtnDown(event);
    }
    // KEY PRESS 2
    else if(event.keyCode === 50) {
      this.kitBtnDown(event);
    }
    // KEY PRESS 3
    else if(event.keyCode === 51) {
      this.kitBtnDown(event);
    }
  }

  handleKeyLift(event) {
    // KEY PRESS 1
    if(event.keyCode === 49) {
      this.kitBtnUp();
    }
    // KEY PRESS 2
    else if(event.keyCode === 50) {
      this.kitBtnUp();
    }
    // KEY PRESS 3
    else if(event.keyCode === 51) {
      this.kitBtnUp();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    document.addEventListener("keyup", this.handleKeyLift.bind(this));
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress.bind(this));
    document.removeEventListener("keyup", this.handleKeyLift.bind(this));
  }

  render() {
    let btnGlowPowered = {};

    if(this.props.power === "off") {
      btnGlowPowered = {
        boxShadow: "none",
        backgroundColor: "rgba(255,255,255, 0.0)"
      }
    }

    return (
      <div>
        <div id="kit-choice-container">
          <p id="kit-choice-text">Page</p>

          <div className={this.kitBtnStyle("kit1")} id="kit-btn-1"
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>1</p>
          </div>

          <div className={this.kitBtnStyle("kit2")} id="kit-btn-2"
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>2</p>
          </div>

          <div className={this.kitBtnStyle("kit3")} id="kit-btn-3"
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>3</p>
          </div>
        </div>
      </div>
    );
  }
}
