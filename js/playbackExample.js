const playbackExample = [
  {kit: "kit1", key: "A", time: 0}, {kit: "kit1", key: "A", time: 643}, {kit: "kit1", key: "A", time: 1286}, {kit: "kit1", key: "A", time: 2144}, {kit: "kit1", key: "A", time: 2787}, {kit: "kit1", key: "A", time: 3001},
  {kit: "kit1", key: "A", time: 3430}, {kit: "kit1", key: "A", time: 4073}, {kit: "kit1", key: "A", time: 4716}, {kit: "kit1", key: "A", time: 5574}, {kit: "kit1", key: "A", time: 6217}, {kit: "kit1", key: "A", time: 6431},
  {kit: "kit1", key: "A", time: 6860}, {kit: "kit1", key: "A", time: 7503}, {kit: "kit1", key: "A", time: 8146}, {kit: "kit1", key: "A", time: 9004}, {kit: "kit1", key: "A", time: 9647}, {kit: "kit1", key: "A", time: 9861},

  {kit: "kit1", key: "D", time: 2573},
  {kit: "kit1", key: "D", time: 6003},
  {kit: "kit1", key: "D", time: 9443},

  {kit: "kit1", key: "Z", time: 0}, {kit: "kit1", key: "Z", time: 214}, {kit: "kit1", key: "Z", time: 428}, {kit: "kit1", key: "Z", time: 642},
  {kit: "kit1", key: "Z", time: 3430}, {kit: "kit1", key: "Z", time: 3644}, {kit: "kit1", key: "Z", time: 3858}, {kit: "kit1", key: "Z", time: 4072},
  {kit: "kit1", key: "Z", time: 6860}, {kit: "kit1", key: "Z", time: 7074}, {kit: "kit1", key: "Z", time: 7288}, {kit: "kit1", key: "Z", time: 7502},

  {kit: "kit1", key: "X", time: 856},
  {kit: "kit1", key: "X", time: 4286},
  {kit: "kit1", key: "X", time: 7716},

  {kit: "kit1", key: "C", time: 857}, {kit: "kit1", key: "C", time: 2573},
  {kit: "kit1", key: "C", time: 4287}, {kit: "kit1", key: "C", time: 6003},
  {kit: "kit1", key: "C", time: 7717}, {kit: "kit1", key: "C", time: 9443},

  {kit: "kit2", key: "Q", time: 214}, {kit: "kit2", key: "Q", time: 1715}, {kit: "kit2", key: "Q", time: 1929},
  {kit: "kit2", key: "Q", time: 3644}, {kit: "kit2", key: "Q", time: 5145}, {kit: "kit2", key: "Q", time: 5350},
  {kit: "kit2", key: "Q", time: 7074}, {kit: "kit2", key: "Q", time: 8593}, {kit: "kit2", key: "Q", time: 8807},

  {kit: "kit2", key: "X", time: 0}, {kit: "kit2", key: "X", time: 643},
  {kit: "kit2", key: "X", time: 3430}, {kit: "kit2", key: "X", time: 4073},
  {kit: "kit2", key: "X", time: 6860}, {kit: "kit2", key: "X", time: 7503},

  {kit: "kit2", key: "C", time: 1286},
  {kit: "kit2", key: "C", time: 4716},
  {kit: "kit2", key: "C", time: 8146},

  {kit: "kit3", key: "Q", time: 0}, {kit: "kit3", key: "Q", time: 214}, {kit: "kit3", key: "Q", time: 428}, {kit: "kit3", key: "Q", time: 642},
  {kit: "kit3", key: "Q", time: 856}, {kit: "kit3", key: "Q", time: 963}, {kit: "kit3", key: "Q", time: 1070}, {kit: "kit3", key: "Q", time: 1284}, {kit: "kit3", key: "Q", time: 1498},
  {kit: "kit3", key: "Q", time: 1712}, {kit: "kit3", key: "Q", time: 1926}, {kit: "kit3", key: "Q", time: 2140}, {kit: "kit3", key: "Q", time: 2354},
  {kit: "kit3", key: "Q", time: 2568}, {kit: "kit3", key: "Q", time: 2675}, {kit: "kit3", key: "Q", time: 2782}, {kit: "kit3", key: "Q", time: 2996}, {kit: "kit3", key: "Q", time: 3210},
  {kit: "kit3", key: "Q", time: 3424}, {kit: "kit3", key: "Q", time: 3638}, {kit: "kit3", key: "Q", time: 3852}, {kit: "kit3", key: "Q", time: 4066},
  {kit: "kit3", key: "Q", time: 4280}, {kit: "kit3", key: "Q", time: 4387}, {kit: "kit3", key: "Q", time: 4494}, {kit: "kit3", key: "Q", time: 4708}, {kit: "kit3", key: "Q", time: 4922},
  {kit: "kit3", key: "Q", time: 5136}, {kit: "kit3", key: "Q", time: 5350}, {kit: "kit3", key: "Q", time: 5564}, {kit: "kit3", key: "Q", time: 5778},
  {kit: "kit3", key: "Q", time: 5992}, {kit: "kit3", key: "Q", time: 6099}, {kit: "kit3", key: "Q", time: 6206}, {kit: "kit3", key: "Q", time: 6420}, {kit: "kit3", key: "Q", time: 6634},
  {kit: "kit3", key: "Q", time: 6848}, {kit: "kit3", key: "Q", time: 7062}, {kit: "kit3", key: "Q", time: 7276}, {kit: "kit3", key: "Q", time: 7490},
  {kit: "kit3", key: "Q", time: 7704}, {kit: "kit3", key: "Q", time: 7811}, {kit: "kit3", key: "Q", time: 7918}, {kit: "kit3", key: "Q", time: 8132}, {kit: "kit3", key: "Q", time: 8346},
  {kit: "kit3", key: "Q", time: 8560}, {kit: "kit3", key: "Q", time: 8774}, {kit: "kit3", key: "Q", time: 8988}, {kit: "kit3", key: "Q", time: 9202},
  {kit: "kit3", key: "Q", time: 9416}, {kit: "kit3", key: "Q", time: 9523}, {kit: "kit3", key: "Q", time: 9630}, {kit: "kit3", key: "Q", time: 9844},

  {kit: "kit3", key: "W", time: 1286},
  {kit: "kit3", key: "W", time: 4716},
  {kit: "kit3", key: "W", time: 8146},

  {kit: "kit3", key: "E", time: 857}, {kit: "kit3", key: "E", time: 2573},
  {kit: "kit3", key: "E", time: 4287}, {kit: "kit3", key: "E", time: 6003},
  {kit: "kit3", key: "E", time: 7717}, {kit: "kit3", key: "E", time: 9443},

  {kit: "kit3", key: "S", time: 2144},
  {kit: "kit3", key: "S", time: 5574},
  {kit: "kit3", key: "S", time: 9004},

  {kit: "kit3", key: "D", time: 1715}, {kit: "kit3", key: "D", time: 2358}, {kit: "kit3", key: "D", time: 3001},
  {kit: "kit3", key: "D", time: 5145}, {kit: "kit3", key: "D", time: 5788}, {kit: "kit3", key: "D", time: 6431},
  {kit: "kit3", key: "D", time: 8593}, {kit: "kit3", key: "D", time: 9236}, {kit: "kit3", key: "D", time: 9879},

  {kit: "kit3", key: "X", time: 1715},
  {kit: "kit3", key: "X", time: 5145},
  {kit: "kit3", key: "X", time: 8593},

  {kit: "kit3", key: "C", time: 6837}
];

// const playbackTestArray = [
//   {kit: "kit3", key: "D", time: 0, pitch: 32}, {kit: "kit3", key: "D", time: 1452, pitch: 32},
//   {kit: "kit3", key: "D", time: 3630, pitch: 32}, {kit: "kit3", key: "D", time: 3872, pitch: 32},
//   {kit: "kit3", key: "D", time: 5082, pitch: 32}, {kit: "kit3", key: "D", time: 5324, pitch: 32},
//   {kit: "kit3", key: "D", time: 6292, pitch: 32}, {kit: "kit3", key: "D", time: 7260, pitch: 32},
//
//   {kit: "kit3", key: "E", time: 968, pitch: 0.25, noteGain: 0.7}, {kit: "kit3", key: "E", time: 2904, pitch: 0.25, noteGain: 0.7}, {kit: "kit3", key: "E", time: 4840, pitch: 0.25, noteGain: 0.7}, {kit: "kit3", key: "E", time: 6776, pitch: 0.25, noteGain: 0.7},
//
//   {kit: "kit1", key: "Z", time: 0, pitch: 0.125, noteGain: 0.8}, {kit: "kit1", key: "Z", time: 242, pitch: 0.125, noteGain: 0.8}, {kit: "kit1", key: "Z", time: 363, pitch: 0.125, noteGain: 0.8}, {kit: "kit1", key: "Z", time: 484, pitch: 0.125, noteGain: 0.8}, {kit: "kit1", key: "Z", time: 726, pitch: 0.125, noteGain: 0.8},
//   {kit: "kit1", key: "Z", time: 968, pitch: 0.125}, {kit: "kit1", key: "Z", time: 1210, pitch: 0.125}, {kit: "kit1", key: "Z", time: 1452, pitch: 0.125}, {kit: "kit1", key: "Z", time: 1694, pitch: 0.125},
//   {kit: "kit1", key: "Z", time: 1936, pitch: 0.125}, {kit: "kit1", key: "Z", time: 2178, pitch: 0.125}, {kit: "kit1", key: "Z", time: 2420, pitch: 0.125}, {kit: "kit1", key: "Z", time: 2662, pitch: 0.125}, {kit: "kit1", key: "Z", time: 2722, pitch: 0.125}, {kit: "kit1", key: "Z", time: 2783, pitch: 0.125},
//   {kit: "kit1", key: "Z", time: 2904, pitch: 0.125}, {kit: "kit1", key: "Z", time: 3146, pitch: 0.125}, {kit: "kit1", key: "Z", time: 3388, pitch: 0.0625}, {kit: "kit1", key: "Z", time: 3630, pitch: 0.0625},
// // -- measure 2
//   {kit: "kit1", key: "Z", time: 3872, pitch: 0.125}, {kit: "kit1", key: "Z", time: 4114, pitch: 0.125}, {kit: "kit1", key: "Z", time: 4235, pitch: 0.125}, {kit: "kit1", key: "Z", time: 4356, pitch: 0.125}, {kit: "kit1", key: "Z", time: 4598, pitch: 0.125},
//   {kit: "kit1", key: "Z", time: 4840, pitch: 0.125}, {kit: "kit1", key: "Z", time: 5082, pitch: 0.125}, {kit: "kit1", key: "Z", time: 5324, pitch: 0.125}, {kit: "kit1", key: "Z", time: 5566, pitch: 0.25},          {kit: "kit1", key: "Z", time: 5626, pitch: 0.25}, {kit: "kit1", key: "Z", time: 5687, pitch: 0.25}, {kit: "kit1", key: "Z", time: 5747, pitch: 0.25},
//   {kit: "kit1", key: "Z", time: 5808, pitch: 0.125}, {kit: "kit1", key: "Z", time: 6050, pitch: 0.125}, {kit: "kit1", key: "Z", time: 6292, pitch: 0.125}, {kit: "kit1", key: "Z", time: 6534, pitch: 0.125},
//   {kit: "kit1", key: "Z", time: 6776, pitch: 0.125}, {kit: "kit1", key: "Z", time: 7018, pitch: 0.125}, {kit: "kit1", key: "Z", time: 7260, pitch: 0.125}, {kit: "kit1", key: "Z", time: 7381, pitch: 0.0625}, {kit: "kit1", key: "Z", time: 7502, pitch: 0.125}, {kit: "kit1", key: "Z", time: 7623, pitch: 0.03125}
// ];
