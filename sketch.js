var fixed,moving
function setup() {
  createCanvas(800,400);
  fixed=createSprite(200, 300, 50, 50);
   fixed.shapeColor="green"; fixed.debug=true; 
   moving=createSprite(300, 300, 50, 50);
    moving.shapeColor="green"; 
    moving.debug=true;
}

function draw() {
  background(255,255,255);
  moving.x=mouseX
  moving.y=mouseY
 
  if(moving.x-fixed.x<moving.width/2+fixed.width/2&&fixed.x-moving.x<moving.width/2+fixed.width/2&&moving.y-fixed.y<moving.height/2+fixed.height/2&&fixed.y-moving.y<fixed.height/2+moving.height/2)
  { moving.shapeColor="red"; fixed.shapeColor="red"; }
  else{ moving.shapeColor="green"; 
  fixed.shapeColor="green"; }
  
  drawSprites();
}
























