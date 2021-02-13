"use strict";

class DisplayLeft extends React.Component {
  constructor(props) {
    super(props)
  }

  mapNoteBlocks(key, kit) {
    return this.props.playbackArr.filter(i =>
      i.key === key && i.kit === kit).map(i =>
        <div key={i.kit + i.key + i.time} className={this.noteBlockStyle()}
        style={{left: ( (i.time / 1000).toFixed(1) * 10 ) + "%",
        backgroundColor: sampleKits[i.kit][i.key].noteColor}}></div>
    );
  }

  noteBlockStyle() {
    if(this.props.power === "on") {
      return "note-block note-block-on";
    }
    else {
      return "note-block note-block-off"
    }
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

    return (
      <div id="display-left-section">
        <div id="note-line-label-container">
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

          <div className="note-line" id="note-line-1">
            <div>{this.mapNoteBlocks("C", "kit1")}</div>
            <div>{this.mapNoteBlocks("C", "kit2")}</div>
            <div>{this.mapNoteBlocks("C", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-2">
            <div>{this.mapNoteBlocks("X", "kit1")}</div>
            <div>{this.mapNoteBlocks("X", "kit2")}</div>
            <div>{this.mapNoteBlocks("X", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-3">
            <div>{this.mapNoteBlocks("Z", "kit1")}</div>
            <div>{this.mapNoteBlocks("Z", "kit2")}</div>
            <div>{this.mapNoteBlocks("Z", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-4">
            <div>{this.mapNoteBlocks("D", "kit1")}</div>
            <div>{this.mapNoteBlocks("D", "kit2")}</div>
            <div>{this.mapNoteBlocks("D", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-5">
            <div>{this.mapNoteBlocks("S", "kit1")}</div>
            <div>{this.mapNoteBlocks("S", "kit2")}</div>
            <div>{this.mapNoteBlocks("S", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-6">
            <div>{this.mapNoteBlocks("A", "kit1")}</div>
            <div>{this.mapNoteBlocks("A", "kit2")}</div>
            <div>{this.mapNoteBlocks("A", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-7">
            <div>{this.mapNoteBlocks("E", "kit1")}</div>
            <div>{this.mapNoteBlocks("E", "kit2")}</div>
            <div>{this.mapNoteBlocks("E", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-8">
            <div>{this.mapNoteBlocks("W", "kit1")}</div>
            <div>{this.mapNoteBlocks("W", "kit2")}</div>
            <div>{this.mapNoteBlocks("W", "kit3")}</div>
          </div>
          <div className="note-line" id="note-line-9">
            <div>{this.mapNoteBlocks("Q", "kit1")}</div>
            <div>{this.mapNoteBlocks("Q", "kit2")}</div>
            <div>{this.mapNoteBlocks("Q", "kit3")}</div>
          </div>
        </div>

        <div id="display-time-container">
          <p id="display-start-time">0<span className="seconds-span">s</span></p>
          <p id="display-end-time">10<span className="seconds-span">s</span></p>
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
        <div id="display-right-section">
          <div id="display-right"></div>
        </div>
      );
    }
    else {
      return (
        <div id="display-right-section">
          <div id="display-right">{sampleKits[this.props.currentKit][this.props.currentPad].desc}</div>
        </div>
      );
    }
  }
}
