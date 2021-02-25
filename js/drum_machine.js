"use strict";

const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const audioKitSourceArray1 = ["audio/808s/loaded.mp3", "audio/808s/starburst.mp3", "audio/808s/lettuce.mp3",
"audio/kicks/kick5.mp3", "audio/snares/dippy.mp3", "audio/snares/doo.mp3",
"audio/hats/hihat8.mp3", "audio/hats/openhat1.mp3", "audio/claps/clap1.mp3"];

const audioKitSourceArray2 = ["audio/kicks/kick3.mp3", "audio/snares/karen.mp3", "audio/hats/openhat8.mp3",
"audio/percs/tamby.mp3", "audio/percs/chirp.mp3", "audio/vocals/out.mp3",
"audio/808s/808kenny.mp3", "audio/808s/kenny34.mp3", "audio/808s/money.mp3"];

const audioKitSourceArray3 = ["audio/hats/hihatwork.mp3", "audio/hats/openhatreverse.mp3", "audio/snares/drizzy.mp3",
"audio/snares/sauce.mp3", "audio/808s/kenny24.mp3", "audio/kicks/kick36.mp3",
"audio/claps/kennyclap9.mp3", "audio/percs/kennyperc4.mp3", "audio/vocals/toasty.mp3"];

const masterAudioKitSourceArray = [audioKitSourceArray1, audioKitSourceArray2, audioKitSourceArray3];

// localStorage.clear();
// localStorage.removeItem("track1");
console.log(localStorage);

let initializeLocalStorage = function() {
  if(localStorage.getItem("track1") === null) {
    let arr = playbackExample;

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
      audioCtx: audioCtx,
      audioSampleKit1: "",
      audioSampleKit2: "",
      audioSampleKit3: "",
      audioLoaded: false,
      power: "on",
      volume: 1,
      currentTrack: "track1",
      currentKit: "kit1",
      currentPad: "",
      currentGain: 1,
      currentPitch: 1,
      currentHighPass: 0,
      currentLowPass: 0,
      metronomePlaying: false,
      nowRecording: false,
      recordingStartTime: 0,
      currentNoteNumber: 0,
      lookahead: 25,           // scheduler function callback frequency (0.025 seconds)
      scheduleAheadTime: 0.1,  // how far ahead to schedule audio (0.100 seconds)
      previousNoteTime: 0.0,
      nextNoteTime: 0.0,       // when the next note is due
      playbackArrCopy: [],
      playbackArrPrevious: [],
      playbackArrUndone: JSON.parse(localStorage.getItem("track1")),
      playbackArr: JSON.parse(localStorage.getItem("track1")),
      nowPlaying: false
    };
    this.togglePower = this.togglePower.bind(this);
    this.setMasterVolume = this.setMasterVolume.bind(this);
    this.toggleMetronomePlaying = this.toggleMetronomePlaying.bind(this);
    this.setCurrentTrack = this.setCurrentTrack.bind(this);
    this.setCurrentKit = this.setCurrentKit.bind(this);
    this.setCurrentPad = this.setCurrentPad.bind(this);
    this.setCurrentGain = this.setCurrentGain.bind(this);
    this.setCurrentPitch = this.setCurrentPitch.bind(this);
    this.setCurrentHighPass =this.setCurrentHighPass.bind(this);
    this.setCurrentLowPass =this.setCurrentLowPass.bind(this);
    this.deleteRecording = this.deleteRecording.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.recordingFinishTimeout = null;
    this.recordNote = this.recordNote.bind(this);
    this.stop = this.stop.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
    this.getSampleKitAudio = this.getSampleKitAudio.bind(this);
    this.playbackInterval = null;
    this.iterateCurrentNoteNumber = this.iterateCurrentNoteNumber.bind(this);
    this.undo = this.undo.bind(this);
  }

  async getAudioKitFiles(audioContext, audioKit) {
    const audioBufferArray = [];

    for(const filepath of audioKit) {
      const response = await fetch(filepath);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      audioBufferArray.push(audioBuffer);
    }

    return audioBufferArray;
  }

  async setupAudioSampleKits(masterAudioKitSourceArray) {
    const masterSampleKitArray = [];

    for(const sourceArray of masterAudioKitSourceArray) {
      const sampleArray = await this.getAudioKitFiles(this.state.audioCtx, sourceArray);
      masterSampleKitArray.push(sampleArray);
    }

    return masterSampleKitArray;
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
        console.log("PLAYBACK STOPPED");
      }
    }
    else {
      this.setState({
        power: "on"
      });
    }
  }

  setMasterVolume(value) {
    this.setState({
      volume: value
    });
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

  setCurrentGain(gainValue) {
    this.setState({
      currentGain: gainValue
    });
  }

  setCurrentPitch(pitchValue) {
    this.setState({
      currentPitch: pitchValue
    });
  }

  setCurrentHighPass(highPassFreq) {
    this.setState({
      currentHighPass: highPassFreq
    });
  }

  setCurrentLowPass(lowPassFreq) {
    this.setState({
      currentLowPass: lowPassFreq
    });
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
      this.setState({
        nowRecording: true,
        recordingStartTime: this.state.audioCtx.currentTime,
        playbackArrPrevious: this.state.playbackArr.slice()
      });

      if(this.state.playbackArr.length === 0) {
        this.recordingFinishTimeout = setTimeout(function() {
          this.setState({
            nowRecording: false
          });

          this.setPlaybackArrUndone();

          // console.log("recording time end: " + this.state.audioCtx.currentTime);
          console.log("RECORDING FINISHED");
        }.bind(this), 16000);
      }
      else if(this.state.playbackArr.length > 0) {
        this.startPlayback(event);
      }

      event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0)";
      console.log("RECORDING STARTED");
      // console.log("recording time start: " + this.state.audioCtx.currentTime);
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

      arr.push({kit: this.state.currentKit, key:key,
        idKey: this.state.currentKit + "-" + key +  "-" + String( new Date().getTime() ),
        pitch:this.state.currentPitch, noteGain:this.state.currentGain,
        highPass:this.state.currentHighPass, lowPass:this.state.currentLowPass,
        time:(this.state.audioCtx.currentTime - this.state.recordingStartTime) * 1000
      });

      localStorage.setItem(this.state.currentTrack, JSON.stringify(arr));

      this.setState({
        playbackArr: JSON.parse(localStorage.getItem(this.state.currentTrack))
      });
    }
  }

  sortByTime(a, b) {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  }

  getSampleKitAudio(kit, pad) {
    let padNumID = "";

    switch(pad) {
      case "Q":
        padNumID = 0;
        break;
      case "W":
        padNumID = 1;
        break;
      case "E":
        padNumID = 2;
        break;
      case "A":
        padNumID = 3;
        break;
      case "S":
        padNumID = 4;
        break;
      case "D":
        padNumID = 5;
        break;
      case "Z":
        padNumID = 6;
        break;
      case "X":
        padNumID = 7;
        break;
      case "C":
        padNumID = 8;
        break;
      default:
        break;
    }

    switch(kit) {
      case "kit1":
        return this.state.audioSampleKit1[padNumID];
        break;
      case "kit2":
        return this.state.audioSampleKit2[padNumID];
        break;
      case "kit3":
        return this.state.audioSampleKit3[padNumID];
        break;
      default:
        break;
    }
  }

  iterateCurrentNoteNumber() {
    this.setState({
      previousNoteTime: (this.state.playbackArrCopy[this.state.currentNoteNumber].time / 1000),
      currentNoteNumber: this.state.currentNoteNumber + 1,
    });
  }

  nextNote() {
    this.iterateCurrentNoteNumber();

    if(this.state.currentNoteNumber < this.state.playbackArrCopy.length) {
      this.setState({
        nextNoteTime: this.state.nextNoteTime + ( (this.state.playbackArrCopy[this.state.currentNoteNumber].time / 1000) - this.state.previousNoteTime)
      });
    }
  }

  playSample(audioContext, audioBuffer, pitch, noteGain, highPass, lowPass, time) {
    // SET UP SAMPLE SOURCE BUFFER
    const sampleSource = audioContext.createBufferSource();
    sampleSource.buffer = audioBuffer;
    if(pitch === undefined) {
      pitch = 1;
    }
    sampleSource.playbackRate.value = pitch ** ((62 - 60) / 12);

    // SET UP GAIN ENVELOPE
    const envelope = audioContext.createGain();
    if(noteGain === undefined) {
      noteGain = 1.0;
    }
    envelope.gain.setValueAtTime( (0.6 * this.state.volume) * noteGain, time);

    //  SET UP PASS FILTERS
    if(highPass === undefined) {
      highPass = 0;
    }
    if(lowPass === undefined) {
      lowPass = 0;
    }

    if(highPass === 0 && lowPass === 0) {
      sampleSource.connect(envelope).connect(audioContext.destination);
    }
    else if(highPass !== 0 && lowPass !== 0) {
      let highpass = audioCtx.createBiquadFilter();
      highpass.type = "highpass";
      highpass.frequency.value = highPass;

      let lowpass = audioCtx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.value = lowPass;

      sampleSource.connect(highpass).connect(lowpass).connect(envelope).connect(audioContext.destination);
    }
    else if(highPass !== 0) {
      let highpass = audioCtx.createBiquadFilter();
      highpass.type = "highpass";
      highpass.frequency.value = highPass;

      sampleSource.connect(highpass).connect(envelope).connect(audioContext.destination);
    }
    else if(lowPass !== 0) {
      let lowpass = audioCtx.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.value = lowPass;

      sampleSource.connect(lowpass).connect(envelope).connect(audioContext.destination);
    }

    // console.log("tick");
    // console.log(this.state.currentNoteNumber);

    sampleSource.start(time);
    return sampleSource;
  }

  scheduler() {
    if(this.state.power === "on") {
      // while there are notes that will need to play before the next interval, schedule them and advance the pointer.
      while (this.state.nextNoteTime < this.state.audioCtx.currentTime + this.state.scheduleAheadTime &&
      this.state.currentNoteNumber < this.state.playbackArrCopy.length) {
        this.playSample(
          this.state.audioCtx,
          this.getSampleKitAudio(this.state.playbackArrCopy[this.state.currentNoteNumber].kit, this.state.playbackArrCopy[this.state.currentNoteNumber].key),
          this.state.playbackArrCopy[this.state.currentNoteNumber].pitch,
          this.state.playbackArrCopy[this.state.currentNoteNumber].noteGain,
          this.state.playbackArrCopy[this.state.currentNoteNumber].highPass,
          this.state.playbackArrCopy[this.state.currentNoteNumber].lowPass,
          this.state.nextNoteTime
        );
        this.nextNote();
      }
    }
    else {
      clearInterval(this.playbackInterval);
    }
  }

  startPlayback(event) {
    if(this.state.power === "on" && this.state.nowRecording === false
    && this.state.nowPlaying === false && this.state.playbackArr.length > 0) {
      if(event !== undefined) {
        event.currentTarget.style.boxShadow = "4px 4px 6px rgba(0,0,0, 1.0), inset 0 0 0 0 rgba(255, 255, 255, 0.0)";
      }

      this.setState({
        currentNoteNumber: 0,
        playbackArrCopy: this.state.playbackArr.slice().sort(this.sortByTime)
      }, () => {
        this.setState({
          nowPlaying: true,
          previousNoteTime: this.state.audioCtx.currentTime + (this.state.playbackArrCopy[this.state.currentNoteNumber].time / 1000),
          nextNoteTime: this.state.audioCtx.currentTime + (this.state.playbackArrCopy[this.state.currentNoteNumber].time / 1000)
        });

        console.log("PLAYBACK STARTED");
        console.log( this.state.playbackArrCopy );
        // console.log("start time:" + this.state.audioCtx.currentTime);

        let startTime = this.state.audioCtx.currentTime;
        let targetTime = this.state.audioCtx.currentTime + 16.0;

        this.playbackInterval = setInterval(function() {
          // ***** PLAYBACK CONTINUES *****
          if(this.state.audioCtx.currentTime < targetTime) {
            // check if context is in suspended state (autoplay policy)
            if(this.state.audioCtx.state === "suspended") {
              this.state.audioCtx.resume();
            }

            this.scheduler();
          }
          // ***** PLAYBACK FINISHED ******
          else {
            clearInterval(this.playbackInterval);
            // console.log("end time:" + this.state.audioCtx.currentTime);
            console.log("PLAYBACK FINISHED");

            // ***** LOOP PLAYBACK ******
            if(this.state.nowRecording === false) {
              this.setState({
                nowPlaying: false,
                currentNoteNumber: 0
              }, () => {
                  this.startPlayback();
              });
            }
            // ***** END PLAYBACK ******
            else {
              this.setState({
                nowRecording: false,
                nowPlaying: false,
              });

              this.setPlaybackArrUndone();

              console.log("RECORDING FINISHED");
            }
          }
        }.bind(this), this.state.lookahead);
      });
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

      clearInterval(this.playbackInterval);

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

  componentDidMount() {
    this.setupAudioSampleKits(masterAudioKitSourceArray).then((masterSampleKitArray) => {
      this.setState({
        audioSampleKit1: masterSampleKitArray[0],
        audioSampleKit2: masterSampleKitArray[1],
        audioSampleKit3: masterSampleKitArray[2],
        audioLoaded: true
      }, () => {
          ReactDOM.findDOMNode(this).addEventListener("touchstart", (event)=> {
            if(event.target.id !== "drum-machine" && event.target.className.indexOf("slider") === -1) {
              event.preventDefault();
            }
          });

          console.log("audio sample kit files loaded");
          // console.log(this.state.audioSampleKit1);
          // console.log(this.state.audioSampleKit2);
          // console.log(this.state.audioSampleKit3);
      });
    });
  }

  render() {
    const audioLoaded = this.state.audioLoaded;

    if(audioLoaded === false) {
      return null;
    }
    else {
      return (
        <div>
          <div id="drum-machine">
            <DisplayLeft power={this.state.power} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} playbackArr={this.state.playbackArr} />

            <div id="machine-controls">
              <PowerContainer power={this.state.power} togglePower={this.togglePower} />
              <VolumeContainer volume={this.state.volume} setMasterVolume={this.setMasterVolume} />
              <Metronome audioCtx={this.state.audioCtx} power={this.state.power} volume={this.state.volume} metronomePlaying={this.state.metronomePlaying} toggleMetronomePlaying={this.toggleMetronomePlaying} />
            </div>

            <NoteModSpacerTop />
            <NoteGainControl audioCtx={this.state.audioCtx} setCurrentGain={this.setCurrentGain} />
            <NoteModSpacerBtm />

            <KitChoiceContainer power={this.state.power} setCurrentKit={this.setCurrentKit} currentKit={this.state.currentKit} />
            <DisplayRight power={this.state.power} currentKit={this.state.currentKit} currentPad={this.state.currentPad} />
            <TrackControls power={this.state.power} setCurrentTrack={this.setCurrentTrack} currentTrack={this.state.currentTrack} nowRecording={this.state.nowRecording} nowPlaying={this.state.nowPlaying} deleteRecording={this.deleteRecording} />
            <PlaybackControls power={this.state.power} playbackArr={this.state.playbackArr} playbackArrUndone={this.state.playbackArrUndone} startRecording={this.startRecording} nowRecording={this.state.nowRecording} startPlayback={this.startPlayback} nowPlaying={this.state.nowPlaying} stop={this.stop} undo={this.undo} />
            <PadContainer audioCtx={this.state.audioCtx} audioSampleKit1={this.state.audioSampleKit1}
              audioSampleKit2={this.state.audioSampleKit2} audioSampleKit3={this.state.audioSampleKit3}
              power={this.state.power} volume={this.state.volume} currentKit={this.state.currentKit}
              setCurrentPad={this.setCurrentPad} currentGain={this.state.currentGain} currentPitch={this.state.currentPitch}
              currentHighPass={this.state.currentHighPass} currentLowPass={this.state.currentLowPass}
              nowRecording={this.state.nowRecording} recordNote={this.recordNote}
            />
            <PitchControl audioCtx={this.state.audioCtx} power={this.state.power} setCurrentPitch={this.setCurrentPitch} />
            <PassFilter audioCtx={this.state.audioCtx} power={this.state.power} setCurrentHighPass={this.setCurrentHighPass} setCurrentLowPass={this.setCurrentLowPass} />
          </div>
        </div>
      );
    }
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<DrumMachine />, reactContainer);
