let cnv;
let n = 0;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}


function preload() {
  // Load A Midsummer Night's Dream into an array of strings
  rawtext0 = loadStrings("data/nom.txt");
  rawtext1 = loadStrings("data/reponse1.txt");
  rawtext2 = loadStrings("data/reponse2.txt");
  rawtext3 = loadStrings("data/reponse3.txt");
  rawtext4 = loadStrings("data/reponse4.txt");
  rawtext5 = loadStrings("data/reponse5.txt");
  rawtext6 = loadStrings("data/reponse6.txt");
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
	centerCanvas();
  createCanvas(windowWidth, windowHeight);
 bg = loadImage('villeP.jpg');
}

function windowResized() {
  centerCanvas();
  }
function draw() {

var everything0 = join(rawtext0, "\n");
  allwords0 = splitTokens(everything0, ",");
var everything1 = join(rawtext1, "\n");
  allwords1 = splitTokens(everything1, ",");
var everything2 = join(rawtext2, "\n");
  allwords2 = splitTokens(everything2, ",");
var everything3 = join(rawtext3, "\n");
  allwords3 = splitTokens(everything3, ",");
var everything4 = join(rawtext4, "\n");
  allwords4 = splitTokens(everything4, ",");
var everything5 = join(rawtext5, "\n");
  allwords5 = splitTokens(everything5, ",");
var everything6 = join(rawtext6, "\n");
  allwords6 = splitTokens(everything6, ",");

 background(bg)
 fill(255,120,70)
	textSize(40);
 text(': d\'après vous, c\'est ça la ville?',330,40);
 text(allwords0,180,40)
 	if(n > 100){
 	fill(50,255,200)
	textSize(30);
 	text('Solitude',150,140);
 	fill(0)
	textSize(20);
	text(allwords1,100,160,250,350)
   }	
		if(n > 200){
	fill(50,255,200)
	textSize(30);
	text('Tristesse',500,140);
  fill(0)
	textSize(20);
	text(allwords2,450,160,250,350)
  }
		if(n > 300){
	fill(50,255,200)
	textSize(30);
	text('Ennui',900,140);
  fill(0)
	textSize(20);
      text(allwords3,850,160,250,350)
  }
	if(n > 400){
	fill(50,255,200)
	textSize(30);
	text('Angoisse',150,460);
  fill(0)
	textSize(20);
      text(allwords4,100,480,250,350)  
  }
	if(n > 500){
	fill(50,255,200)
	textSize(30);
	text('Peur',500,460);
  fill(0)
	textSize(20);
      text(allwords5,450,480,250,350)   
  }
	if(n > 600){
	fill(50,255,200)
	textSize(30);
	text('Colère',900,460);
  fill(0)
	textSize(20);
      text(allwords6,850,480,250,350)     
  }
	n++;
	
}
