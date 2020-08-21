"use strict";

class DisplayLeft extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let movePlayLine = {
      opacity: "1.0"
    };

    if(this.props.power === "off") {
      movePlayLine = {
        opacity: "0.0"
      }
    }
    if(this.props.nowRecording === true || this.props.nowPlaying === true) {
      movePlayLine = {
        transition: "transform 10s linear",
        transform: "translateX(" + (document.getElementById("display-left").offsetWidth - 5) + "px)"
      }
    }

    let test9 = this.props.playbackArr.filter(i => i.key === "Q").map(i => <div key={i.kit + i.key + i.time} className="note-block" style={{left: ( (i.time / 1000).toFixed(1) * 10 ) + "%"}}></div>);

    return (
      <div>
        <div id="other-test">
          <p>C</p>
          <p>X</p>
          <p>Z</p>
          <p>D</p>
          <p>S</p>
          <p>A</p>
          <p>E</p>
          <p>W</p>
          <p>Q</p>
        </div>

        <div id="display-left">
          <div id="play-line" style={movePlayLine}></div>

          <div className="test-line" id="test-line-1"></div>
          <div className="test-line" id="test-line-2"></div>
          <div className="test-line" id="test-line-3"></div>
          <div className="test-line" id="test-line-4"></div>
          <div className="test-line" id="test-line-5"></div>
          <div className="test-line" id="test-line-6"></div>
          <div className="test-line" id="test-line-7"></div>
          <div className="test-line" id="test-line-8"></div>
          <div className="test-line" id="test-line-9">{test9}</div>
        </div>
      </div>
    );
  }
}

class DisplayRight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if(this.props.power === "off" || this.props.currentPad === "") {
      return (
        <div>
          <div id="display-right"></div>
        </div>
      );
    }
    else {
      return (
        <div>
          <div id="display-right">{sampleKits[this.props.currentKit][this.props.currentPad].desc}</div>
        </div>
      );
    }
  }
}
