let myImage;
let myText;
let theText = ["JUST", "DO", "IT."];
let word = theText[0];
let i = 0;

function preload() {
  myImage = loadImage('nike.jpg');
  myText = loadImage('Text.png');
}

function setup() {
  createCanvas(700, 467);
  frameRate(2);
}

function draw() {
  background(0, 100, 255); // Blue background

  // Uploaded media text (image)
  image(myText, 50, 10, 600, 65);

  // Nike shoe image
  image(myImage, 100, 100, 500, 250);

  // Black text
  fill(0);
  textSize(60);
  textAlign(CENTER);
  text(word, 350, 420);

  // Changes the word
  word = theText[i];
  i = i + 1;

  if (i >= theText.length) {
    i = 0;
  }
}
