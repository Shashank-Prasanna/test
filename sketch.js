
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2;

function setup() {
  createCanvas(400, 400);

  engine = Engine.create();
  world = engine.world;
  box1 = new Box (120, 50, 20, 20);
  box2 = new Box(100, 200, 30, 30); 
  ground = new Ground(200, 380, 400, 40); 

  
}

function draw() {
  background(0);
  Engine.update(engine);

  box1.display();
  box2.display(); 
  ground.display(); 

}