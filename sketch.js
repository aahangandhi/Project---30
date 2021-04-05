const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25, block26;
var ground1, ground2, ground3;

var sling;
var player;

var ball;
var ballIMG;

function preload(){
  ballIMG = loadImage("polygon.png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,400,200,10);
    ground2 = new Ground(900,310,200,10);
    ground3 = new Ground(750, 600, 1500, 10)


  block1 = new Block(540,375,30,40);
  block2 = new Block(570,375,30,40);
  block3 = new Block(600,375,30,40);
  block4 = new Block(630,375,30,40);
  block5 = new Block(660,375,30,40);

  block6 = new Block(555,335,30,40);
  block7 = new Block(585,335,30,40);
  block8 = new Block(615,335,30,40);
  block9 = new Block(645,335,30,40);

  bolck10 = new Block(570,295,30,40);
  block11 = new Block(600,295,30,40);
  block12 = new Block(630,295,30,40);

  block13 = new Block(585,255,30,40);
  block14 = new Block(615,255,30,40);

  block15 = new Block(600,215,30,40);

  //2nd half

  block16 = new Block(840,285,30,40);
  block17 = new Block(870,285,30,40);
  block18 = new Block(900,285,30,40);
  block19 = new Block(930,285,30,40);
  block20 = new Block(960,285,30,40);

  block21 = new Block(855,245,30,40);
  block22 = new Block(885,245,30,40);
  block23 = new Block(915,245,30,40);
  block24 = new Block(945,245,30,40);

  block25 = new Block(870,205,30,40);
  block26 = new Block(900,205,30,40);
  block27 = new Block(930,205,30,40);

  block28 = new Block(885,165,30,40);
  block29 = new Block(915,165,30,40);

  block30 = new Block(900,125,30,40);



  ball = Bodies.circle(50,200,20);
  World.add(world,ball);



  sling = new SlingShot(this.ball,{x:150, y:160});
}

function draw() {
  background("grey");
  textSize(25);
  Engine.update(engine);

  fill("orange");
  text("Press space to get another chance to play",displayWidth/2 - 250,30);

  fill('blue');

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
  bolck10.display();
  block11.display();
  block12.display();

  fill('orange');
  block13.display();
  block14.display();

  fill(rgb(47, 48, 48));
  block15.display();

  
  
  fill('blue');

  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  fill("lightBlue");
  block21.display();
  block22.display();
  block23.display();
  block24.display();

  fill("lightPink");
  block25.display();
  block26.display();
  block27.display();

  fill('orange');
  block28.display();
  block29.display();

  fill(rgb(47, 48, 48));
  block30.display();




  fill(rgb(135, 205, 236));


  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(ballIMG, ball.position.x, ball.position.y, 40, 40);

  sling.display();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{   
		sling.attach(ball);
	}
}