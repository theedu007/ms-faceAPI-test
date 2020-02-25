const {googleVisionAPI} = require("../../package.json");
const fetch = require('node-fetch'); 
const url = googleVisionAPI.endpoint + googleVisionAPI.key;
const {drawRectaglesOverImage}  = require('./drawRectangle');

const callFaceApi = (binaryImage, imageBuffer) => {

    const imageObj = {
        image: {
            content: binaryImage
        },
        features: [{
            type: "FACE_DETECTION",
            maxResults: 5
        }]
    };

    const requestBody = {
        requests: [
            imageObj
        ]
    };

    const apiCall = fetch(url, {method: "POST", body: JSON.stringify(requestBody)})
    .then(res => res.json())
    .then(json => {
        const responseArray = json.responses;
        const faceAnnotationsData = responseArray[0].faceAnnotations;
        return drawRectaglesOverImage(faceAnnotationsData, imageBuffer);
    })
    .catch(console.error);
    return apiCall;
};

module.exports = {callFaceApi};