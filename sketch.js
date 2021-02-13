
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, bobline1, bobline2, bobline3, bobline4, bobline5;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,250,30);
	//bobObject2 = new bob(350-350/2+50,150,40);
	bobObject1 = new bob(298+20, 300, 40);
	bobline1 = new rope(bobObject1.body,{x:320, y:200});
	bobObject2 = new bob(bobObject1.x + 40, 300, 40);
	bobline2 = new rope(bobObject2.body,{x:360, y:200});
	bobObject3 = new bob(bobObject2.x + 40, 300, 40);
	bobline3 = new rope(bobObject3.body,{x:400, y:200});
	bobObject4 = new bob(bobObject3.x + 40, 300, 40);
	bobline4 = new rope(bobObject4.body,{x:440, y:200});
	bobObject5 = new bob(bobObject4.x + 40, 300, 40);
	bobline5 = new rope(bobObject5.body,{x:480, y:200})
	//if(keyIsDown(UP_ARROW)){
	//	Body.applyForce(bobObject1,{x:bobObject1.position.x,y:bobObject1.position.y},{x:5,y:5})
	  //}
	//fill(0);
	//bobline2 = new rope(bobObject2.body,roof.body);
	//bobline3 = new rope(bobObject3.body,roof.body);
	//bobline4 = new rope(bobObject4.body,roof.body);
	//bobline5 = new rope(bobObject5.body,roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  bobline1.display();
  bobline2.display();
  bobline3.display();
  bobline4.display();
  bobline5.display()
  //if(keyIsDown(UP_ARROW)){
	//Body.applyForce(bobObject1,{x:bobObject1.position.x,y:bobObject1.position.y},{x:0.05,y:0.05})
  //}
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-30, y:-80})
	}
}