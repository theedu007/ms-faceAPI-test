const {faceAPI} = require("../../package.json");
const fetch = require('node-fetch'); 
const endPointParams = {
    returnFaceId : false,
    returnFaceLandmarks : false,
};
const metadata =  {
    'Content-Type' : "application/octet-stream",
    'Ocp-Apim-Subscription-Key' : faceAPI.key
};
const callFaceApi = (binaryImage) => {
    const header = new fetch.Headers(metadata);
    const init = { 
        method: 'POST',
        headers: header,
        body: binaryImage
    };
    const urlparams = Object.entries(endPointParams).map(([key, val]) => `${key}=${val}`).join('&');
    const url = faceAPI.endpoint + urlparams;
    const apiCall = fetch(url,init).then(res =>{
        const a = res;
        debugger;
    }).catch(console.error);
};

module.exports = {callFaceApi};