// Author:

// Global UI Variables
//let canvasDiv;

// Global ML Variables
//let mobilenet;

function setup() {

}

function draw() {

}

function modelReady() {

}

function resetCanvas() {

}

function handleFile(file) {
  if(file.type === "image") {
    img = loadImage(file.data, imageReady);
  } else {
    img = null;
  }
}

function imageReady() {

}

function predictImage() {

}

function gotResults(error, results) {

}
