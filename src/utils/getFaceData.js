const {googleVisionAPI} = require("../../package.json");
const fetch = require('node-fetch'); 
const url = googleVisionAPI.endpoint + googleVisionAPI.key;

const callFaceApi = (binaryImage) => {

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
        console.log(json)
        debugger;
    })
    .catch(console.error);
};

module.exports = {callFaceApi};