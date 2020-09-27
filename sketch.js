var Play=1;
var End=2;
var gameState=Play;
var survivalTime=0;
var monkey , monkey_running,group,invisibleGround;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400, 400);


  
  ground = createSprite(200,370,800,60);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  
  
  monkey=createSprite(100,300,20,20); 
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.1;  
  
  
  invisibleGround=createSprite(200,370,400,40);
  invisibleGround.visible=false;
  
   obstaclesGroup = createGroup();
  bananaGroup = createGroup();
}


function draw() {
background(100);
  
stroke("white");
  textSize(20);
  fill("white");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,130,50);
  
  
  
  
if(gameState===Play){  
   if(keyDown("space")&& monkey.y >= 200){
     
     monkey.velocityY=-12;

   
   }

  monkey.velocityY = monkey.velocityY + 0.8;
if (ground.x < 0){
      ground.x = ground.width/2;
    
  
  
}
   bananaFunction();
Obstacles();
}  
  drawSprites();
  monkey.collide(invisibleGround);
  
}



function bananaFunction (){
if(World.frameCount%80===0){
  banana =createSprite(190,270,20,20);
banana.addImage("banana",bananaImage);
banana.y=Math.round(random(120,200));
  banana.scale=0.1;
banana.velocityX=-4;
  banana.lifetime=100;
 bananaGroup.add(banana);

}
  
}
function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,340,10,40);
   obstacle.addImage("obstacle", obstacleImage);
   obstacle.velocityX = -6;
   
    
    
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 80;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}

