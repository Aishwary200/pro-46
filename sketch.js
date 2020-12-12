const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bike, bikeImg;
var ramp;
var backImg
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
  Engine.run(engine)
}

function draw() {
  background(backImg);
  Engine.update(engine)
  // if(bike.x>ramp.x){

  // }
  if (keyDown(RIGHT_ARROW)) {
    bike.x = bike.x + 10
  }
  if (keyDown(LEFT_ARROW)) {
    bike.x = bike.x - 10
  }
  detectollision(bike, ramp)
  drawSprites();
  ramp.display();
  bike.display();
}
function detectollision(lbike, lramp) {
  rampBodyPosition = lramp.body.position;
  bikeBodyPosition = lbike.body.position;
  var distance = dist(bikeBodyPosition.x, bikeBodyPosition.y, rampBodyPosition.x, rampBodyPosition.y)
  if (distance <= lbike.radius + lramp.radius) {
    bike.y = bike.y - 100
    bike.x = bike.x + 50
  }
}