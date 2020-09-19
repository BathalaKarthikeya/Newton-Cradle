const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var back;

function preload(){
 back = loadImage("sprites/hello.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(600,200,300,50);

	bob1 = new Bob(400,400,50,PI/4);
	bob2 = new Bob(450,400,50,PI/4);
	bob3 = new Bob(500,400,50,PI/4);
	bob4 = new Bob(550,400,50,PI/4);
	bob5 = new Bob(600,400,50,PI/4);

	rope1 = new Chain(bob1.body,roof.body,-100,0);
	rope2 = new Chain(bob2.body,roof.body,-50,0);
	rope3 = new Chain(bob3.body,roof.body,0,0);
	rope4 = new Chain(bob4.body,roof.body,50,0);
	rope5 = new Chain(bob5.body,roof.body,100,0);

	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(back);
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();

  textFont("lucida handwriting")
  textSize(30);
  fill("black");
  text("Shh! Wait for the bobs to stop.",10,600);
  text("Press UP ARROW.",10,650);
  text("See the Magic of NEWTON'S CRADLE!!",10,700);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:5});
  
	}
}

