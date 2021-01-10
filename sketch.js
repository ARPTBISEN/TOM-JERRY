var ground,groundimg;
var cat1,cat2,cat3,cat4,cat;
var rat1,rat2,rat3,rat4,rat;


function preload() {
    //load the images here
    groundimg=loadImage("images/garden.png");
    rat1=loadAnimation("images/jerryOne.png");
    rat2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    rat3=loadAnimation("images/jerryFour.png");
    
    cat1=loadAnimation("images/tomOne.png");
    cat2=loadAnimation("images/tomfour.png");
    cat3=loadAnimation("images/tomTwo.png","images/tomThree.png");
    
}

function setup(){
    createCanvas(1080,800);
    //create tom and jerry sprites here
    
    ground=createSprite(500,400)
    ground.addImage(groundimg);
    ground.scale=1.2;
    
    cat=createSprite(800,610);
    cat.addAnimation("running",cat1)
    cat.scale=0.2
    
    rat=createSprite(200,600);
    rat.addAnimation("teasing",rat1);
    rat.scale=0.2

    // cat.debug=true;
    // rat.debug=true;
}

function draw() {
    
    background("red");
    //Write condition here to evalute if tom and jerry collide
    keyPressed();
    isTouching();
    drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
    if (keyDown("left")){
        cat.velocityX=-4;   
        cat.addAnimation("running",cat3);        
        cat.changeAnimation("running");        
        rat.addAnimation("teasing",rat2);
        rat.changeAnimation("teasing");
    }
}
function isTouching(){
    if(cat.x-rat.x<(cat.width-rat.width)/2){
        cat.addAnimation("running",cat2);        
        cat.changeAnimation("running");        
        rat.addAnimation("teasing",rat3);
        rat.changeAnimation("teasing");
        cat.velocityX=0
    }
}

