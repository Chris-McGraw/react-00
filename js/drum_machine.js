"use strict";

// localStorage.clear();
console.log(localStorage);

let initializeLocalStorage = function() {
  if(localStorage.getItem("track1") === null) {
    let arr = [];

    localStorage.setItem("track1", JSON.stringify(arr));
  }
  if(localStorage.getItem("track2") === null) {
    let arr = [];

    localStorage.setItem("track2", JSON.stringify(arr));
  }
  if(localStorage.getItem("track3") === null) {
    let arr = [];

    localStorage.setItem("track3", JSON.stringify(arr));
  }
}

let clearLocalStorage = function(track) {
  let arr = [];

  localStorage.setItem(track, JSON.stringify(arr));
}

initializeLocalStorage();

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      power: "on",
      volume: 1,
      currentTrack: "track1",
      currentKit: "kit1",
      currentPad: "",
      metronomePlaying: false,
      nowRecording: false,
      recordingStartTime: 0,
      playbackArrPrevious: [],
      playbackArrUndone: JSON.parse(localStorage.getItem("track1")),
      playbackArr: JSON.parse(localStorage.getItem("track1")),
      nowPlaying: false
    };
    this.togglePower = this.togglePower.bind(this);
    this.toggleVolume = this.toggleVolume.bind(this);
    this.toggleMetronomePlaying = this.toggleMetronomePlaying.bind(this);
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
    this.setCurrentKit = this.setCurrentKit.bind(this);
    this.setCurrentPad = this.setCurrentPad.bind(this);
    this.deleteRecording = this.deleteRecording.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.recordingFinishTimeout = null;
    this.recordNote = this.recordNote.bind(this);
    this.stop = this.stop.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
    this.playbackTimeouts = null;
    this.playbackFinishTimeout = null;
    this.undo = this.undo.bind(this);
  }

  togglePower() {
    if(this.state.power === "on") {
      this.setState({
        power: "off",
        metronomePlaying: false,
        currentTrack: "track1",
        currentKit: "kit1",
        currentPad: "",
        nowRecording: false,
        playbackArrUndone: JSON.parse(localStorage.getItem("track1")),
        playbackArr: JSON.parse(localStorage.getItem("track1")),
        nowPlaying: false
      });

      if(this.state.nowRecording === true) {
        clearTimeout(this.recordingFinishTimeout);

        console.log("RECORDING STOPPED");
      }
      if(this.state.nowPlaying === true) {
        this.playbackTimeouts.forEach(function(i) {
          clearTimeout(i);
        }.bind(this));

        clearTimeout(this.playbackFinishTimeout);

        console.log("PLAYBACK STOPPED");
      }
    }
    else {
      this.setState({
        power: "on"
      });
    }
  }

  toggleVolume() {
    if(this.state.volume === 1) {
      this.setState({
        volume: 0
      });
    }
    else {
      this.setState({
        volume: 1
      });
    }
  }

  toggleMetronomePlaying() {
    if(this.state.metronomePlaying === false) {
      this.setState({
        metronomePlaying: true
      });
    }
    else {
      this.setState({
        metronomePlaying: false
      });
    }
  }

  setCurrentTrack(track, event) {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        currentTrack: track,
        playbackArr: JSON.parse(localStorage.getItem(track)),
        playbackArrUndone: JSON.parse(localStorage.getItem(track))
      });

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
    }
  }

  setCurrentKit(event) {
    if(this.state.power === "on") {
      if(event.currentTarget.id === "kit-btn-1" || event.key === "1") {
        this.setState({
          currentKit: "kit1"
        });
      }
      else if(event.currentTarget.id === "kit-btn-2" || event.key === "2") {
        this.setState({
          currentKit: "kit2"
        });
      }
      else if(event.currentTarget.id === "kit-btn-3" || event.key === "3") {
        this.setState({
          currentKit: "kit3"
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

  deleteRecording(event) {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false && this.state.playbackArr.length > 0) {
      clearLocalStorage(this.state.currentTrack);

      this.setState({
        playbackArrUndone: [],
        playbackArr: JSON.parse(localStorage.getItem(this.state.currentTrack))
      });

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.5)";
      console.log("RECORDING DELETED");
    }
  }

  startRecording(event) {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      if(this.state.playbackArr.length > 0) {
        this.startPlayback(event);
      }

      this.setState({
        nowRecording: true,
        recordingStartTime: Date.now(),
        playbackArrPrevious: this.state.playbackArr.slice()
      });

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
      console.log("RECORDING STARTED");

      this.recordingFinishTimeout = setTimeout(function() {
        this.setState({
          nowRecording: false
        });

        this.setPlaybackArrUndone();

        console.log("RECORDING FINISHED");
      }.bind(this), 10000);
    }
  }

  setPlaybackArrUndone() {
    if(this.state.playbackArrPrevious.length === 0 && this.state.playbackArr.length > 0) {
      this.setState({
        playbackArrUndone: []
      });
    }
    else if( this.arraysEqual(this.state.playbackArrPrevious, this.state.playbackArr) === false ) {
      this.setState({
        playbackArrUndone: this.state.playbackArrPrevious.slice()
      });
    }
  }

  arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  recordNote(key) {
    if(this.state.nowRecording === true && event !== undefined) {
      let arr = JSON.parse(localStorage.getItem(this.state.currentTrack));

      arr.push({kit: this.state.currentKit, key:key, time:(Date.now() - this.state.recordingStartTime)});

      localStorage.setItem(this.state.currentTrack, JSON.stringify(arr));

      this.setState({
        playbackArr: JSON.parse(localStorage.getItem(this.state.currentTrack))
      });

      // this.setState({ playbackArr: [...this.state.playbackArr, {kit: this.state.currentKit, key:key, time:(Date.now() - this.state.recordingStartTime)}] });
    }
  }

  startPlayback(event) {
    if(this.state.power === "on" && this.state.nowRecording === false && this.state.nowPlaying === false) {
      this.setState({
        nowPlaying: true
      });

      // console.log( JSON.parse(localStorage.getItem("storedTrack1")) );
      console.log(this.state.playbackArr);

      this.playbackTimeouts = [];

      if(event !== undefined) {
        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
      }

      console.log("PLAYBACK STARTED");

      this.state.playbackArr.forEach( function(i) {
        this.playbackTimeouts.push( setTimeout(function() {
          // this.setCurrentPad(i.key);

          let audio = document.getElementById(i.key).cloneNode(true);

          audio.src = sampleKits[i.kit][i.key].src;
          // audio.parentElement.style.boxShadow = "4px 4px 8px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.2)";
          audio.pause();
          audio.currentTime = 0;
          audio.volume = this.state.volume;
          audio.play();
        }.bind(this), i.time) );
      }.bind(this) );

      this.playbackFinishTimeout = setTimeout(function() {
        this.setState({
          nowPlaying: false
        });

        console.log("PLAYBACK FINISHED");

        if(this.state.nowRecording === false) {
          setTimeout(function() {
            this.startPlayback();
          }.bind(this), 20);
        }
      }.bind(this), 10000);
    }
  }

  stop(event) {
    if(this.state.power === "on" && this.state.nowRecording === true) {
      this.setState({
        nowRecording: false
      });

      clearTimeout(this.recordingFinishTimeout);

      this.setPlaybackArrUndone();

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.5)";
      console.log("RECORDING STOPPED");
    }

    if(this.state.power === "on" && this.state.nowPlaying === true) {
      this.setState({
        nowPlaying: false
      });

      this.playbackTimeouts.forEach(function(i) {
        clearTimeout(i);
      }.bind(this));

      clearTimeout(this.playbackFinishTimeout);

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 100px 100px rgba(255, 255, 255, 0.5)";
      console.log("PLAYBACK STOPPED");
    }
  }

  undo() {
    localStorage.setItem(this.state.currentTrack, JSON.stringify(this.state.playbackArrUndone.slice()));

    this.setState({
      playbackArr: JSON.parse(localStorage.getItem(this.state.currentTrack))
    });

    console.log("UNDO");
  }

  render() {
    return (
      <div>
        <div id="drum-machine">
          <PowerContainer power={this.state.power} togglePower={this.togglePower} />
          <VolumeContainer volume={this.state.volume} toggleVolume={this.toggleVolume} />
          <Metronome power={this.state.power} volume={this.state.volume} metronomePlaying={this.state.metronomePlaying} toggleMetronomePlaying={this.toggleMetronomePlaying} />
          <DisplayLeft power={this.state.power} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} playbackArr={this.state.playbackArr} />
          <KitChoiceContainer power={this.state.power} setCurrentKit={this.setCurrentKit} currentKit={this.state.currentKit} />
          <DisplayRight power={this.state.power} currentKit={this.state.currentKit} currentPad={this.state.currentPad} />
          <TrackControls power={this.state.power} setCurrentTrack={this.setCurrentTrack} currentTrack={this.state.currentTrack} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} deleteRecording={this.deleteRecording} />
          <PlaybackControls power={this.state.power} playbackArr={this.state.playbackArr} playbackArrUndone={this.state.playbackArrUndone} startRecording={this.startRecording} nowRecording={this.state.nowRecording} startPlayback={this.startPlayback} nowPlaying={this.state.nowPlaying} stop={this.stop} undo={this.undo} />
          <PadContainer power={this.state.power} volume={this.state.volume} currentKit={this.state.currentKit} setCurrentPad={this.setCurrentPad} nowRecording={this.state.nowRecording} recordNote={this.recordNote} />
        </div>
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
