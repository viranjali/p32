const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var shooter;
var slingshot;
var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10;
var ball11,ball12,ball13,ball14,ball15,ball16,ball17,ball18;
var ball19,ball20,ball21,ball22,ball23,ball24;
var ball25,ball26,ball27,ball28;
var ball29,ball30;
var ball31;


function setup() {
  createCanvas(1500,700);
  
  engine = Engine.create();
  world = engine.world;

  //creating ground
  ground = new Ground(750,690,1500,20);

//creating the shooter
  shooter = new Shooter(250,350,15);


//creating the slingshot
  slingshot=new Slingshot(shooter.body,{x:250,y:350});

  //creating first row of balls
  ball1 = new Ball(1400, 100, 15);
  ball2 = new Ball(1400, 160, 15);
  ball3 = new Ball(1400, 220, 15);
  ball4 = new Ball(1400, 280, 15);
  ball5 = new Ball(1400, 340, 15);
  ball6 = new Ball(1400, 400, 15);
  ball7 = new Ball(1400, 460, 15);
  ball8 = new Ball(1400, 520, 15);
  ball9 = new Ball(1400, 580, 15);
  ball10 = new Ball(1400, 640, 15);

  //creating second row of balls
  ball11 = new Ball(1335, 160, 15);
  ball12 = new Ball(1335, 220, 15);
  ball13 = new Ball(1335, 280, 15);
  ball14 = new Ball(1335, 340, 15);
  ball15 = new Ball(1335, 400, 15);
  ball16 = new Ball(1335, 460, 15);
  ball17 = new Ball(1335, 520, 15);
  ball18 = new Ball(1335, 580, 15);

  //creating third row of balls
  ball19 = new Ball(1265, 220, 15);
  ball20 = new Ball(1265, 280, 15);
  ball21 = new Ball(1265, 340, 15);
  ball22 = new Ball(1265, 400, 15);
  ball23 = new Ball(1265, 460, 15);
  ball24 = new Ball(1265, 520, 15);

  //creating fourth row of balls
  ball25 = new Ball(1195, 280, 15);
  ball26 = new Ball(1195, 340, 15);
  ball27 = new Ball(1195, 400, 15);
  ball28 = new Ball(1195, 460, 15);

  //creating fivth row of balls
  ball29 = new Ball(1125, 340, 15);
  ball30 = new Ball(1125, 400, 15);

  //creating sixth row of balls
  ball31 = new Ball(1055, 370, 15);



}

function draw() {
  background("lightgreen");
  Engine.update(engine);  

  //display ground
  ground.display();
  //check collision between shooter and ball

   //dsiplay the shooter
   shooter.display();

   //display sligshot
    slingshot.display();

    //displaying first row of the balls
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();

    //displaying second row of the balls
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();
    ball16.display();
    ball17.display();
    ball18.display();

     //displaying third row of the balls
     ball19.display();
     ball20.display();
     ball21.display();
     ball22.display();
     ball23.display();
     ball24.display();

    //displaying fourth row of the balls
     ball25.display();
     ball26.display();
     ball27.display();
     ball28.display();
    
    //displaying fivth row of the balls
    ball29.display();
    ball30.display();
      
    //displaying sixth row of the balls
    ball31.display();

    
  
    detectollision(shooter,ball1);
    detectollision(shooter,ball2);
    detectollision(shooter,ball3);
    detectollision(shooter,ball4);
    detectollision(shooter,ball5);
    detectollision(shooter,ball6);
    detectollision(shooter,ball7);
    detectollision(shooter,ball8);
    detectollision(shooter,ball9);
    detectollision(shooter,ball10);

    detectollision(shooter,ball11);
    detectollision(shooter,ball12);
    detectollision(shooter,ball13);
    detectollision(shooter,ball14);
    detectollision(shooter,ball15);
    detectollision(shooter,ball16);
    detectollision(shooter,ball17);
    detectollision(shooter,ball18);

    detectollision(shooter,ball19);
    detectollision(shooter,ball20);
    detectollision(shooter,ball21);
    detectollision(shooter,ball22);
    detectollision(shooter,ball23);
    detectollision(shooter,ball24);

    detectollision(shooter,ball25);
    detectollision(shooter,ball26);
    detectollision(shooter,ball27);
    detectollision(shooter,ball28);

    detectollision(shooter,ball29);
    detectollision(shooter,ball30);

    detectollision(shooter,ball31);



   
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(shooter.body, {x:250, y:350}) 
	  slingshot.attach(shooter.body);
	}
}

function detectollision(lshooter,lball){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  ballBodyPosition=lball.body.position
  shooterBodyPosition=lshooter.body.position
  
  var distance=dist(shooterBodyPosition.x, shooterBodyPosition.y, ballBodyPosition.x, ballBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lball.r+lshooter.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lball.body,false);
    }

  }