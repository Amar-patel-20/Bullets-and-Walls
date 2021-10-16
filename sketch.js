var wall,bullet
var speed,weight
var deformation,thickness

function setup() {
  createCanvas(1200,400);
  bullet = createSprite(50, 200, 30, 20);
  bullet.shapeColor = 'white'
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  wall = createSprite(1100,200,thickness,height/2)
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0
  
  deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness)
  if(deformation < 4 ){

    wall.shapeColor = 'green'
  }
  if(deformation >= 4 && deformation <= 12){
    wall.shapeColor = 'yellow'
  }
  if(deformation > 12 ){
    wall.shapeColor = 'red'
  }
}

  drawSprites();
}

