
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(200,height,1200,20);
	stone = new Stone(200,440,70,70);
	hammer = new Hammer(480,400,100,90);
    rubber = new Rubber(750,650,70,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  stone.display();
  hammer.display();
  rubber.display();
  
  drawSprites();
 
}



