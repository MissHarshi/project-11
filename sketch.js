
function preload(){
Ship_img = loadImage("sea.png")
Ship_img1 = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);
  // create a ship sprite 
 ship = createSprite(50,160,70,80)
ship.scale= 0.5
ship.addImage=(seaImg);
}

function draw() {
  background("blue");
 console.log(trex.y)
//code to reset the background
if(sea . x < 0){
sea.x = sea.width/2;
}
 // jump when space button id pressed
if(keydown("space")){
ship.velocityY = -15
}
ship.velocityY = ship.velocityY + 0.9

drawSprites();