const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require("multer");
const memoryStorage = multer.memoryStorage();
const upload = multer({storage: memoryStorage});
const {callFaceApi} = require("../../utils/getFaceData.js");

const indexfile = path.join(__dirname + "../../../Views/Home/index.html");

router.get("/", (req, res) => {
    res.sendFile(indexfile);
});

router.post("/getFace", upload.single('image'), async (req, res) => {
    const faceImage = req.file.buffer.toString("base64");
    callFaceApi(faceImage, req.file.buffer).then(response => {
        response.toBuffer((err, buffer) => {
            if(err) console.log(err)
            res.writeHead(200, {
                'Content-Type': 'image/png',
                'Content-Length': buffer.length
              });
              res.end(buffer); 
        });
    })
    .catch(console.error());
});


module.exports = router;