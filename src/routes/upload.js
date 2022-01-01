const express = require("express");
const router = express.Router();
const app = express();
const fileupload = require("express-fileupload");
const song = require("../models/songs");
app.use(fileupload());
//login page
router.get("/", (req, res) => {
  res.render("upload");
});

router.post("/", (req, res) => {
  const newSong = new song({
    filename: req.files.file.name,
    data: req.files.file.data
  });

  newSong.save().then((value) => {
    console.log(value);
  });
  res.send(" uploded " + req.files.file.name);
});

module.exports = router;
