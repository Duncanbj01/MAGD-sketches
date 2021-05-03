 var font;
 var font2; 
 var textColor;
 var textColor2;
 let fear;
 var pdf;
 var earth; 
 var sphere;   

function preload() {
  //This preloads the fonts, text file, and images. 
  fear = loadStrings("fear.txt");
  font = loadFont("SyneMono-Regular.ttf");
  font2 = loadFont("Nunito-SemiBold.ttf");
  earth = loadImage("earth.png"); 
  sphere = loadImage("Sphere.jpg");  
}

 function setup() {
 createCanvas(800,800, P2D);
//This allows for the user to save the file as a pdf.
 pdf = createPDF();
 pdf.beginRecord();

  textColor = color(153,051,051); 
  textColor2 = color(255,255,102);  
}

function draw() {
  background(0); 
  
  //This places the image for the dyson sphere. 
  image(sphere, 0, 0, width/1, height/1);
  
  //This places the image for the earth. 
  //This also applies both filters which makes the sphere gray and posterized.
  push(); 
  filter(GRAY);
  filter(POSTERIZE, 10);
  image(earth, 50, 500, width/4, height/4);
  pop(); 

//This uses the fear text file and places it in the upper right corner. 
  push(); 
  fill(255)
  textSize(32);
  textAlign(CENTER);   
  if (fear.length > 0) {
    for (let i = 0; i < fear.length; i++) {
      text(fear[i], 650,150); 
    }
  }
  pop(); 
  
  //These make the text for the other words appear on the image. 
  push(); 
  textFont(font);
  fill(textColor2);
  stroke(0);
  textSize(74); 
  text("Sphere", 500, height/2);
  pop();  
  
  push();
  textFont(font2); 
  fill(255); 
  stroke(0);  
  textSize(20); 
  textAlign(RIGHT); 
  text("By Brian Duncan", width/2 + 300, 700);
  pop();
}

//This allows the user to click the mouse and change the color of the word sphere.
function mousePressed() {
  if (font) {
    textColor2 = textColor
  }
}

//This allows the user to save the file as a pdf.
function keyPressed(){
          pdf.save();
}