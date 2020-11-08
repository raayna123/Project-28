
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var boyImage, treeImage;
var mangoRadius = 20;
function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//tree = new Tree(550,600);
	ground = new Ground(400,680,800,20);
	stone = new Stone(140, 670);
	boy = createSprite(200,600,20,50);
	boy.addImage("boy",boyImage);
	boy.scale = 0.08;
	tree = createSprite(620,480,350,350);
	tree.addImage("tree",treeImage);
	tree.scale = 0.3;
	mango1 = new Mango(520,430, mangoRadius);
	mango2 = new Mango(680,410, mangoRadius);
	mango3 = new Mango(570,360, mangoRadius);
	mango4 = new Mango(600,430, mangoRadius);
	mango5 = new Mango(750,440, mangoRadius);
	mango6 = new Mango(660,350, mangoRadius);
	//boy = new Boy(200,600,20,50);
	elasticConstraint = new ElasticConstraint(stone.body,{x: 160, y: 550});

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");



  stone.scale = 0.5;
  
//   tree.display();
  ground.display();
 
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);

  
  //boy.display();
  stone.display();
  elasticConstraint.display();
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
 
}

function mouseDragged() {
	//console.log(`x: ${mouseX}, y: ${mouseY}`)
	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
	//console.log("mouse released")
	elasticConstraint.fly();
}

function detectCollision(lstone, lmango) {

	var mangoBodyPosition = lmango.body.position;
	var stoneBodyPosition = lstone.body.position;
	
	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, 
		mangoBodyPosition.x, mangoBodyPosition.y);
	console.log("distance", (lmango.radius + lstone.width)*2)
	
	if(distance <= (lmango.radius + lstone.width)	) {
	//if(distance <= 200) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
	if(keyCode === 32) {
		//console.log("qplpll")
		Matter.Body.setPosition(stone.body,{x: 140, y: 670});
		elasticConstraint.attach(stone.body);
	}
}