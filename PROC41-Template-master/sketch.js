
var backgroundimg,scene;
var man,manimg;




function preload(){


    backgroundimg = loadImage("image/tushar.jpg");
    manimg = loadAnimation("image/0.png","image/2.png","image/3.png","image/5.png","image/6.png","image/8.png","image/9.png","image/10.png");
   
   
    
}

function setup(){

   createCanvas(displayWidth,displayHeight);
    scene = createSprite(displayWidth/2,displayHeight/2);
    scene.addImage("scene",backgroundimg);
    scene.scale = 1.5;

    man = createSprite(displayWidth/2,displayHeight-150);
    man.addAnimation("man",manimg);
    man.scale=0.5;
    

    ground= createSprite(displayWidth/2,displayHeight-50),displayWidth,20;



    
}


    var ground;


function draw(){
    
   background("blue");

    scene.velocityX=-3;

    if(scene.x < 700 ){
       scene.x = displayWidth/2;
    }

    if(keyDown("right")){

        man.x = man.x +5;
    }

    if(man.x > displayWidth){
        man.x = 100;

    }

    if(keyDown("space")){

        man.velocityY = -10;

    }

    man.velocityY = man.velocityY + 0.8;


    drawSprites();
}   

