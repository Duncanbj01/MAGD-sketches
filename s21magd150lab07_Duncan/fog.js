//This is what creates the gray, translucent ellipses.  
class Fog {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r; 
  }
//This is what animates the fog ellipses and moves them around the sketch. 
  move() {
    this.x = this.x + random(-5, 5); 
    this.y = this.y + random(-5, 5); 
  }
//This is what makes the ellipses appear on the sketch. 
  show() {
    noStroke();
    fill(255,10);   
    ellipse(this.x, this.y, this.r*2); 
  }
}