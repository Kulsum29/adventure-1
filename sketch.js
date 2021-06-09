var bg,boy,boyAnimation, forestBg,FG;

function preload(){
  forestBg = loadImage("infiniteForest.png")
  boyAnimation = loadAnimation("boy1.png","boy2.png","boy3.png","boy5.png","boy5-.png","boy6.png","boy7.png","boy8.png","boy9.png","boy10.png")
}
function setup(){
  createCanvas(900,500)
  bg=createSprite(450,250);
  bg.addImage(forestBg);
  bg.scale=0.25
  bg.x=bg.width*bg.scale/2
  boy = createSprite(100,100)
  boy.addAnimation("walking",boyAnimation);
  boy.scale=0.5
  boy.velocityY=2;
  FG=createSprite(100,200,100,10)
  FG.shapeColor="maroon"
  edges = createEdgeSprites(); 
}

function draw(){
  background("darkgreen");
  boy.collide(FG)
  drawSprites();
}