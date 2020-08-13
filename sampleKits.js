const sampleKits = [
  {
    Q: "audio/808s/loaded.wav",
    W: "audio/808s/starburst.wav"
  },
  {
    Q: "audio/808s/chirp.wav",
    W: "audio/808s/chirp.wav"
  }
];

const sampleKitsTest = {
  kit1: {
    Q: {src: "audio/808s/loaded.wav",
    desc: "808s - Loaded"
    },
    W: {src: "audio/808s/starburst.wav",
    desc: "808s - Starburst"
    },
  }
};

console.log(sampleKitsTest.kit1.Q.src);
