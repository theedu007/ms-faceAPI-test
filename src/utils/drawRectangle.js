const gm = require('gm');
const fs = require('fs');

const drawRectaglesOverImage = (faceAnnotationsArray, imageBuffer) => {
    const facesData = faceAnnotationsArray;
    const bufferData = imageBuffer;
    let image = gm(bufferData);
    let coordinates = [];

    facesData.forEach(face => {
        const faceVertices = face.boundingPoly.vertices;
        coordinates.push(faceVertices.map(element => [element.x, element.y]))
    });

    coordinates.forEach(point => {
        image.stroke("rgb(255,0,0)", 3)
        .fill("none")
        .drawPolygon(point[0], point[1], point[2], point[3])
    });

    image.write("/test/hola1.png", function (err) {
        if (err) return console.log(err);
        console.log('Created an image from a Buffer!');
    });

};

module.exports = {drawRectaglesOverImage}