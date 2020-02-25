const gm = require('gm');

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

    return image;
};

module.exports = {drawRectaglesOverImage}