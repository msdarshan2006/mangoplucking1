const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeObj;
var groundObj;
var stoneObj;
var boyImage;
var sling;
function preload()
{
	boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1100, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(850,450);
	groundObj = new Ground(550,680,1100,10);
	stoneObj = new Stone(125,525,50);
	sling = new Slingshot(stoneObj.body,{x:150,y:500})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display();
  groundObj.display();
  stoneObj.display();
  image(boyImage,100,400,250,350);
  sling.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}



