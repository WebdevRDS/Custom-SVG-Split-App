const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "../");

/* GET users listing. */
router.get('/list', function(req, res, next) {
  const files = fs.readdirSync(directoryPath + "public\\svg\\");
  res.send(files)
});

module.exports = router;
