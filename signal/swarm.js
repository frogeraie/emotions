let font;
let points;
let bounds;
let X = 400;
let Y = 300;

let cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function preload() {
  font = loadFont('data/Metropolis-Medium.otf');
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
	centerCanvas();
  points = font.textToPoints(
     'émotions urbaines', 0, 0, 130, {
      sampleFactor: 1,
      simplifyThreshold: 0
    });

  bounds = font.textBounds(
     'émotions urbaines', 0, 0, 130);

  cursor(CROSS);
  fill(255, 127);
  noStroke();
}

function windowResized() {
  centerCanvas();
  }

function draw() {
  background(0,20);
  
 /* stroke(51);
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);*/
  noStroke();
  
  X = X - 5;
  Y = Y - 5;
  if(X<0){
    X=0
  }
  if(Y<0){
    Y=0
  }
  let centerDist = dist(X+width/2, Y+height/2, width / 2, height / 2);

  let transparency = map(centerDist, 0, width / 2, 200, 50);
  transparency = constrain(transparency, 50, 200);
	fill(255, transparency);
  
  let jiggle = map(centerDist, 0, width, 1, 300);

  translate((width - abs(bounds.w)) / 2, 
            (height + abs(bounds.h)) / 2);
  
// 	stroke(255, 0, 0);
//   rect(bounds.x, bounds.y, bounds.w, bounds.h);
  
//   console.log("x: " + bounds.x 
//               + ", y: " + bounds.y
//               + ", w: " + bounds.w
//               + ", h: " + bounds.h);
  
  for (let i = 0; i < points.length; i++) {
    let p = points[i];
    ellipse(p.x + jiggle * randomGaussian(), 
      p.y + jiggle * randomGaussian(), 5, 5);
  }

  //noLoop();
}
