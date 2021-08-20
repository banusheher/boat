var ship,shiip
var waves







function preload(){
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
waves = loadImage("sea.png")



}

function setup(){
  createCanvas(400,400);
  
  wave = createSprite(200,250,10,10)
wave.addImage(waves);
wave.scale= 0.4;
  
  
  shiip = createSprite(200,200)
  shiip.addAnimation("ships",ship);
  shiip.scale= 0.4

shiip






}

function draw() {
  background("blue");
 drawSprites();



}