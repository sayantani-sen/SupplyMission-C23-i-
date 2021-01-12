const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxSide1, boxSide2, boxSide3;

function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var package_options = {
		restitution: 0
	}
	
	packageSprite=createSprite(width/2, 200, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	var boxSide_options = {
		setStatic: true
	}

	boxSide1 = createSprite(400,650,200,20,boxSide_options);
	boxSide1.shapeColor = "red";

	boxSide2 = createSprite(300,624,20,70,boxSide_options);
	boxSide2.shapeColor = "red";
	
	boxSide3 = createSprite(500,624,20,70,boxSide_options);
	boxSide3.shapeColor = "red";
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(packageSprite.isTouching(boxSide1)){
	  Matter.Body.setStatic(packageBody,true);
   }
	keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    	Matter.Body.setStatic(packageBody,false)
	
  }
}

