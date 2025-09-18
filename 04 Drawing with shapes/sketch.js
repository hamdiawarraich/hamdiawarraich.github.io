// Drawing with shapes 
// Hamdia Warraich 
// September 15, 2025 
//

//Declaring global variables

//let boxX = 200, boxY = 100;
let tsize = 15;
let refX, refY;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(220);

  //drawBox();
  drawCharacter();
  fill(0); //black
  textSize(tsize); 
  text(mouseX + "," + mouseY + " " + mouseButton, mouseX, mouseY);
  noStroke();
}

//Alien Head 
fill(144, 234,144); //light green color
circle(width/2, height/2 - 50, 100);

//Bottom Body 
fill(144, 234,144);
rectMode(CENTER);
rect(width/2, height/2, 100, 50);


fill(0); //black
//Eyes 
ellipse(width/2 - 20, height/2 - 60, 20, 30);
ellipse(width/2 + 20, height/2 - 60, 20, 30);
//mouth 
rect(width/2, height/2 - 30, 50, 10, 20);