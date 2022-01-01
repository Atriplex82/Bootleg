var express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const expressEjsLayout = require("express-ejs-layouts");
const fileupload = require("express-fileupload");
const path = require("path");

const url =
  "mongodb+srv://<username>:<password>@cluster0.dhlaf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB_connected"))
  .catch((err) => console.log(err));

//EJS
app.set("view engine", "ejs");
app.use(expressEjsLayout);

//BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());
//create a server object:
//Routes
app.use("/", require("./routes/start"));
app.use("/upload", require("./routes/upload"));
app.use("/song/static", express.static(__dirname + "/public"));
app.listen(3000);
