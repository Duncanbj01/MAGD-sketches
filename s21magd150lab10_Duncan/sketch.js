let soup; 
let cam; 
let omega = 0.02;
var nums; 
var nums2 = []; 

function preload() {
  nums = loadTable("numbers.csv");
}

function setup() {
  createCanvas(1500,600, WEBGL);
  soup = loadImage('soup.jpg');

  //This creates the camera and allows it to pan from left to right. 
  cam = createCamera(); 
  cam.pan(-0.8); 
  
  //This prints the contents of the CSV to the console.
  var rowCount = nums.getRowCount(); 
  nums2 = []; 
  for (var i = 0; i < rowCount; i++) {
    nums2[i] = nums.getNum(i, 1); 
  }  

  for (var i = 0; i < nums.getRowCount(); i++) {
    //
    var ones = nums.get(i,0);
    // 
    var tens = nums.get(i,1); 
    var twenties = nums.get(i,2); 
    var thirties = nums.get(i,3); 
    print(ones, tens, twenties, thirties); 
  }
}

function draw() {
  background(155);

  //This allows the camera to pan from left to right and dictates the speed. 
  push(); 
  cam.pan(omega); 

  if(frameCount % 120 === 0) {
    omega *= -.9; 
  }

  rotateX(frameCount * 0.01); 
  
  //This is what allows the user to move the light around the can with their mouse. 
  let locX = mouseX - width / 2; 
  let locY = mouseY - height / 2; 
  pop();  
 
 push();
  //This is what creates the light effect on the can.
  pointLight(250,250,250,locX,locY,50); 
  //This is what makes the cylinder rotate and also what puts the soup label texture onto the cylinder.
  translate(-500,-50, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01); 
  rotateY(frameCount * 0.01);
  texture(soup); 
  noStroke();
  cylinder(40,100,1000, 0,0,0);
  pop();

  //This creates an Ice cream cone using the cone and sphere shapes and alligning them. 
  push();
  //This creates the shadowy effect on the cone itself and allows it to rotate.
  ambientLight(100,100,100); 
  translate(-100,150,0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01); 
  rotateY(frameCount * 0.01); 
  specularMaterial(255,204,153);
  noStroke(); 
  cone(50,160);

  //This is what creates the Snow-cone like sphere on the top of the cone. 
  //The Normal material is what creates the color gradient effect on the sphere. 
  translate(0,-110,0);
  normalMaterial();  
  sphere(55);
  pop();
  }