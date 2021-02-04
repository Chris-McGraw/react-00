"use strict";

class Metronome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metroBPM: 100,
      currentQuarterNote: 0,
      lookahead: 25,          // scheduler function callback frequency (0.025 seconds)
      scheduleAheadTime: 0.1, // how far ahead to schedule audio (0.100 seconds)
      nextNoteTime: 0.0,      // when the next note is due
      btnRepeatSpeed: 200
    };
    this.metroBtnUp = this.metroBtnUp.bind(this);
    this.metronomeToggle = this.metronomeToggle.bind(this);
    this.metronomeInterval = null;
    this.metroTempoDown = this.metroTempoDown.bind(this);
    this.metroTempoUp = this.metroTempoUp.bind(this);
    this.metroTempoTimeout = null;
  }

  // nextNote() {
  //   // Advance current note and time by a quarter note
  //   var secondsPerBeat = 60 / this.state.metroBPM;
  //
  //   this.setState({
  //     nextNoteTime: this.state.nextNoteTime + secondsPerBeat
  //   });
  // }

  nextNote() {
    // Advance current note and time by a quarter note
    var secondsPerBeat = 60 / this.state.metroBPM;

    this.setState({
      nextNoteTime: this.state.nextNoteTime + secondsPerBeat,
      currentQuarterNote: this.state.currentQuarterNote + 1
    });

    if(this.state.currentQuarterNote === 4) {
      this.setState({
        currentQuarterNote: 0
      });
    }
  }

  playSample(audioContext, time) {
    // create an oscillator
    const osc = audioContext.createOscillator();
    const envelope = audioContext.createGain();

    osc.frequency.value = (this.state.currentQuarterNote % 4 == 0) ? 1000 : 800;

    if(this.props.volume === 1) {
      envelope.gain.exponentialRampToValueAtTime(1, time);
      envelope.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
    }
    else {
      envelope.gain.setValueAtTime(0, time);
    }

    osc.connect(envelope);
    envelope.connect(audioContext.destination);

    osc.start(time);
    osc.stop(time + 0.03);
  }

  scheduler() {
    if(this.props.power === "on") {
      // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
      while (this.state.nextNoteTime < this.props.audioCtx.currentTime + this.state.scheduleAheadTime ) {
        // console.log("metronome ticked");
        this.playSample(this.props.audioCtx, this.state.nextNoteTime);
        this.nextNote();
      }
    }
    else {
      clearInterval(this.metronomeInterval);
    }
  }

  metronomeToggle(event) {
    if(this.props.power === "on") {
      if(this.props.metronomePlaying === false && event !== undefined) {
        this.props.toggleMetronomePlaying();

        this.setState({
          currentQuarterNote: 0,
          nextNoteTime: this.props.audioCtx.currentTime + 0.05
        });

        this.metronomeInterval = setInterval(function() {
          this.scheduler();
        }.bind(this), this.state.lookahead);

        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
      }
      else if(this.props.metronomePlaying === true && event !== undefined) {
        clearInterval(this.metronomeInterval);

        this.props.toggleMetronomePlaying();

        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
      }
    }
  }

  metroTempoDown(event) {
    if(this.props.power === "on" && this.props.metronomePlaying === false && this.state.metroBPM > 40) {
      if(event !== undefined) {
        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.5)";
      }
      else if(this.state.btnRepeatSpeed > 20) {
        this.setState({
          btnRepeatSpeed: this.state.btnRepeatSpeed - 20
        });
      }

      this.setState({
        metroBPM: this.state.metroBPM - 1
      });

      this.metroTempoTimeout = setTimeout(function() {
        if(this.state.metroBPM > 40) {
          this.metroTempoDown();
        }
      }.bind(this), this.state.btnRepeatSpeed);
    }
  }

  metroTempoUp(event) {
    if(this.props.power === "on" && this.props.metronomePlaying === false && this.state.metroBPM < 200) {
      if(event !== undefined) {
        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.5)";
      }
      else if(this.state.btnRepeatSpeed > 20) {
        this.setState({
          btnRepeatSpeed: this.state.btnRepeatSpeed - 20
        });
      }

      this.setState({
        metroBPM: this.state.metroBPM + 1
      });

      this.metroTempoTimeout = setTimeout(function() {
        if(this.state.metroBPM < 200) {
          this.metroTempoUp();
        }
      }.bind(this), this.state.btnRepeatSpeed);
    }
  }

  metroBtnUp(event) {
    if(event !== undefined) {
      clearTimeout(this.metroTempoTimeout);

      this.setState({
        btnRepeatSpeed: 200
      });

      event.currentTarget.style.boxShadow = "6px 6px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
    }
  }

  metroDisplayStyle() {
    if(this.props.power === "on") {
      return "metro-display metro-display-on";
    }
    else {
      return "metro-display metro-display-off"
    }
  }

  metroBtnStyle(btn) {
    if(this.props.power === "on" && this.props.metronomePlaying === true && btn === "metro-toggle-btn") {
      return "metro-btn metro-btn-on metro-btn-active";
    }
    else if(this.props.power === "on" && this.props.metronomePlaying === false) {
      return "metro-btn metro-btn-on metro-btn-on";
    }
    else {
      return "metro-btn metro-btn-off"
    }
  }

  metroGlowStyle(btn) {
    if(this.props.power === "on" && this.props.metronomePlaying === true && btn === "metro-toggle-btn") {
      return "metro-glow metro-glow-on";
    }
    else if(this.props.power === "on" && this.props.metronomePlaying === false) {
      return "metro-glow metro-glow-on";
    }
    else {
      return "metro-glow metro-glow-off"
    }
  }

  render() {
    return (
      <div id="metronome-section">
        <div id="metronome-container">
          <p id="metro-header">Metronome</p>

          <div id="metro-container-inner">
            <div id="metro-display">
              <p className={this.metroDisplayStyle()}>{this.state.metroBPM} BPM</p>
            </div>

            <div id="metro-controls">
              <div className={this.metroBtnStyle("metro-toggle-btn")} onTouchStart={this.metronomeToggle} onTouchEnd={this.metroBtnUp}
              onMouseDown={this.metronomeToggle} onMouseUp={this.metroBtnUp} onMouseLeave={this.metroBtnUp}>
                <div className={this.metroGlowStyle("metro-toggle-btn")}></div>
                <div id="metro-play-stop-span">
                  <i className="fas fa-play"></i> <span id="metro-slash-span">/</span> <i className="fas fa-stop"></i>
                </div>
              </div>

              <div className={this.metroBtnStyle()} onTouchStart={this.metroTempoDown} onTouchEnd={this.metroBtnUp}
              onMouseDown={this.metroTempoDown} onMouseUp={this.metroBtnUp} onMouseLeave={this.metroBtnUp}>
                <div className={this.metroGlowStyle()}>
                  <i className="fas fa-caret-down"></i>
                </div>
              </div>

              <div className={this.metroBtnStyle()} onTouchStart={this.metroTempoUp} onTouchEnd={this.metroBtnUp}
              onMouseDown={this.metroTempoUp} onMouseUp={this.metroBtnUp} onMouseLeave={this.metroBtnUp}>
                <div className={this.metroGlowStyle()}>
                  <i className="fas fa-caret-up"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
