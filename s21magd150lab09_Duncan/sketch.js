var sound; 
let shiro; 
let playing = false;
let button;
let dog;
let reverb; 

function preload() {
//This plays the sound of the video. 
sound = loadSound("shiro.mp3"); 
}

function setup() {
  createCanvas(800,800);

  //This creates the reverb effect in the audio. 
  reverb = new p5.Reverb(); 
  sound.disconnect(); 
  reverb.process(sound,2,8); 
  
  //This makes the video show up on the canvas. 
  shiro = createVideo(['shiro.mp4']);
  shiro.hide();  
  
  //This creates the play button and places it at the bottom of the sketch.
  button = createButton('play');
  button.mousePressed(toggleVid);
  button.position(375,750); 
  
  // This creates the html outside of the sketch that makes the text appear about my dog at the bottom of the sketch. 
  dog = createElement('h2', 'This is my dog Shiro, please hit play to make your day better!');
  dog.position(85, 700);
}

function draw() {
  // This creates the mirrored image effect. 
  image(shiro, 0, 0, width/2, height); 
  translate(width,0); 
  scale(-1.0,1.0);    
  image(shiro, 0, 0, width/2, height); 
}

function toggleVid() {
  // This allows you to play and pause the video. 
  // If video is kept playing it will loop. 
  if (playing) {
    shiro.pause();
    sound.pause(); 
    button.html('play');
  } else {
    shiro.loop();
    sound.loop(); 
    button.html('pause');
  }
  playing = !playing;
}
