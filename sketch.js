var a,b;

function setup() {
  createCanvas(800,800);
  a = createSprite(400, 200, 50, 50);
  b = createSprite(200,200,20,20);
  a.shapeColor = "green";
  b.shapeColor = "green";
 a.velocityX = -4
 b.velocityX = 4
}

function draw() {
  background(255,255,255);  
 // b.x = World.mouseX;
  //b.y = World.mouseY;

if(a.x-b.x<a.width/2 + b.width/2 && b.x-a.x<a.width/2 + b.width/2 ){
  a.velocityX = a.velocityX * -1;
  b.velocityX = b.velocityX * -1;
}
if(a.y-b.y<a.height/2 + b.height/2 && b.y-a.y<b.height/2 + a.height/2  ){
  a.velocityY = a.velocityY * -1;
  b.velocityY = b.velocityY * -1;
}
 

  drawSprites();
}