let fog = [];

function setup() {
  createCanvas(1000, 600);

//This is what makes the fog ellipses appear in random places on the sketch.  
  for (let i = 0; i<1000; i++) {
    let x = random(width); 
    let y = random(height);
    let r = random(10,40);  
  fog[i] = new Fog(x,y,r); 
}
}

function draw() {
  //This is meant to give the illusion of a forest. I tried to use an array and class with rectangles and nothing I tried worked. 
  //I will probably ask you about this later in class. 
  background(153, 153,153);
  noStroke(); 
  fill(102,255,102); 
  rect(0,400,1000,300);
  fill(102,051,051);
  rect(100,0,50,440);
  rect(300,0,50,420);
  rect(400,0,50,400);
  rect(550,0,50,575); 
  rect(470,0,50,470);
  rect(625,0,50,530);
  rect(700,0,50,570);
  rect(780,0,50,550);
  rect(900,0,50,500);

//This is what animates the mist/fog and makes it appear in the sketch. 
for (let i = 0; i< fog.length; i++) {
  fog[i].move();
  fog[i].show();  
}
}