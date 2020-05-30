var movedRect;
var fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=2;
  movedRect=createSprite(200,300,80,30);
  movedRect.shapeColor="green";
  movedRect.velocityY=-2;
}

function draw() {
  background(0,255,255); 
 

  
  if(movedRect.x-fixedRect.x<fixedRect.width/2+movedRect.width/2 
    &&fixedRect.x-movedRect.x<fixedRect.width/2+movedRect.width/2)
    {
      movedRect.velocityX=movedRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
     if( movedRect.y-fixedRect.y<fixedRect.height/2+movedRect.height/2 &&
     fixedRect.y-movedRect.y<fixedRect.height/2+movedRect.height/2){
        movedRect.velocityY=movedRect.velocityY*(-1);
        fixedRect.velocityY=movedRect.velocityY*(-1);

         }

         
  
  drawSprites();
  
}