// Drawing with shapes 
// Hamdia Warraich 
// September 15, 2025 
//

function setup() {
  createCanvas(700,700);
  background(225);
  noStroke();
}

function draw() {
  background(220);
}

//Alien Head 
fill(144, 234,144);
ellipse(width/2, height/2, 100, 100);

//Bottom Body 
fill(144, 234,144);
rectMode(CENTER);
rect(width/2, height/2, 100, 50);

//eyes
stroke(0);
strokeWeight(10);


//Mouth
stroke(0);
strokeWeight(3);
line();
