let i = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 100, 255); // Blue sky as a background

  fill(0, 255, 0); // Green
  rect(0, 350, 400, 50); // Grass

  fill(255, 255, 0); // Yellow
  circle(i, 150, 60); // Sun

  fill(150, 150, 150); // Grey
  circle(400 - i, 150, 60); // Moon

  i = i + 1; // this moves the sun and moon

  if (i > 400) {
    i = 0; // Resets the movement
  }
}
