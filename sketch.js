var player;
var triangle;
var bubble;
var gameOver;
var light;
var lazer,lazer2;
var collideScore = 0;
var gameState = 1;
var lazerArray;
var start;
var play;
var victory;
var bulletsLeft = 10;
function preload(){
   triangle = loadImage("tri.png");
   bubbles = loadImage("bubble.png");
   light = loadImage("laser.png");
   gameOver = loadImage("gameover.png");
   play = loadImage("start.png");
   victory = loadImage("victory.jpg");
}
function setup() {
  createCanvas(600,400);
  player = createSprite(300,200,10,10);
  player.addImage(triangle);
  player.scale = 0.1;
  bubbleGroup = new Group();
  bubbleGroup2 = new Group(); 
  
  lazer = createSprite(300,200,10,10);
  lazer.addImage(light);
  lazer.scale = 0.05;
  //lazer.debug = true;
  lazer.setCollider("rectangle",0,0,0,0)
  lazer2 = createSprite(300,200,10,10);
  lazer2.addImage(light);
  lazer2.scale = 0.05;
  //lazer2.debug = true;
  lazer2.setCollider("rectangle",0,0,0,0)
  lazer3 = createSprite(300,200,10,10);
  lazer3.addImage(light);
  lazer3.scale = 0.05;
  //lazer3.debug = true;
  lazer3.setCollider("rectangle",0,0,0,0)
  lazer4 = createSprite(300,200,10,10);
  lazer4.addImage(light);
  lazer4.scale = 0.05;
  //lazer4.debug = true;
  lazer4.setCollider("rectangle",0,0,0,0)
  lazer5 = createSprite(300,200,10,10);
  lazer5.addImage(light);
  lazer5.scale = 0.05;
  //lazer5.debug = true;
  lazer5.setCollider("rectangle",0,0,0,0)
  lazer6 = createSprite(300,200,10,10);
  lazer6.addImage(light);
  lazer6.scale = 0.05;
  //lazer6.debug = true;
  lazer6.setCollider("rectangle",0,0,0,0)
  lazer7 = createSprite(300,200,10,10);
  lazer7.addImage(light);
  lazer7.scale = 0.05;
  //hlazer7.debug = true;
  lazer7.setCollider("rectangle",0,0,0,0)
  lazer8 = createSprite(300,200,10,10);
  lazer8.addImage(light);
  lazer8.scale = 0.05;
  lazer8.setCollider("rectangle",0,0,0,0)
  lazer9 = createSprite(300,200,10,10);
  lazer9.addImage(light);
  lazer9.scale = 0.05;
  lazer9.setCollider("rectangle",0,0,0,0)
  lazer10 = createSprite(300,200,10,10);
  lazer10.addImage(light);
  lazer10.scale = 0.05;
  lazer10.setCollider("rectangle",0,0,0,0)
  lazerArray = [lazer,lazer2,lazer3,lazer4,lazer5,lazer6,lazer7,lazer8,lazer9,lazer10];
  for(var i in lazerArray){
    lazerArray[i].visible = false;
  }
  start = createSprite(300,370,10,10)
  start.addImage(play);
  start.scale = 0.2;
}

  
function draw() {
  background("lightgreen");
  if(gameState === 1){
    player.visible = false;
    push();
    fill("black")
    textSize(25);
    stroke("blue");
  text("BUBBLE SHOOTER",170,50);
  pop();
  push();
  fill("red");
  textSize(17);
  text("You have to make 5 points to win the game by shooting through the bubbles",10,100);
  text("Use ↥ arrow key to move the player upwards, ↧ arrow key to move downwards",10,150);
  text("Use ↦ arrow key to turn right, ↤ arrow key to turn left",60,200);
  text("Beware, don't collide with the bubbles or else it is game over",60,250);
  pop();
  push();
  fill("red");
  textSize(15)
  text("Use number keys from 1 to 10 to shoot, once if a key is pressed, you can't press it again",5,300);
  pop();
  start.visible = true;
}
  if(mousePressedOver(start)){
    gameState = 2;
  }
  
  if(gameState === 2){
    player.visible = true;
    start.visible = false;
    if(keyIsDown(RIGHT_ARROW)){
      player.rotation = +90;
      for(var i in lazerArray){
        lazerArray[i].rotation = +90;
      }
    }
    if(keyIsDown(LEFT_ARROW)){
      player.rotation = -90;
     for(var i in lazerArray){
       lazerArray[i].rotation =-90
     }
    }
    if(keyIsDown(UP_ARROW)){
      player.y = player.y - 10;
      for(var i in lazerArray){
        lazerArray[i].y -= 10;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      player.y = player.y + 10;
      for(var i in lazerArray){
        lazerArray[i].y += 10;
      }
    }
    
    if(player.y > 400){
      player.y = 0;
      for(var i in lazerArray){
        lazerArray[i].y = 0;
      }
    }
    if(player.y < 0){
      player.y = 400;
      for(var i in lazerArray){
        lazerArray[i].y = 400;
      }
    }
      for(var i in lazerArray){
        if(lazerArray[i].x > 600){
          lazerArray[i].destroy();
        }
      }
      if(bubbleGroup.x > 600 ||bubbleGroup.x < 0 ){
        bubbleGroup.destroyEach();
      }
      if(bubbleGroup2.x > 600 || bubbleGroup2.x < 0){
        bubbleGroup2.destroyEach();
      }
    spawnBubbles();
    spawnBubbles2();
    for(var i in lazerArray){
      if(lazerArray[i].collide(bubbleGroup)||lazerArray[i].collide(bubbleGroup2)){
        collideScore = collideScore + 1;
        lazerArray[i].destroy();
        bubbleGroup.destroyEach();
        bubbleGroup2.destroyEach();
      }
    }
    for(var i in lazerArray){
      if(lazerArray[i].x > 300 && lazerArray[i].x < 320|| lazerArray[i].x < 300 && lazerArray[i].x > 280){
        bulletsLeft -= 1;
      }
    }
    fill("orange");
    textSize(20);
    text("Score : "+collideScore,50,50);
    text("Bullets Left : "+bulletsLeft,350,50);
    
  }
  if(bulletsLeft === 0||bubbleGroup.collide(player)||bubbleGroup2.collide(player)){
    gameState = 3;
  }
  for(var i in lazerArray){
  if(gameState === 3){
    image(gameOver,0,0,600,400);
    lazerArray[i].visible = false;
    player.destroy();
    bubbleGroup.destroyEach();
    bubbleGroup2.destroyEach();
  }
}
if(collideScore === 10){
  gameState = 4;
}
if(gameState === 4){
  image(victory,0,0,600,400);
    lazerArray[i].visible = false;
    player.destroy();
    bubbleGroup.destroyEach();
    bubbleGroup2.destroyEach();
}
  drawSprites();
}
function spawnBubbles(){
  if(World.frameCount % 150 === 0){
  bubble = createSprite(10,random(0,400),40,40);
  bubble.addImage(bubbles);
  bubble.velocityX = 5;
  bubble.scale = 0.08;
  bubbleGroup.add(bubble);
}
}
function spawnBubbles2(){
  if(World.frameCount % 150 === 0){
  bubble2 = createSprite(790,random(0,400),40,40);
  bubble2.addImage(bubbles);
  bubble2.velocityX = -5;
  bubble2.scale = 0.08;
  bubbleGroup2.add(bubble2);
}
}

function keyPressed(){
  if(lazer.rotation === -90){
  if(keyCode === 49){
    lazer.velocityX =-10;
    lazer.scale = 0.05;
    lazer.visible = true;
    
  }
}
if(lazer.rotation === 90){
  if(keyCode === 49){
    lazer.velocityX = 10;
    lazer.scale = 0.05;
    lazer.visible = true;
    
  }
}
if(lazer2.rotation === -90){
  if(keyCode === 50){
    lazer2.velocityX =-10;
    lazer2.scale = 0.05;
    lazer2.visible = true;
  
  }
}
if(lazer2.rotation === 90){
  if(keyCode === 50){
    lazer2.velocityX = 10;
    lazer2.scale = 0.05;
    lazer2.visible = true;
    
  }
}
if(lazer3.rotation === -90){
  if(keyCode === 51){
    lazer3.velocityX =-10;
    lazer3.scale = 0.05;
    lazer3.visible = true;
  }
}
if(lazer3.rotation === 90){
  if(keyCode === 51){
    lazer3.velocityX = 10;
    lazer3.scale = 0.05;
    lazer3.visible = true;
  }
}
if(lazer4.rotation === -90){
  if(keyCode === 52){
    lazer4.velocityX =-10;
    lazer4.scale = 0.05;
    lazer4.visible = true;
  }
}
if(lazer4.rotation === 90){
  if(keyCode === 52){
    lazer4.velocityX = 10;
    lazer4.scale = 0.05;
    lazer4.visible = true;
  }
}
if(lazer5.rotation === -90){
  if(keyCode === 53){
    lazer5.velocityX =-10;
    lazer5.scale = 0.05;
    lazer5.visible = true;
  }
}
if(lazer5.rotation === 90){
  if(keyCode === 53){
    lazer5.velocityX = 10;
    lazer5.scale = 0.05;
    lazer5.visible = true;
  }
}
if(lazer6.rotation === -90){
  if(keyCode === 54){
    lazer6.velocityX =-10;
    lazer6.scale = 0.05;
    lazer6.visible = true;
  }
}
if(lazer6.rotation === 90){
  if(keyCode === 54){
    lazer6.velocityX = 10;
    lazer6.scale = 0.05;
    lazer6.visible = true;
  }
}
if(lazer7.rotation === -90){
  if(keyCode === 55){
    lazer7.velocityX =-10;
    lazer7.scale = 0.05;
    lazer7.visible = true;
  }
}
if(lazer7.rotation === 90){
  if(keyCode === 55){
    lazer7.velocityX = 10;
    lazer7.scale = 0.05;
    lazer7.visible = true;
  }
}
if(lazer8.rotation === -90){
  if(keyCode === 56){
    lazer8.velocityX =-10;
    lazer8.scale = 0.05;
    lazer8.visible = true;
    
  }
}
if(lazer8.rotation === 90){
  if(keyCode === 56){
    lazer8.velocityX = 10;
    lazer8.scale = 0.05;
    lazer8.visible = true;
    
  }
}
if(lazer9.rotation === -90){
  if(keyCode === 57){
    lazer9.velocityX =-10;
    lazer9.scale = 0.05;
    lazer9.visible = true;
    
  }
}
if(lazer9.rotation === 90){
  if(keyCode === 57){
    lazer9.velocityX = 10;
    lazer9.scale = 0.05;
    lazer9.visible = true;
  
  }
}
if(lazer10.rotation === -90){
  if(keyCode === 48){
    lazer10.velocityX =-10;
    lazer10.scale = 0.05;
    lazer10.visible = true;
    
  }
}
if(lazer10.rotation === 90){
  if(keyCode === 48){
    lazer10.velocityX = 10;
    lazer10.scale = 0.05;
    lazer10.visible = true;
    
  }
}
}