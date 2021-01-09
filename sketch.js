var car,wall;
var weight,speed;

function setup() {
  createCanvas(800,400);


car= createSprite(100, 200, 40, 40);
wall= createSprite(780, 200, 60, 100);
// wall.shapeColor= color(80,80,80) 

 
 speed= random(30,130)
 car.velocityX= speed;

weight= random(400,1500)
}

function draw() {
  background("black");
if (wall.x-car.x<(car.width+wall.width)/2) {
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  console.log(deformation)
  if (deformation<100) {
    car.shapeColor=color("green");
    wall.shapeColor=color("white");
 }
 if (deformation>100 && deformation<180) {
  car.shapeColor=color("yellow");
  wall.shapeColor=color("white") ;
 }
 if (deformation>180) {
  car.shapeColor=color("red")
  wall.shapeColor=color("white")
 }
}    
 
 drawSprites();
}