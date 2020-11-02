var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  block16 = new Block(390,155,30,40);
  block15 = new Block(420,155,30,40);
  block14 = new Block(330,155,30,40);
  block13 = new Block(360,155,30,40);
  block12 = new Block(450,155,30,40);
  block11 = new Block(480,155,30,40);
  block10 = new Block(270,155,30,40);
  block9 = new Block(300,155,30,40);
  block8 = new Block(240,155,30,40);
  block7 = new Block(210,155,30,40);
  block6 = new Block(180,155,30,40);
  block5 = new Block(150,155,30,40);
  block4 = new Block(120,155,30,40);
  block3 = new Block(90,155,30,40);
  block2 = new Block(60,155,30,40);
  block1 = new Block(30,155,30,40);
  
}

function draw() {
  background(255,255,255);  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  drawSprites();

}