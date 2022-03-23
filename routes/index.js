var express = require("express");
var router = express.Router();
const fs = require("fs");
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

router.get("/filenames", function (req, res) {
  console.log("function entered.");
  var filenames = new Array();
  fs.readdirSync(path.join(__dirname, "..", "public", "images")).forEach(
    (file) => {
      filenames.push(file);
    }
  );
  console.log(`filenames is ${filenames}`);
  res.send(JSON.stringify(filenames));
});

module.exports = router;
