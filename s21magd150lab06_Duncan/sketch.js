let angle = 0;
var a = 0.0;

function setup() {
  createCanvas(700, 700); 
  angleMode(DEGREES);
  rectMode(CENTER); 
}

function draw() { 
  background(0);

//This for loop helps to create the random star pattern in the background. 
  push();
  randomSeed(67); 
  for(var i = 0; i < 1500; i++){
    drawRandomStar();
  }
  pop();

  drawAsteroid(); 

  drawPlanet();

  drawEnemyShip();

  drawGoodShip();  

}

//This creates a random series of stars in the background.
function drawRandomStar(){
  push();
  var pointX = random(width); 
  var pointY = random(height);
  var randomStroke = random(4,10); 
  stroke(255); 
  point(pointX, pointY); 
  strokeWeight(randomStroke);
  pop();  
}

//This is what creates the planet in the upper right corner. 
function drawPlanet(){
  push();
  noStroke();
  colorMode(HSB, 360);
  let p = color(300, 200, 150);
  fill(p);  
  ellipse(600, 50, 400, 400);
  pop(); 
}

//This creates a rotating and scaling asteroid in the center of the canvas. 
function drawAsteroid(){
  push();
  translate(350, 350);
  rotate(angle);
  noStroke();   
  scale(a);
  fill(153,153,153);

  //This creates the shape of the asteroid using the beginShape and endShape syntax. 
  beginShape();
  vertex(0,0); 
  vertex(20,30);
  vertex(50,40);
  vertex(60,20); 
  vertex(80,10);
  vertex(70,0); 
  vertex(60,-30);
  vertex(5,-40);
  vertex(0,0); 
  endShape(); 
  pop();
//This is the speed of rotation of the asteroid. 
  angle = angle + 2;

//This is the rate at which the asteroid scales. 
  a += 0.025;

  if (a > 1) {
    a = 1; 
  }
}

//This creates the purple and green ship to the upper left. 
function drawEnemyShip(){
  push();
  let i = color(204, 255, 204);
  fill(i);  
  ellipse(150, 148, 40, 20); 
  noStroke();
  
  let c = color(153, 153, 204); 
  fill(c);  
  triangle(150, 160, 100, 150, 200, 150);
  pop();
}

//This creates the yellow and orange ship near the bottom of the canvas.  
function drawGoodShip(){
  push();
  translate(200,500);
  let i = color(255, 153, 000);
  fill(i);  
  ellipse(150, 148, 40, 20); 
  
  noStroke();
  let c = color(204, 204, 102); 
  fill(c);  
  triangle(150, 160, 100, 150, 200, 150);
  pop();
}
