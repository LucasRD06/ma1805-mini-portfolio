function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill(255, 0, 0); // Red
  circle(200, 375, 200); // Large red circle (body)

  fill(0, 255, 0); // Green
  circle(100, 100, 100); // Left green circle (left ear)
  circle(300, 100, 100); // Right green circle (right ear)

  fill(150, 150, 150); // Grey
  circle(200, 200, 200); // Large grey circle (face)

  fill(0, 0, 255); // Blue
  circle(160, 160, 10); // Left blue eye
  circle(240, 160, 10); // Right blue eye

  fill(0, 255, 0); // Green
  circle(200, 220, 50); // Green circle (nose)

  fill(255); // White
  triangle(180, 245, 200, 245, 190, 265); // Left white tooth
  triangle(200, 245, 220, 245, 210, 265); // Right white tooth

}
