
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy,catapults;
var MangoBodyPosition,StoneBodyPosition
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1040,150,30);
	mango2=new Mango(1000,100,30);
	mango3=new Mango(1120,140,30);
	mango4=new Mango(1093,130,30);
	mango5=new Mango(890,200,30);
	mango6=new Mango(1160,175,30);
	mango7=new Mango(1032,230,30);
	mango8=new Mango(1201,140,30);
	mango9=new Mango(943,120,30);
	mango10=new Mango(1200,250,30);


	treeObj=new tree(1050,580);
	tree7=createSprite(1050,580,450,10)
	groundObject=new ground(width/2,600,width,20);
	stoneObj=new Stone(235,400,30);
	catapults=new Catapult(stoneObj.body,{x:235, y:410});
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
	Engine.run(engine);

}

function draw() {


background(230);
  

  //Add code for displaying text here!
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

	
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  catapults.display();
  groundObject.display();
  
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7); 
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);

} 
 
  


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX, y: mouseY});
}
function mouseReleased(){
    catapults.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:400}) 
	  catapults.attach(stoneObj.body);
	}
  }
function detectollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

}

