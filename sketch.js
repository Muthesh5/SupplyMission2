var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,groundl;
var mark1,mark2,mark3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(0, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.velocityx=3
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;


	//Create a Ground

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	packageSprite.setCollider("circle",0,0,100)

	mark1 = new Mark(325,620,20,100,PI/-1)
	mark2 = new Mark(470,620,20,100,PI/1)
    mark3 = new Mark(400,650,150,20,PI/4)

	wall1 = new Wall(0,350,20,700,PI/1)
	wall2 = new Wall(800,350,20,700,PI/1)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  helicopterSprite.velocityX=3

  wall1.visible=false;
  wall2.visible=false;

  packageSprite.x=helicopterSprite.x

  if (keyWentDown(DOWN_ARROW)) {
	Body.setStatic(packageBody,false)
  }

  mark1.display();
  mark2.display();
  mark3.display();

  wall1.display();
  wall2.display();

  drawSprites();
}



