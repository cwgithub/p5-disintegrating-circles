function setup() {
  createCanvas(1400, 1400);
  noLoop();
}

function draw() {
  background(255);
  let cols = 6;
  let rows = 7;
  let diameter = 150;
  let spacing = diameter + 30;
  let offsetY = (height - (rows * spacing - 20)) / 2; // Center rows vertically
let points = 360;


  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let img = createCircleImage(diameter, points -= 10); // Create an image for each circle
      image(
        img,
        x * spacing + spacing / 2 - img.width / 2,
        offsetY + y * spacing + spacing / 2 - img.height / 2
      );
    }
  }
}
function createCircleImage(diameter, points) {
  let img = createGraphics(diameter, diameter);
  img.clear();
  img.noFill();
  img.stroke(0);
  img.strokeWeight(4);
  img.beginShape();
  for (let i = 0; i <= points; i++) {
    let angle = TWO_PI * (i / points);
    // let radiusOffset = random(-5, 5); // Random offset for imperfections
    let x = diameter / 2 + cos(angle) * (diameter / 2 );
    let y = diameter / 2 + sin(angle) * (diameter / 2 );
    img.vertex(x, y);
  }
  
  img.endShape(CLOSE);
  return img;
}
