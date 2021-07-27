
var x, y;
var px, py;

function preload() {
 
  rawtext = loadStrings("data/futur.txt");
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  px = x;
  py = y;
  noStroke();
  background(255);
  frameRate(4);
}

function draw() {
var everything = join(rawtext, "\n");
 
  allwords = splitTokens(everything, ",");

 background(0,20)
	frameRate(2)
	
	push()
		fill(102,216,255-random(50))
		textSize(random(10,50))

		let raintext = allwords
		
		translate(random(width),random(height))
		rotate(-PI/6)
		text(raintext,-100,-100)
	pop()
	
	
}
