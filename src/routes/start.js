const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const song = require("../models/songs");
let filelist = [];
let songtext = "Test";

router.get("/", (req, res) => {
  song.find({ filename: { $in: [/^.*\.cho/g] } }, function (err, result) {
    if (err) throw err;
    filelist = [];
    for (let i in result) {
      filelist.push(result[i].filename);
    }
    res.render("start", { filelist });
  });
});
router.get("/song/:file", (req, res) => {
  const file = req.params.file;

  song.findOne({ filename: file }, function (err, result) {
    if (err) {
      throw err;
    }
    songtext = result.data;
    res.render("song", { songtext });
    console.log(file + " loaded");
  });
});
module.exports = router;
