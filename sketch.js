const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bike, bikeImg;
var ramp;
var backImg;
var ground;

function preload() {
  backImg = loadImage("images/background.jpg")
  //bikeImg = loadImage("images/bike.png")
}
function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1000, 400);
  //createSprite(400, 200, 50, 50);
  bike = new Bike(80, 300)
  ramp = new Ramp(600, 300, 100)
  ground = new Ground(500, 390, 1000, 20)
  Engine.run(engine)
}

function draw() {
  background(backImg);
  Engine.update(engine)

  detectollision(bike, ramp)
  drawSprites();
  ramp.display();
  bike.display();
  ground.display();
}

function detectollision(lbike, lramp) {
  rampBodyPosition = lramp.body.position;
  bikeBodyPosition = lbike.body.position;
  var distance = dist(bikeBodyPosition.x, bikeBodyPosition.y, rampBodyPosition.x, rampBodyPosition.y)
  if (distance <= lbike.radius + lramp.radius && bike.body.position.y>200) {
    bike.body.position.y = bike.body.position.y - 10
    bike.body.position.x = bike.body.position.x + 10
  }
}
function keyPressed() {
  if (keyWentDown === RIGHT_ARROW) {
    bike.body.position.x = bike.body.position.x + 1
    console.log("hi")
  }
  if (keyWentDown === LEFT_ARROW) {
    bike.body.position.x = bike.body.position.x - 1
  }
  if (keyWentDown === UP_ARROW) {
    bike.body.rotate(-10);
  }
  if (keyWentDown === DOWN_ARROW) {
    bike.body.rotate(10);
  }
  if (keyWentDown === 32 && bike.body.position.y>250) {
    bike.body.position.y = bike.body.position.y - 10
  }
}