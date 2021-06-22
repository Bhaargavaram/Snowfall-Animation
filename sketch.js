const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;

var background1;
var ice=[]
var maxSnow=120;
var engine, world;

function preload(){

  background1=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);

 engine=Engine.create();
world=engine.world;
  createSprite(400, 200, 50, 50);
  
if(frameCount % 300 === 0){
  for(var i=0; i<maxSnow; i++){
  ice.push(new Snow(random(0,1350), random(0,50)));
  }
  }
}

function draw() {
  background(background1);  
  Engine.update(engine)

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    }    
   
    //background1.display();
  drawSprites();
}