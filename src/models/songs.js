const mongoose = require("mongoose");
const SongSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Songs = mongoose.model("Song", SongSchema);

module.exports = Songs;
