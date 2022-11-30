let slider
function preload() {
}
function setup() {
  createCanvas(400, 400);
  createCanvas(windowWidth, windowHeight,2, WEBGL);
  slider = createSlider (650,750,650)
  slider.position (100,100)
}

function draw() {

}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}