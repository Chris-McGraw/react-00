let playbackTimeouts = [];
let playbackFinishTimeout = "";

let recordingTimeout = "";

let nowRecording = false;
let nowPlaying = false;
let start = 0;

let playbackArrPrevious = [];
let playbackArrUndone = [];
let playbackArr = [];

let controlBtns = document.getElementsByClassName("control-btn");
let controlBtnGlows = document.getElementsByClassName("control-btn-glow");

const playLine = document.getElementById("play-line");

const displayRight = document.getElementById("display-right");

const volumeKnob = document.getElementById("volume-knob");
let volume = 100;

const powerSwitch = document.getElementById("power-switch");
let power = "on";

let drumPads = document.getElementsByClassName("drum-pad");
let padGlows = document.getElementsByClassName("pad-glow");

let padQ = document.getElementById("pad-q");
let audioQ = document.getElementById("Q");

let padW = document.getElementById("pad-w");
let audioW = document.getElementById("W");

let padE = document.getElementById("pad-e");
let audioE = document.getElementById("E");

let padA = document.getElementById("pad-a");
let audioA = document.getElementById("A");

let padS = document.getElementById("pad-s");
let audioS = document.getElementById("S");

let padD = document.getElementById("pad-d");
let audioD = document.getElementById("D");

let padZ = document.getElementById("pad-z");
let audioZ = document.getElementById("Z");

let padX = document.getElementById("pad-x");
let audioX = document.getElementById("X");

let padC = document.getElementById("pad-c");
let audioC = document.getElementById("C");

// ---

const toggleVolume = function() {
  if(volume === 100) {
    volume = 0;
    volumeKnob.classList.add("volume-muted");
  }
  else {
    volume = 100;
    volumeKnob.classList.remove("volume-muted");
  }
}

const togglePower = function() {
  if(power === "on") {
    power = "off";
    powerSwitch.classList.add("slide-switch");
  }
  else {
    power = "on";
    powerSwitch.classList.remove("slide-switch");
  }

  toggleDisplayPower();
}

const toggleDisplayPower = function() {
  if(power === "on") {
    for(var i = 0; i < drumPads.length; i++) {
      drumPads[i].classList.remove("pad-powered-down");
    }

    for(var i = 0; i < padGlows.length; i++) {
      padGlows[i].classList.remove("pad-glow-powered-down");
    }

    for(var i = 0; i < controlBtns.length; i++) {
      controlBtns[i].classList.remove("pad-powered-down");
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      controlBtnGlows[i].classList.remove("pad-glow-powered-down");
    }
  }
  else {
    for(var i = 0; i < drumPads.length; i++) {
      drumPads[i].classList.add("pad-powered-down");
    }

    for(var i = 0; i < padGlows.length; i++) {
      padGlows[i].classList.add("pad-glow-powered-down");
    }

    for(var i = 0; i < controlBtns.length; i++) {
      controlBtns[i].classList.add("pad-powered-down");
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      controlBtnGlows[i].classList.add("pad-glow-powered-down");
    }
  }
}

const deleteRecording = function() {
  if(nowRecording === false && nowPlaying === false && playbackArr.length > 0) {
    playbackArr = [];

    document.querySelectorAll(".note-block").forEach(function(elem) {
      elem.remove()
    });

    console.log( "RECORDING DELETED" );
  }
}

const startRecording = function() {
  if(nowRecording === false && nowPlaying === false) {
    if(playbackArr.length > 0) {
      startPlayback();
    }

    if(nowPlaying === true) {
      playbackArrPrevious = playbackArr.slice();

      for(var i = 0; i < controlBtns.length; i++) {
        controlBtns[i].classList.remove("pad-powered-down");
      }

      for(var i = 0; i < controlBtnGlows.length; i++) {
        controlBtnGlows[i].classList.remove("pad-glow-powered-down");
      }
    }

    for(var i = 0; i < controlBtns.length; i++) {
      if(controlBtns[i].id === "play-button" || controlBtns[i].id === "undo-button") {
        controlBtns[i].classList.add("pad-powered-down");
      }
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      if(controlBtnGlows[i].parentElement.id === "play-button" || controlBtnGlows[i].parentElement.id === "undo-button") {
        controlBtnGlows[i].classList.add("pad-glow-powered-down");
      }
    }

    nowRecording = true;
    start = Date.now();
    playLine.classList.add("move-play-line");

    console.log( "RECORDING STARTED" );

    recordingTimeout = setTimeout(function() {
      nowRecording = false;
      playLine.classList.remove("move-play-line");

      for(var i = 0; i < controlBtns.length; i++) {
        controlBtns[i].classList.remove("pad-powered-down");
      }

      for(var i = 0; i < controlBtnGlows.length; i++) {
        controlBtnGlows[i].classList.remove("pad-glow-powered-down");
      }

      setPlaybackArrUndone();

      console.log( "RECORDING FINISHED" );
      console.log( playbackArr );
    }, 10000);
  }
}

function setPlaybackArrUndone() {
  if(playbackArrPrevious.length === 0 && playbackArr.length > 0) {
    playbackArrUndone = [];
  }
  else if( arraysEqual(playbackArrPrevious, playbackArr) === false ) {
    playbackArrUndone = playbackArrPrevious;
  }
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const startPlayback = function() {
  if(nowRecording === false && nowPlaying === false) {
    nowPlaying = true;
    playLine.classList.add("move-play-line");

    for(var i = 0; i < controlBtns.length; i++) {
      if(controlBtns[i].id === "record-button" || controlBtns[i].id === "undo-button") {
        controlBtns[i].classList.add("pad-powered-down");
      }
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      if(controlBtnGlows[i].parentElement.id === "record-button" || controlBtnGlows[i].parentElement.id === "undo-button") {
        controlBtnGlows[i].classList.add("pad-glow-powered-down");
      }
    }

    playbackTimeouts = [];

    console.log( "PLAYBACK STARTED" );

    playbackArr.forEach(function(i) {
      playbackTimeouts.push( setTimeout(function() {
        if(i.key === "Q") {
          removePadPress();
          playSample(audioQ);
        }
        else if(i.key === "W") {
          removePadPress();
          playSample(audioW);
        }
        else if(i.key === "E") {
          removePadPress();
          playSample(audioE);
        }
        else if(i.key === "A") {
          removePadPress();
          playSample(audioA);
        }
        else if(i.key === "S") {
          removePadPress();
          playSample(audioS);
        }
        else if(i.key === "D") {
          removePadPress();
          playSample(audioD);
        }
        else if(i.key === "Z") {
          removePadPress();
          playSample(audioZ);
        }
        else if(i.key === "X") {
          removePadPress();
          playSample(audioX);
        }
        else if(i.key === "C") {
          removePadPress();
          playSample(audioC);
        }
      }, i.time) );
    });

    // console.log(playbackTimeouts);

    playbackFinishTimeout = setTimeout(function() {
      nowPlaying = false;
      playLine.classList.remove("move-play-line");

      for(var i = 0; i < controlBtns.length; i++) {
        controlBtns[i].classList.remove("pad-powered-down");
      }

      for(var i = 0; i < controlBtnGlows.length; i++) {
        controlBtnGlows[i].classList.remove("pad-glow-powered-down");
      }

      removePadPress();

      console.log("PLAYBACK FINISHED");

      if(nowRecording === false) {
        setTimeout(function() {
          stop();
          startPlayback();
        }, 20);
      }

    }, 10000);
  }
}

const appendNoteToScreen = function(key, time) {
  if(key === "Q") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-808");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-9").appendChild(noteBlock);
  }

  else if(key === "W") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-808");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-8").appendChild(noteBlock);
  }

  else if(key === "E") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-808");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-7").appendChild(noteBlock);
  }

  else if(key === "A") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-kick");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-6").appendChild(noteBlock);
  }

  else if(key === "S") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-snare");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-5").appendChild(noteBlock);
  }

  else if(key === "D") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-snare");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-4").appendChild(noteBlock);
  }

  else if(key === "Z") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-hat");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-3").appendChild(noteBlock);
  }

  else if(key === "X") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-hat");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-2").appendChild(noteBlock);
  }

  else if(key === "C") {
    let noteBlock = document.createElement("DIV");
    noteBlock.setAttribute("class", "note-block note-block-clap");

    let noteBlockTiming = time / 1000;
    noteBlock.setAttribute("style", "left:" + (noteBlockTiming.toFixed(1) * 10) + "%");

    document.getElementById("test-line-1").appendChild(noteBlock);
  }
}

const recordNote = function(key) {
  if(nowRecording === true && event !== undefined) {
    playbackArr.push({key:key, time:(Date.now() - start)});

    appendNoteToScreen(key, (Date.now() - start));
  }
}

const stop = function() {
  if(nowRecording === true) {
    clearTimeout(recordingTimeout);

    nowRecording = false;
    playLine.classList.remove("move-play-line");

    for(var i = 0; i < controlBtns.length; i++) {
      controlBtns[i].classList.remove("pad-powered-down");
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      controlBtnGlows[i].classList.remove("pad-glow-powered-down");
    }

    setPlaybackArrUndone();

    console.log("RECORDING STOPPED");
    console.log( playbackArr );
  }

  if(nowPlaying === true) {
    playbackTimeouts.forEach(function(i) {
      clearTimeout(i);
    });

    clearTimeout(playbackFinishTimeout);

    nowPlaying = false;
    playLine.classList.remove("move-play-line");

    for(var i = 0; i < controlBtns.length; i++) {
      controlBtns[i].classList.remove("pad-powered-down");
    }

    for(var i = 0; i < controlBtnGlows.length; i++) {
      controlBtnGlows[i].classList.remove("pad-glow-powered-down");
    }

    removePadPress();

    console.log("PLAYBACK STOPPED");
  }
}

const undo = function() {
  if(arraysEqual(playbackArr, playbackArrUndone) === false) {
    document.querySelectorAll(".note-block").forEach(function(elem) {
      elem.remove()
    });

    playbackArr = playbackArrUndone;

    playbackArr.forEach(function(i) {
      appendNoteToScreen(i.key, i.time);
    });

    console.log("UNDO");
  }
}

const playSample = function(audio) {
  audio.pause();
  audio.currentTime = 0;
  audio.play();

  // console.log(event);

  switch(audio.id) {
    case "Q":
      recordNote("Q");
      padQ.classList.add("pad-pressed");
      displayRight.textContent = "";
      displayRight.textContent = "808s - Loaded";
      break;
    case "W":
    recordNote("W");
      padW.classList.add("pad-pressed");
      displayRight.textContent = "";
      displayRight.textContent = "808s - Starburst";
      break;
    case "E":
    recordNote("E");
      padE.classList.add("pad-pressed");
      displayRight.textContent = "";
      displayRight.textContent = "808s - Lettuce";
      break;
    case "A":
      recordNote("A");
      padA.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Snares - Dippy";
      displayRight.textContent = "Kicks - Kick 5";
      break;
    case "S":
      recordNote("S");
      padS.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Snares - Doo";
      displayRight.textContent = "Snares - Dippy";
      break;
    case "D":
      recordNote("D");
      padD.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Hats - Hi Hat 8";
      displayRight.textContent = "Snares - Doo";
      break;
    case "Z":
      recordNote("Z");
      padZ.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Hats - Open Hat 1";
      displayRight.textContent = "Hats - Hi Hat 8";
      break;
    case "X":
      recordNote("X");
      padX.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Claps - Clap 1";
      displayRight.textContent = "Hats - Open Hat 1";
      break;
    case "C":
      recordNote("C");
      padC.classList.add("pad-pressed");
      displayRight.textContent = "";
      // displayRight.textContent = "Kicks - Kick 5";
      displayRight.textContent = "Claps - Clap 1";
      break;
    default:
      break;
  };
}


const removePadPress = function() {
  padQ.classList.remove("pad-pressed");
  padW.classList.remove("pad-pressed");
  padE.classList.remove("pad-pressed");
  padA.classList.remove("pad-pressed");
  padS.classList.remove("pad-pressed");
  padD.classList.remove("pad-pressed");
  padZ.classList.remove("pad-pressed");
  padX.classList.remove("pad-pressed");
  padC.classList.remove("pad-pressed");
}

//---

document.addEventListener("keydown", function(event) {
  // KEY PRESS Q
  if(event.keyCode === 81) {
    playSample(audioQ);
  }

  // KEY PRESS W
  else if(event.keyCode === 87) {
    playSample(audioW);
  }

  // KEY PRESS E
  else if(event.keyCode === 69) {
    playSample(audioE);
  }

  // KEY PRESS A
  else if(event.keyCode === 65) {
    playSample(audioA);
  }

  // KEY PRESS S
  else if(event.keyCode === 83) {
    playSample(audioS);
  }

  // KEY PRESS D
  else if(event.keyCode === 68) {
    playSample(audioD);
  }

  // KEY PRESS Z
  else if(event.keyCode === 90) {
    playSample(audioZ);
  }

  // KEY PRESS X
  else if(event.keyCode === 88) {
    playSample(audioX);
  }

  // KEY PRESS C
  else if(event.keyCode === 67) {
    playSample(audioC);
  }
});

document.addEventListener("keyup", function(event) {
  removePadPress();
});

for(var i = 0; i < controlBtns.length; i++) {
  controlBtns[i].addEventListener("mousedown", function() {
    this.classList.add("control-pressed");
  });

  controlBtns[i].addEventListener("mouseup", function() {
    this.classList.remove("control-pressed");
  });
}
