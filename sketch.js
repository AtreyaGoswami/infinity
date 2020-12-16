var baground,ball,obstacle1;

gamestate = END;
function setup(){
  createCanvas(400,200)
  baground = createSprite(400,200);
  baground.velocityY = -4;

  ball = createSprite(200,20);

}


function draw(){
 backround("black");
  
 if (keyDown("space")){
  ball.velocityY=-10;       
   }
   if(obstacle.isTouching(ball)){
    gameState = END;
  }
  drawSprites();

}


function obstacle(){
  if(World.frameCount % 60 === 0){
    obstacle1 = createSprite(200,220,28,10);
    obstacle1.y = randomNumber(400,10);
    obstacle1.velocityY = +4
  }
}

