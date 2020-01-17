const express = require('express');
const router = express.Router();
const path = require("path");
const indexfile = path.join(__dirname + "../../../Views/Home/index.html");

router.get("/", (req, res) => {
    res.sendFile(indexfile);
});


module.exports = router;