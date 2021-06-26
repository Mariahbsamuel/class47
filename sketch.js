// var radius = 150 
// var appleAngle = 0
// var mangoAngle = 30
// var bananaAngle = 60
// var pearAngle = 90
// var obstacleAngle = 120
// var increment = 10
// var score = 0
// var gameState = "play"
// var appleX = 300, appleY = 300
// var mangoX = 300, mangoY = 300
// var bananaX = 300, bananaY = 300
// var pearX = 300, pearY = 300


// function preload(){
// Wheel = loadImage("Images/wheel.png");
// Apple = loadImage("Images/apple.png");
// Mango = loadImage("Images/mango.png");
// Banana = loadImage("Images/banana.png");
// Pear = loadImage("Images/pear.png");
// Knife = loadImage("Images/knife.png");
// Obstacle = loadImage("Images/alien.png");
// }

// function setup() {
//   createCanvas(700,700);
//  // createSprite(400, 200, 50, 50);

// wheel = createSprite(300,300);
// wheel.addImage(Wheel);
// wheel.debug = true
// wheel.setCollider("circle",0,0,105)

// knife = createSprite(300,650);
// knife.addImage(Knife)
// knife.scale = 0.5;
// knife.debug = true
// knife.setCollider("rectangle",20,-30,50,70)

// apple = createSprite(appleX, appleY)
// apple.addImage(Apple);
// apple.scale = 0.2
// apple.debug = true

// mango = createSprite(mangoX, mangoY)
// mango.addImage(Mango);
// mango.scale = 0.2

// banana = createSprite(bananaX, bananaY)
// banana.addImage(Banana);
// banana.scale = 0.2

// pear = createSprite(pearX, pearY)
// pear.addImage(Pear);
// pear.scale = 0.2

// obstacle = createSprite(300,300)
// obstacle.addImage(Obstacle);
// obstacle.scale = 0.1

// }

// function draw() {
//   background(255,255,255);  

//   text("Score = " + score, 50,50)
// if(gameState === "play"){
// appleAngle = appleAngle + increment
// apple.x = 300 + radius*Math.cos(appleAngle*Math.PI/180)
// apple.y = 300 + radius*Math.sin(appleAngle*Math.PI/180)
// apple.rotation = 60 - appleAngle

// mangoAngle = mangoAngle + increment
// mango.x = 300 + radius*Math.cos(mangoAngle*Math.PI/180)
// mango.y = 300 + radius*Math.sin(mangoAngle*Math.PI/180)
// mango.rotation = 60 - mangoAngle

// bananaAngle = bananaAngle + increment
// banana.x = 330 + radius*Math.cos(bananaAngle*Math.PI/180)
// banana.y = 330 + radius*Math.sin(bananaAngle*Math.PI/180)
// banana.rotation = 60 - bananaAngle

// pearAngle = pearAngle + increment
// pear.x = 330 + radius*Math.cos(pearAngle*Math.PI/180)
// pear.y = 330 + radius*Math.sin(pearAngle*Math.PI/180)
// pear.rotation = 60 - pearAngle

//   obstacleAngle = obstacleAngle + increment
//   obstacle.x = 330 + radius*Math.cos(obstacleAngle*Math.PI/180)
//   obstacle.y = 330 + radius*Math.sin(obstacleAngle*Math.PI/180)
//   obstacle.rotation = 60 - obstacleAngle
  
// wheel.rotation = wheel.rotation + 10;
// if(knife.isTouching(wheel)){
// knife.y = 650
// }

// if(keyDown("space")){
//   knife.velocityY = -8
// }

// if(knife.isTouching(apple)){
// apple.destroy()
// score = score + 30
// }
// if(knife.isTouching(banana)){
//   banana.destroy()
//   score = score + -10
// }
// if(knife.isTouching(mango)){
//   mango.destroy()
//   score = score + 30
// }
// if(knife.isTouching(pear)){
//   pear.destroy()
//   score = score + 30
// }
//  if(knife.isTouching(obstacle)){
//    gameState = "end"
//  }
// }

// else if(gameState === "end"){
//   text("GAME OVER", 400,400)
//   apple.visible = false
//   mango.visible = false
//   banana.visible = false
//   pear.visible = false
//   knife.visible = false
// }

//   drawSprites();
// } 

// var wheel_img,knife_img,fruit1_img,monster_img,fruit2_img,fruit3_img;
// var wheel,knife,fruit1,monster,fruit2,fruit3;

// var startx=300,starty=300,angle=0,radius=150,increment=10;

// var startx3=300,starty3=300,angle3=30,increment3=8;

// var startx4=300,starty4=300,angle4=90,radius4=150,increment4=16;

// var startx2=300,starty2=300,angle2=120,radius2=150,increment2=5;

// var gameState="play";
// var score=0;
// var fruit_destroy1=0;
// var gamesound;
// var knife_hitSound,gameoverSound;
// var sound=true;
// var wheel_hit=0;
// var destroy = true


// //var fruit_destroy2=0;
// function preload() {

 
//   wheel_img=loadImage("images1/wheel.png");
//   knife_img=loadImage("images1/sword.png");
//   fruit1_img=loadImage("images1/fruit2.png");
//   monster_img=loadImage("images1/monster.png");
//   fruit2_img=loadImage("images1/fruit1.png");
//   fruit3_img=loadImage("images1/fruit3.png");
//   // gamesound=loadSound("sounds/wagon_wheel.mp3")
//   // knife_hitSound=loadSound("sounds/knife_cutting.mp3");
//   // gameoverSound=loadSound("sounds/game_over.mp3");
// }

// function setup() {

//   createCanvas(700,700);
// // gamesound.play();

// wheel=createSprite(300,300);
// wheel.scale=1.3;
// wheel.addImage(wheel_img);
// wheel.rotation=270;
// wheel.debug=false;
// wheel.setCollider("circle",0,0,105);
  
// knife=createSprite(300,650);
// knife.addImage(knife_img);
// knife.rotation=-45;
// knife.debug=false;
// knife.setCollider("rectangle",20,-30,50,70);

// fruit1=createSprite(300,300);
// fruit1.addImage(fruit1_img);
// fruit1.scale=0.3;
// fruit1.debug=false;

// fruit2=createSprite(300,300);
// fruit2.addImage(fruit2_img);
// fruit2.scale=0.3;
// fruit2.debug=false;

// fruit3=createSprite(300,300);
// fruit3.addImage(fruit3_img);
// fruit3.scale=0.3;
// fruit3.debug=false;

// monster=createSprite(300,300);
// monster.addImage(monster_img);
// monster.scale=0.3;

//  }

// function draw() {
//  background(rgb(38,0,73));

//  textSize(20);
//  text("SCORE: "+score,50,70);
 
//    if(gameState==="play"){
   
//     wheel.rotation=wheel.rotation+10;

//     angle=angle+increment;
//     fruit1.x=300+radius*Math.cos(angle*Math.PI/180);
//     fruit1.y=300+radius*Math.sin(angle*Math.PI/180);
//     fruit1.rotation=60-angle;

//     angle3=angle3+increment3;
//     fruit2.x=300+radius*Math.cos(angle3*Math.PI/180);
//     fruit2.y=300+radius*Math.sin(angle3*Math.PI/180);
//     fruit2.rotation=60-angle3;

//     angle4=angle4+increment3;
//     fruit3.x=300+radius*Math.cos(angle4*Math.PI/180);
//     fruit3.y=300+radius*Math.sin(angle4*Math.PI/180);
//     fruit3.rotation=60-angle4;

//     angle2=angle2+increment2;
//     monster.x=300+radius2*Math.cos(angle2*Math.PI/180);
//     monster.y=300+radius2*Math.sin(angle2*Math.PI/180);
//     monster.rotation=60-angle2;

//     if(keyDown("up")){
//       knife.velocityY=-5;
//     }}

     
// else{
//   gameState="end";
// }

//     if(knife.isTouching(fruit1)&& destroy === true){
       
//        fruit1.destroy();
//        score=score+10;
     
//       //  knife_hitSound.play();
//     }

//     if(knife.isTouching(fruit2) ){
//       fruit2.destroy();
//       score=score+10;
     
     
//    }

//    if(knife.isTouching(fruit3)){
//     fruit3.destroy();
//     score=score+10;
  
//  }

//   if(keyDown("r")){
//     knife.velocityY = -8;
//   }
  

//     if(keyDown("space") && knife.y<0){
//        knife.y=650;
//        knife.x=300;
//        knife.velocityY=0;
//     }

//     if(knife.isTouching(monster)){
//       if(score<30){
//       gameState="end";
//       }
//       else{
//         monster.destroy();
//         console.log("win");
//         gameState="win";
//       }
//     }

   

//   if(gameState==="win"){
//     textSize(40);
//     text("CONGRATS YOU WIN!!!",200,100);
//     knife.velocityY=0;
//   }

//   if(gameState==="end"){
//     textSize(40);
//     text("GAMEOVER!!!",200,100);
//     knife.velocityY=0;
 
//   }

//   if(keyDown("w") && gameState === "end"){
//     gameState = "play"
//     score = 0;
//   }

//  drawSprites();
// }

var wheel_img,knife_img,fruit1_img,monster_img,fruit2_img,fruit3_img;
var wheel,knife,fruit1,monster,fruit2,fruit3;

var startx=300,starty=300,angle=0,radius=150,increment=10;

var startx3=300,starty3=300,angle3=30,increment3=8;

var startx4=300,starty4=300,angle4=90,radius4=150,increment4=16;

var startx2=300,starty2=300,angle2=120,radius2=150,increment2=5;

var gameState="play";
var score=0;
var fruit_destroy1=0;
var gamesound;
var knife_hitSound,gameoverSound;
var sound=true;
var wheel_hit=0;
var fruit_destroy2=0;
function preload() {

 
  wheel_img=loadImage("images1/wheel.png");
  knife_img=loadImage("images1/sword.png");
  fruit1_img=loadImage("images1/fruit2.png");
  monster_img=loadImage("images1/monster.png");
  fruit2_img=loadImage("images1/fruit1.png");
  fruit3_img=loadImage("images1/fruit3.png");
  gamesound=loadSound("sounds/wagon_wheel.mp3")
  knife_hitSound=loadSound("sounds/knife_cutting.mp3");
  gameoverSound=loadSound("sounds/game_over.mp3");
}

function setup() {

  createCanvas(700,700);
gamesound.play();

wheel=createSprite(300,300);
wheel.scale=1.3;
wheel.addImage(wheel_img);
wheel.rotation=270;
wheel.debug=false;
wheel.setCollider("circle",0,0,105);
  
knife=createSprite(300,650);
knife.addImage(knife_img);
knife.rotation=-45;
knife.debug=false;
knife.setCollider("rectangle",20,-30,50,70);

fruit1=createSprite(300,300);
fruit1.addImage(fruit1_img);
fruit1.scale=0.3;
fruit1.debug=false;

fruit2=createSprite(300,300);
fruit2.addImage(fruit2_img);
fruit2.scale=0.3;
fruit2.debug=false;

fruit3=createSprite(300,300);
fruit3.addImage(fruit3_img);
fruit3.scale=0.3;
fruit3.debug=false;

monster=createSprite(300,300);
monster.addImage(monster_img);
monster.scale=0.3;

 }

function draw() {
 background(rgb(38,0,73));

 textSize(20);
 text("SCORE: "+score,50,70);
 
   if(gameState==="play"){
   
    wheel.rotation=wheel.rotation+10;

    angle=angle+increment;
    fruit1.x=300+radius*Math.cos(angle*Math.PI/180);
    fruit1.y=300+radius*Math.sin(angle*Math.PI/180);
    fruit1.rotation=60-angle;

    angle3=angle3+increment3;
    fruit2.x=300+radius*Math.cos(angle3*Math.PI/180);
    fruit2.y=300+radius*Math.sin(angle3*Math.PI/180);
    fruit2.rotation=60-angle3;

    angle4=angle4+increment3;
    fruit3.x=300+radius*Math.cos(angle4*Math.PI/180);
    fruit3.y=300+radius*Math.sin(angle4*Math.PI/180);
    fruit3.rotation=60-angle4;

    angle2=angle2+increment2;
    monster.x=300+radius2*Math.cos(angle2*Math.PI/180);
    monster.y=300+radius2*Math.sin(angle2*Math.PI/180);
    monster.rotation=60-angle2;

    if(keyDown("up") || touches.length > 0){
      knife.velocityY=-10;
      touches = []
    }

     if(knife.isTouching(wheel)){
       knife.velocityY=0;
       wheel.rotation=0;
       fruit1.x=140;
       fruit1.y=300;
       fruit1.rotation=0;
       fruit2.x=300;
       fruit2.y=150;
       fruit2.rotation=0;
       fruit3.x=200;
       fruit3.y=200;
       fruit3.rotation=0;
       monster.x=startx2+150;
       monster.y=starty2;
       monster.rotation=0;
     knife.y=600;
     wheel_hit=wheel_hit+1;
     }
if(wheel_hit<3){
gameState="play";
}
else{
  gameState="end";
}

    if(knife.isTouching(fruit1) ){
       
       fruit1.destroy();
       score=score+10;
       fruit_destroy1=1;
       knife_hitSound.play();
    }

    if(knife.isTouching(fruit2) ){
      fruit2.destroy();
      score=score+10;
      fruit_destroy1=2;
      knife_hitSound.play();
   }

   if(knife.isTouching(fruit3)){
    fruit3.destroy();
    score=score+10;
    fruit_destroy1=3;
    knife_hitSound.play();
 }

   if(fruit_destroy1===1 || fruit_destroy1===2 || fruit_destroy1===3){
    knife.x=300;
    knife.y=650;
    knife.velocityY=0;
    text("Press r to release the knife",450,400);
  
   }
if(keyDown('r')){
  fruit_destroy1=0;
}
  

    if(keyDown("space") && knife.y<0){
       knife.y=650;
       knife.x=300;
       knife.velocityY=0;
    }

    if(knife.isTouching(monster)){
      if(score<30){
      gameState="end";
      }
      else{
        monster.destroy();
        console.log("win");
        gameState="win";
      }
    }

  }  

  if(gameState=="win"){
    textSize(40);
    text("CONGRATS YOU WIN!!!",200,100);
    knife.velocityY=0;
  }

  if(gameState==="end"){
    textSize(40);
    text("GAMEOVER!!!",200,100);
    knife.velocityY=0;
  gamesound.stop();
   if(sound){
  gameoverSound.play();
  sound=false;
}
  }

  if(keyDown("a") && gameState === "end"){
  gameState = "play"
  score = 0;
  fruit_destroy1 = 0
  }

 drawSprites();
}