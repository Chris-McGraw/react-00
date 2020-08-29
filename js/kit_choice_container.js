"use strict";

class KitChoiceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.kitBtnDown = this.kitBtnDown.bind(this);
    this.kitBtnUp = this.kitBtnUp.bind(this);
  }

  kitBtnDown(event) {
    if(this.props.power === "on") {
      var kitBtns = document.getElementsByClassName("kit-choice-btn");

      for(let n = 0; n < kitBtns.length; n++) {
        kitBtns[n].style.backgroundColor = "#c0c7ca";
        // kitBtns[n].style.backgroundImage = "radial-gradient(#b6b4be, #c0c7ca)";
        kitBtns[n].style.backgroundImage = "radial-gradient( rgba(182, 180, 190, 0.8), rgb(192, 199, 202, 0.8) )";
      }

      event.currentTarget.style.backgroundColor = "#dad9de";
      // event.currentTarget.style.backgroundImage = "radial-gradient(#E9E8EB, #dad9de)";
      event.currentTarget.style.backgroundImage = "radial-gradient( rgba(233, 232, 235, 0.8), rgba(218, 217, 222, 0.8) )";
      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";

      this.props.setCurrentKit(event);
    }
  }

  kitBtnUp(event) {
    event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0)";
  }

  render() {
    let btnPowered = {};
    let btnGlowPowered = {};

    if(this.props.power === "off") {
      btnPowered = {
        backgroundImage: "none",
        backgroundColor: "#898F90"
      }
      btnGlowPowered = {
        boxShadow: "none",
        backgroundColor: "rgba(255,255,255, 0.0)"
      }
    }

    return (
      <div>
        <div id="kit-choice-container">
          <div className="kit-choice-btn" id="kit-btn-1" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>1</p>
          </div>

          <div className="kit-choice-btn" id="kit-btn-2" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>2</p>
          </div>

          <div className="kit-choice-btn" id="kit-btn-3" style={btnPowered}
          onMouseDown={this.kitBtnDown} onMouseUp={this.kitBtnUp} onMouseLeave={this.kitBtnUp}>
            <div className="kit-choice-btn-glow" style={btnGlowPowered}></div>
            <p>3</p>
          </div>
        </div>
      </div>
    );
  }
}
