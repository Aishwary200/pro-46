const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine, world;
var bike, bikeImg;
var ramp;
var backImg;
var ground;
var upbike;
var obstacle, obstacleImg, obstacleGroup;

function preload() {
  backImg = loadImage("images/background.jpg")
  upbike = loadImage("images/up.png")
  obstacleImg = loadImage("images/obstacle.png")
}

function setup() {
  engine = Engine.create()
  world = engine.world
  createCanvas(1000, 400);
  bike = new Bike(80, 300)
  ground = new Ground(width / 2, 390, 1000, 20)
  obstacleGroup = new Group();
  console.log(frameCount)
  Engine.run(engine)
}

function draw() {
  background(backImg);
  Engine.update(engine);
  if (ground.body.position.x < 0) {
    ground.body.width += 1000
  }


  rampM();
  ramp.display();
  bike.display();
  ground.display();
  spawnObstacle();
  detectollision(bike, ramp)
  drawSprites();
  if (obstacleGroup = ramp.body.position.x) {
    obstacleGroup.velocityX = 0
  }
  // console.log(bike.body.position.x)

}

function detectollision(lbike, lramp) {
  rampBodyPosition = lramp.body.position;
  bikeBodyPosition = lbike.body.position;

  var distance = dist(bikeBodyPosition.x, bikeBodyPosition.y, rampBodyPosition.x, rampBodyPosition.y)
  if (distance <= lbike.radius + lramp.radius && bike.body.position.y > 200) {
    bike.body.position.y = bike.body.position.y - 1
    console.log("abc")
    bike.body.position.x = bike.body.position.x + 1
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    bike.body.position.x = bike.body.position.x + 10
    camera.position.x = bike.body.position.x
    //camera.position.y=bike.body.position.y
    console.log("hi")
  }
  if (keyCode === LEFT_ARROW) {
    bike.body.position.x = bike.body.position.x - 10
    camera.position.x = bike.body.position.x
    //camera.position.y=bike.body.position.y
  }
  if (keyCode === UP_ARROW) {

    bike.addImage("bike", upbike)
  }
  // if (keyCode === DOWN_ARROW) {
  //   bike.body.angle(10);
  // }
  if (keyCode === 32 && bike.body.position.y > 250) {
    bike.body.position.y = bike.body.position.y - 10
  }
}
function spawnObstacle() {
  if (frameCount % 100 === 0) {
    obstacle = createSprite(bike.body.position.x + 920, 330, 50, 50)
    obstacle.addImage(obstacleImg)
    obstacle.velocityX = -2;
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
  }

}
function rampM() {
  if (frameCount % 100 === 0) {
    ramp = new Ramp(600, 300, 100)
  }
}