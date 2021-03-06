const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {}

function setup() {
  createCanvas(1250, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 390, 900, 20);
  holder1 = new Ground(390, 300, 250, 10);
  holder2 = new Ground(700, 200, 200, 10);
  block1 = new Block(300, 275);
  block2 = new Block(330, 275);
  block3 = new Block(360, 275);
  block4 = new Block(390, 275);
  block5 = new Block(420, 275);
  block6 = new Block(450, 275);
  block7 = new Block(480, 275);
  block8 = new Block(330, 235);
  block9 = new Block(360, 235);
  block10 = new Block(390, 235);
  block11 = new Block(420, 235);
  block12 = new Block(450, 235);
  block13 = new Block(360, 195);
  block14 = new Block(390, 195);
  block15 = new Block(420, 195);
  block16 = new Block(390, 155);
  blocks1 = new Block(640, 175);
  blocks2 = new Block(670, 175);
  blocks3 = new Block(700, 175);
  blocks4 = new Block(730, 175);
  blocks5 = new Block(760, 175);
  blocks6 = new Block(670, 135);
  blocks7 = new Block(700, 135);
  blocks8 = new Block(730, 135);
  blocks9 = new Block(700, 95);
  ball = new Ball(50, 200, 30);
  sling = new SlingShot(ball.body, { x: 100, y: 200 });

  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();
  holder1.display();
  holder2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  blocks6.display();
  blocks7.display();
  blocks8.display();
  blocks9.display();

  ball.display();
  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
  sling.release();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(ball.body, { x: 50, y: 200 });
    sling.constaint.bodyA = ball.body;
  }
}
