"use strict";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on",
      currentKit: "kit1",
      currentPad: "",
      nowRecording: false,
      recordingStartTime: 0,
      playbackArr: [],
      nowPlaying: false
    };
    this.togglePower = this.togglePower.bind(this);
    this.setCurrentKit = this.setCurrentKit.bind(this);
    this.setCurrentPad = this.setCurrentPad.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.recordingTimeout = null;
    this.recordNote = this.recordNote.bind(this);
    this.stop = this.stop.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
    this.playbackTimeouts = null;
  }

  togglePower() {
    if(this.state.power === "on") {
      this.setState({
        power: "off",
        currentKit: "kit1",
        nowRecording: false,
        nowPlaying: false
      });

      if(this.state.nowRecording === true) {
        clearTimeout(this.recordingTimeout);

        console.log("RECORDING STOPPED");
      }
      if(this.state.nowPlaying === true) {
        this.playbackTimeouts.forEach(function(i) {
          clearTimeout(i);
        }.bind(this));

        console.log("PLAYBACK STOPPED");
      }
    }
    else {
      this.setState({
        power: "on"
      });
    }
  }

  setCurrentKit(event) {
    if(this.state.power === "on") {
      if(event.currentTarget.id === "kit-btn-1") {
        this.setState({
          currentKit: "kit1"
        });
      }
      else if(event.currentTarget.id === "kit-btn-2") {
        this.setState({
          currentKit: "kit2"
        });
      }
    }
  }

  setCurrentPad(audioID) {
    if(this.state.power === "on") {
      this.setState({
        currentPad: audioID
      });
    }
  }

  startRecording() {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        nowRecording: true,
        recordingStartTime: Date.now()
      });

      console.log("RECORDING STARTED");

      this.recordingTimeout = setTimeout(function() {
        this.setState({
          nowRecording: false
        });

        console.log("RECORDING FINISHED");
      }.bind(this), 10000);
    }
  }

  recordNote(key) {
    if(this.state.nowRecording === true && event !== undefined) {
      this.setState({ playbackArr: [...this.state.playbackArr, {kit: this.state.currentKit, key:key, time:(Date.now() - this.state.recordingStartTime)}] });
    }
  }

  stop() {
    if(this.state.power === "on" && this.state.nowRecording === true) {
      clearTimeout(this.recordingTimeout);

      this.setState({
        nowRecording: false
      });

      console.log("RECORDING STOPPED");
    }

    if(this.state.power === "on" && this.state.nowPlaying === true) {
      this.playbackTimeouts.forEach(function(i) {
        clearTimeout(i);
      }.bind(this));

      this.setState({
        nowPlaying: false
      });

      console.log("PLAYBACK STOPPED");
    }
  }

  startPlayback() {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        nowPlaying: true
      });

      console.log(this.state.playbackArr);

      this.playbackTimeouts = [];

      console.log("PLAYBACK STARTED");

      this.state.playbackArr.forEach( function(i) {
        this.playbackTimeouts.push( setTimeout(function() {
          this.setCurrentPad(i.key);

          let audio = document.getElementById(i.key);

          audio.src = sampleKits[i.kit][i.key].src;
          audio.parentElement.style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
          audio.pause();
          audio.currentTime = 0;
          audio.play();
        }.bind(this), i.time) );
      }.bind(this) );
    }
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <DisplayLeft power={this.state.power} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} />
          <KitChoiceContainer power={this.state.power} setCurrentKit={this.setCurrentKit} />
          <DisplayRight power={this.state.power} currentKit={this.state.currentKit} currentPad={this.state.currentPad} />
          <PlaybackControls power={this.state.power} startRecording={this.startRecording} stop={this.stop} startPlayback={this.startPlayback} />
          <PadContainer power={this.state.power} currentKit={this.state.currentKit} setCurrentPad={this.setCurrentPad} nowRecording={this.state.nowRecording} recordNote={this.recordNote} />
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
