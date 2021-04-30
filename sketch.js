var obstacle2, screwdriverIMG, screwIMG, coinIMG, backgroundIMG, obstacle1,obstacle3;
var boy, boyIMG;
var object, objectIMG;
var image1,image2,image3;
var objectGroup,obstacleGroup;
var score1 = 0;
var score2 = 0;
var gbar1,gbar2,gbar3,gbar4,gbar5;
var bbar1,bbar2,bbar3,bbar4,bbar5;
var score1IMG,score2IMG;
var obstacle;
var gameState = "collect";


function preload() {
  obstacle2 = loadImage('Images/pencil.png');
  screwdriverIMG = loadImage('Images/Screwdriver.png');
  screwIMG = loadImage('Images/Screw.png');
  coinIMG = loadImage('Images/Coin.png');
  backgroundIMG = loadImage('Images/BG.jpg');
  obstacle1 = loadImage('Images/watch.png');
  boyIMG = loadImage('Images/worker.png');
  image1 = loadImage('Images/Screw.png');
  image2 = loadImage('Images/Screwdriver.png');
  image3 = loadImage('Images/coin.png');
  score1IMG = loadImage('Images/gbutton.png');
  score2IMG = loadImage('Images/bbutton.png');
  obstacle3 = loadImage('Images/paper.png');

}


function setup() {
  createCanvas(800, 800);

  boy = createSprite(434, 660, 10, 10);
  boy.addImage(boyIMG);
  boy.scale = 0.6;
  boy.setCollider("rectangle",0,0,150,480);
  objectGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {
  background(backgroundIMG);


  if(gameState == "collect") {
  if (keyDown(LEFT_ARROW)) {
    boy.x = boy.x - 8;
  }

  if (keyDown(RIGHT_ARROW)) {
    boy.x = boy.x + 8;
  }

  if (objectGroup.isTouching(boy)) {
    score1 = score1 + 1;
    //console.log(score1);
  }

  if (obstacleGroup.isTouching(boy)) {
    score2 = score2 +1;
  }

  if(score1 == 15) {
     gbar1 = createSprite(52,20,30,10);
     gbar1.addImage(score1IMG);
     gbar1.scale = 0.15;
     gbar1.shapeColor = "green";
  }

  if(score1 == 45) {
    gbar2 = createSprite(116,20,30,10);
    gbar2.addImage(score1IMG);
    gbar2.scale = 0.15;
    gbar2.shapeColor = "green";
  }

  if(score1 == 75) {
    gbar3 = createSprite(180,20,30,10);
    gbar3.addImage(score1IMG);
    gbar3.scale = 0.15;
    gbar3.shapeColor = "green";
  }

  if(score1 == 105) {
    gbar4 = createSprite(244,20,30,10);
    gbar4.addImage(score1IMG);
    gbar4.scale = 0.15;
    gbar4.shapeColor = "green";
  }

  if(score1 == 135) {
    gbar5 = createSprite(308,20,30,10);
    gbar5.addImage(score1IMG);
    gbar5.scale = 0.15;
    gbar5.shapeColor = "green";
  }
  //redbar
  if(score2 == 30) {
    bbar1 = createSprite(52,70,30,10);
    bbar1.addImage(score2IMG);
    bbar1.scale = 0.12;
 
 }

 if(score2 == 45) {
   bbar2 = createSprite(110,70,30,10);
   bbar2.addImage(score2IMG);
   bbar2.scale = 0.12;
 
 }

 if(score2 == 75) {
   bbar3 = createSprite(172,70,30,10);
   bbar3.addImage(score2IMG);
   bbar3.scale = 0.12;

 }

 if(score2 == 105) {
   bbar4 = createSprite(234,70,30,10);
   bbar4.addImage(score2IMG);
   bbar4.scale = 0.12;
  
 }

 if(score2 == 135) {
   bbar5 = createSprite(296,70,30,10);
   bbar5.addImage(score2IMG);
   bbar5.scale = 0.12;
  
 }

  spawnObjects();
  spawnObstacles();
  if(gbar5) {
    gameState = "build";
  }else if(bbar5){
    gameState = "destruct";
  }
}
  else if(gameState == "build") {
    console.log("game is in BUILDING STAGE");
  }
  else if (gameState == "destruct") {
    console.log("Game Over");
  }

  drawSprites();
  textSize(20);
  text("Score : " + score1,700,30);
  text("Score2 : " + score2,700,50);
  
  fill("white");
  text(mouseX + "," + mouseY, 50, 50);
  
}

function spawnObjects() {
  if (frameCount % 80 == 0) {
    object = createSprite(random(20, 700), 20, 10, 10);
   // object.scale = 0.2;
    object.lifetime = 68; 
    object.velocityY = 8;
    var rand =  Math.round(random(1, 3));

    switch(rand) {
      case 1 : object.addImage(image1);
               object.scale = 0.3;
      break;

      case 2 : object.addImage(image2);
               object.scale = 0.2;
      break;

      case 3 : object.addImage(image3);
               object.scale = 0.2;
      break;

      default : break;
    }

    objectGroup.add(object);

  }
}

function spawnObstacles() {
  if(frameCount % 80 == 0) {
    obstacle = createSprite(random(20,700),20,10,10);
    obstacle.lifetime = 68; 
    obstacle.velocityY = 8;
    var rand1 =  Math.round(random(1,3));

      switch(rand1) {
        case 1 : obstacle.addImage(obstacle1);
                obstacle.scale = 0.2;
        break;

        case 2 : obstacle.addImage(obstacle2);
                obstacle.scale = 0.2;
        break;
        
        case 3 : obstacle.addImage(obstacle3);
                 obstacle.scale = 0.2;

        default : break;
    }
    obstacleGroup.add(obstacle);

    //obstacle.addImage("obstacle" + rand1);

  }
}