
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground, paper, dustbin;
var box_left, box_bottom, box_right;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//creates the ground
	ground = new Ground();

	//The boxes for dustbin
	box_left = new Dustbin(920,320,20,100,false);
	box_bottom = new Dustbin(1000,360,180,20,true);
	box_right = new Dustbin(1080,320,20,100,false);
	//box = new Dustbin(900,200);
	//

	//dustbin = new Dustbin(1000,300);
	paper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();
  box_left.display();
  box_right.display();
  paper.display();
  box_bottom.display();
  //dustbin.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.postion, {x:0.045,y:-0.045})
	}
}