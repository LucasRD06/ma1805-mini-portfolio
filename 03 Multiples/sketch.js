let theText = ["JUST", "DO", "IT."];
let word = theText[0];
let i = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(2);
}

function draw() {
  background(0);

  // White text
  fill(255);
  textSize(70);
  text(word, 100, height/2);

  word = theText[i];
  i = i + 1;

  if (i >= theText.length) {
    i = 0;
  }

  console.log(i);
}

