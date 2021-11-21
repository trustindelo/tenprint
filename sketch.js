let x = 0;
let y = 0;
let spacing = 30;
let mode = 0;
let outsideRadius = 150;
let insideRadius = 100;
let font, fontsize = 40;

function setup() {
  createCanvas(800, 800);
  background(0);
  stroke(255);
}

function draw() {
  select('#info').style('display', 'none');
  if (mode == 1) {
    tenprint();
  }

  else if (mode == 2) {
    tenprintCircle();
  }

  else if (mode == 3) {
    tenprintSquare();
  }

  else if (mode == 4) {
    TenPrintStar()
  }

  else if (mode == 5) {
    select('#info').style('display', 'inline');
    tenprintCircleTri();
  }
}

function keyReleased() {
  if (key == '1') {
    mode = 1;
    background(255);
  }
  else if (key == '2') {
    mode = 2;
    background(0);
  }
  else if (key == '3') {
    mode = 3;
    background(0);
  }
  else if (key == '4') {
    mode = 4;
    background(255);
  }
  else if (key == '5') {
    mode = 5;
    background(255);
  }
  x = 0;
  y = 0;
}

function tenprint() {
  stroke(0, 200, 200)
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing); //line(x1,y1, x2,y2)
  }
  else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y > height) {
    background(255);
    x = 0;
    y = 0;
  }
}

function tenprintCircle() {
  stroke(255)
  if (random(1) < 0.5) {
    line(x, y, x + spacing, y + spacing);
  }
  else {
    circle(x, y, spacing);
  }
  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y > height) {
    background(0);
    x = 0;
    y = 0;
  }
}

function tenprintSquare() {
  stroke(255)
  if (random(1) < 0.5) {
    fill(0, 90, 220);
    square(x, y, 20);
  }
  else {
    fill(180, 0, 30);
    square(x, y, 20);
  }
  x = x + spacing;

  if (x > width) {
    x = 0;
    y = y + spacing;
  }

  if (y > height) {
    background(0);
    x = 0;
    y = 0;
  }
}

function TenPrintStar() {
  stroke(255, 255, 0);
  fill(255, 255, 0);
  background(26, 32, 109);

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 50.0);
  star(0, 0, 100, -100, 16);
  pop();

  push();
  translate(width * 0.5, height * 0.5);
  rotate(frameCount / 200.0);
  star(200, 200, 100, 100, 40);
  pop();

  function star(x, y, radius1, radius2, n) {
    let angle = TWO_PI / n;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
}

function tenprintCircleTri() {
  x = width / 2;
  y = height / 2;
  stroke(0, 128, 128);
  fill(0, 128, 128);
  background(255);
  let numPoints = int(map(mouseX, 0, width, 6, 60));
  let angle = 0;
  let angleStep = 180.0 / numPoints;

  beginShape(tenprintCircleTri);
  for (let i = 0; i <= numPoints; i++) {
    let px = x + cos(radians(angle)) * outsideRadius;
    let py = y + sin(radians(angle)) * outsideRadius;
    angle += angleStep;
    vertex(px, py);
    px = x + cos(radians(angle)) * insideRadius;
    py = y + sin(radians(angle)) * insideRadius;
    vertex(px, py);
    angle += angleStep;
  }
  endShape();
}
