// --- OLD EXAMPLE
// const playbackExample = [
//   {kit: "kit1", key: "A", time: 0}, {kit: "kit1", key: "A", time: 643}, {kit: "kit1", key: "A", time: 1286}, {kit: "kit1", key: "A", time: 2144}, {kit: "kit1", key: "A", time: 2787}, {kit: "kit1", key: "A", time: 3001},
//   {kit: "kit1", key: "A", time: 3430}, {kit: "kit1", key: "A", time: 4073}, {kit: "kit1", key: "A", time: 4716}, {kit: "kit1", key: "A", time: 5574}, {kit: "kit1", key: "A", time: 6217}, {kit: "kit1", key: "A", time: 6431},
//   {kit: "kit1", key: "A", time: 6860}, {kit: "kit1", key: "A", time: 7503}, {kit: "kit1", key: "A", time: 8146}, {kit: "kit1", key: "A", time: 9004}, {kit: "kit1", key: "A", time: 9647}, {kit: "kit1", key: "A", time: 9861},
//
//   {kit: "kit1", key: "D", time: 2573},
//   {kit: "kit1", key: "D", time: 6003},
//   {kit: "kit1", key: "D", time: 9443},
//
//   {kit: "kit1", key: "Z", time: 0}, {kit: "kit1", key: "Z", time: 214}, {kit: "kit1", key: "Z", time: 428}, {kit: "kit1", key: "Z", time: 642},
//   {kit: "kit1", key: "Z", time: 3430}, {kit: "kit1", key: "Z", time: 3644}, {kit: "kit1", key: "Z", time: 3858}, {kit: "kit1", key: "Z", time: 4072},
//   {kit: "kit1", key: "Z", time: 6860}, {kit: "kit1", key: "Z", time: 7074}, {kit: "kit1", key: "Z", time: 7288}, {kit: "kit1", key: "Z", time: 7502},
//
//   {kit: "kit1", key: "X", time: 856},
//   {kit: "kit1", key: "X", time: 4286},
//   {kit: "kit1", key: "X", time: 7716},
//
//   {kit: "kit1", key: "C", time: 857}, {kit: "kit1", key: "C", time: 2573},
//   {kit: "kit1", key: "C", time: 4287}, {kit: "kit1", key: "C", time: 6003},
//   {kit: "kit1", key: "C", time: 7717}, {kit: "kit1", key: "C", time: 9443},
//
//   {kit: "kit2", key: "Q", time: 214}, {kit: "kit2", key: "Q", time: 1715}, {kit: "kit2", key: "Q", time: 1929},
//   {kit: "kit2", key: "Q", time: 3644}, {kit: "kit2", key: "Q", time: 5145}, {kit: "kit2", key: "Q", time: 5350},
//   {kit: "kit2", key: "Q", time: 7074}, {kit: "kit2", key: "Q", time: 8593}, {kit: "kit2", key: "Q", time: 8807},
//
//   {kit: "kit2", key: "X", time: 0}, {kit: "kit2", key: "X", time: 643},
//   {kit: "kit2", key: "X", time: 3430}, {kit: "kit2", key: "X", time: 4073},
//   {kit: "kit2", key: "X", time: 6860}, {kit: "kit2", key: "X", time: 7503},
//
//   {kit: "kit2", key: "C", time: 1286},
//   {kit: "kit2", key: "C", time: 4716},
//   {kit: "kit2", key: "C", time: 8146},
//
//   {kit: "kit3", key: "Q", time: 0}, {kit: "kit3", key: "Q", time: 214}, {kit: "kit3", key: "Q", time: 428}, {kit: "kit3", key: "Q", time: 642},
//   {kit: "kit3", key: "Q", time: 856}, {kit: "kit3", key: "Q", time: 963}, {kit: "kit3", key: "Q", time: 1070}, {kit: "kit3", key: "Q", time: 1284}, {kit: "kit3", key: "Q", time: 1498},
//   {kit: "kit3", key: "Q", time: 1712}, {kit: "kit3", key: "Q", time: 1926}, {kit: "kit3", key: "Q", time: 2140}, {kit: "kit3", key: "Q", time: 2354},
//   {kit: "kit3", key: "Q", time: 2568}, {kit: "kit3", key: "Q", time: 2675}, {kit: "kit3", key: "Q", time: 2782}, {kit: "kit3", key: "Q", time: 2996}, {kit: "kit3", key: "Q", time: 3210},
//   {kit: "kit3", key: "Q", time: 3424}, {kit: "kit3", key: "Q", time: 3638}, {kit: "kit3", key: "Q", time: 3852}, {kit: "kit3", key: "Q", time: 4066},
//   {kit: "kit3", key: "Q", time: 4280}, {kit: "kit3", key: "Q", time: 4387}, {kit: "kit3", key: "Q", time: 4494}, {kit: "kit3", key: "Q", time: 4708}, {kit: "kit3", key: "Q", time: 4922},
//   {kit: "kit3", key: "Q", time: 5136}, {kit: "kit3", key: "Q", time: 5350}, {kit: "kit3", key: "Q", time: 5564}, {kit: "kit3", key: "Q", time: 5778},
//   {kit: "kit3", key: "Q", time: 5992}, {kit: "kit3", key: "Q", time: 6099}, {kit: "kit3", key: "Q", time: 6206}, {kit: "kit3", key: "Q", time: 6420}, {kit: "kit3", key: "Q", time: 6634},
//   {kit: "kit3", key: "Q", time: 6848}, {kit: "kit3", key: "Q", time: 7062}, {kit: "kit3", key: "Q", time: 7276}, {kit: "kit3", key: "Q", time: 7490},
//   {kit: "kit3", key: "Q", time: 7704}, {kit: "kit3", key: "Q", time: 7811}, {kit: "kit3", key: "Q", time: 7918}, {kit: "kit3", key: "Q", time: 8132}, {kit: "kit3", key: "Q", time: 8346},
//   {kit: "kit3", key: "Q", time: 8560}, {kit: "kit3", key: "Q", time: 8774}, {kit: "kit3", key: "Q", time: 8988}, {kit: "kit3", key: "Q", time: 9202},
//   {kit: "kit3", key: "Q", time: 9416}, {kit: "kit3", key: "Q", time: 9523}, {kit: "kit3", key: "Q", time: 9630}, {kit: "kit3", key: "Q", time: 9844},
//
//   {kit: "kit3", key: "W", time: 1286},
//   {kit: "kit3", key: "W", time: 4716},
//   {kit: "kit3", key: "W", time: 8146},
//
//   {kit: "kit3", key: "E", time: 857}, {kit: "kit3", key: "E", time: 2573},
//   {kit: "kit3", key: "E", time: 4287}, {kit: "kit3", key: "E", time: 6003},
//   {kit: "kit3", key: "E", time: 7717}, {kit: "kit3", key: "E", time: 9443},
//
//   {kit: "kit3", key: "S", time: 2144},
//   {kit: "kit3", key: "S", time: 5574},
//   {kit: "kit3", key: "S", time: 9004},
//
//   {kit: "kit3", key: "D", time: 1715}, {kit: "kit3", key: "D", time: 2358}, {kit: "kit3", key: "D", time: 3001},
//   {kit: "kit3", key: "D", time: 5145}, {kit: "kit3", key: "D", time: 5788}, {kit: "kit3", key: "D", time: 6431},
//   {kit: "kit3", key: "D", time: 8593}, {kit: "kit3", key: "D", time: 9236}, {kit: "kit3", key: "D", time: 9879},
//
//   {kit: "kit3", key: "X", time: 1715},
//   {kit: "kit3", key: "X", time: 5145},
//   {kit: "kit3", key: "X", time: 8593},
//
//   {kit: "kit3", key: "C", time: 6837}
// ];

const playbackExample = [
  // HATS - HI HAT 8
  {kit: "kit1", key: "Z", time: 242, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 403, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 564, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 726, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 968, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 1210, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 1452, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 1694, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 1936, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 2178, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 2420, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 2662, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 2904, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 2964, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 3025, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 3146, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 3388, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 3630, pitch: 0.0625, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 3872, pitch: 0.0625, noteGain: 0.8, lowPass: 5000},

  {kit: "kit1", key: "Z", time: 4114, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 4275, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 4436, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 4598, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 4840, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 5082, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 5324, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 5566, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 5808, pitch: 0.25, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 5868, pitch: 0.25, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 5929, pitch: 0.25, noteGain: 0.8, lowPass: 5000},
    {kit: "kit1", key: "Z", time: 5989, pitch: 0.25, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 6050, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 6292, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 6534, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 6776, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 7018, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 7260, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 7502, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 7623, pitch: 0.0625, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 7744, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 7865, pitch: 0.03125, noteGain: 0.8, lowPass: 5000},

  // HATS - OPEN HAT 1
  {kit: "kit1", key: "X", time: 2904, pitch: 0.5, noteGain: 0.8},
  {kit: "kit1", key: "X", time: 6776, pitch: 0.5, noteGain: 0.8},

  // 808S - MONEY
  {kit: "kit2", key: "C", time: 1694, pitch: 2, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 2662, pitch: 2, highPass: 500, lowPass: 2000},
  {kit: "kit2", key: "C", time: 3872, pitch: 1, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 4114, pitch: 2, highPass: 500, lowPass: 2000},
  {kit: "kit2", key: "C", time: 5566, pitch: 2, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 6534, pitch: 2, highPass: 500, lowPass: 2000},

  // HATS - HI HAT WORK
  {kit: "kit3", key: "Q", time: 2420, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 2480, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 2541, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 2601, pitch: 0.5, noteGain: 0.6},
  {kit: "kit3", key: "Q", time: 7260, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 7290, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 7320, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 7350, pitch: 2, noteGain: 0.5},

  // SNARES - DRIZZY
  {kit: "kit3", key: "E", time: 1210, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 3146, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 5082, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 7018, pitch: 0.25, noteGain: 0.5},

  // KICKS - KICK 36
  {kit: "kit3", key: "D", time: 1694, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 2662, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 3872, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 4114, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 5324, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 5566, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 6534, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 7502, pitch: 32, noteGain: 0.8},

// --- PHRASE 2

  // HATS - HI HAT 8
  {kit: "kit1", key: "Z", time: 7986, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 8147, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 8308, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 8470, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 8712, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 8954, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 9196, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 9438, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 9680, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 9922, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 10164, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 10406, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 10648, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 10708, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 10769, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 10890, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 11132, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 11374, pitch: 0.0625, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 11616, pitch: 0.0625, noteGain: 0.8, lowPass: 5000},

  {kit: "kit1", key: "Z", time: 11858, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 12019, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 12180, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 12342, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 12584, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 12826, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 13068, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 13310, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 13552, pitch: 0.25, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 13612, pitch: 0.25, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 13673, pitch: 0.25, noteGain: 0.8, lowPass: 5000},
    {kit: "kit1", key: "Z", time: 13733, pitch: 0.25, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 13794, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 14036, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 14278, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 14520, pitch: 0.125, noteGain: 0.8, lowPass: 5000},
  {kit: "kit1", key: "Z", time: 14762, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 15004, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 15246, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 15367, pitch: 0.0625, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 15488, pitch: 0.125, noteGain: 0.8, lowPass: 5000}, {kit: "kit1", key: "Z", time: 15609, pitch: 0.03125, noteGain: 0.8, lowPass: 5000},

  // HATS - OPEN HAT 1
  {kit: "kit1", key: "X", time: 10648, pitch: 0.5, noteGain: 0.8},
  {kit: "kit1", key: "X", time: 14520, pitch: 0.5, noteGain: 0.8},

  // 808S - MONEY
  {kit: "kit2", key: "C", time: 7986, pitch: 32, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 8712, pitch: 8, highPass: 500, lowPass: 2000},
  {kit: "kit2", key: "C", time: 9438, pitch: 2, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 10406, pitch: 2, highPass: 500, lowPass: 2000},
  {kit: "kit2", key: "C", time: 11616, pitch: 1, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 11858, pitch: 2, highPass: 500, lowPass: 2000},
  {kit: "kit2", key: "C", time: 13310, pitch: 2, highPass: 500, lowPass: 2000}, {kit: "kit2", key: "C", time: 14278, pitch: 2, highPass: 500, lowPass: 2000},

  // HATS - HI HAT WORK
  {kit: "kit3", key: "Q", time: 10164, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 10224, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 10285, pitch: 0.5, noteGain: 0.6}, {kit: "kit3", key: "Q", time: 10345, pitch: 0.5, noteGain: 0.6},
  {kit: "kit3", key: "Q", time: 15004, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 15034, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 15064, pitch: 2, noteGain: 0.5}, {kit: "kit3", key: "Q", time: 15094, pitch: 2, noteGain: 0.5},

  // SNARES - DRIZZY
  {kit: "kit3", key: "E", time: 8954, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 10890, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 12826, pitch: 0.25, noteGain: 0.5},
  {kit: "kit3", key: "E", time: 14762, pitch: 0.25, noteGain: 0.5},

  // KICKS - KICK 36
  {kit: "kit3", key: "D", time: 7986, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 9438, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 10406, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 11616, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 11858, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 13068, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 13310, pitch: 32, noteGain: 0.8}, {kit: "kit3", key: "D", time: 14278, pitch: 32, noteGain: 0.8},
  {kit: "kit3", key: "D", time: 15246, pitch: 32, noteGain: 0.8}
];
